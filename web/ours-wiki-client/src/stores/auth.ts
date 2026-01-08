import { defineStore } from 'pinia';

interface AuthState {
  token: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: null,
  }),

  // 开启持久化
  persist: {
    key: 'auth-storage',
    storage: localStorage,
  },

  actions: {
    setToken(token: string) {
      this.token = token;
    },

    clearToken() {
      this.token = null;
    },
  },
});
