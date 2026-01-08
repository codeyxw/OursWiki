import axios from 'axios';
import type {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import { useAuthStore } from '@/stores/auth';

// 定义后端返回的数据结构
interface ResponseData<T = any> {
  code: number; // 业务状态码，200 表示成功
  message: string; // 提示信息
  data: T; // 实际数据
}

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const authStore = useAuthStore();
    if (authStore.token) {
      config.headers.Authorization = `Bearer ${authStore.token}`;
    }
    // 显示loading
    return config;
  },
  (error) => {
    // 请求错误处理
    console.error('请求拦截器错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // HTTP 状态码错误（如 404、500 等）
    if (error.response?.status === 401) {
      // 未授权，跳转登录页
      const authStore = useAuthStore();
      authStore.clearToken();
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export const request = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
  const response = await service(config);
  const resData = response.data as ResponseData<T>;
  if (resData.code !== 200) {
    // 抛出业务错误（可被调用方 catch）
    throw new Error(resData.message || '请求失败');
  }

  return resData.data;
};

export default service;
