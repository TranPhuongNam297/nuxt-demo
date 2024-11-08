// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Thêm cấu hình cho static files
  nitro: {
    serveStatic: true,
  },

  // Cấu hình router
  app: {
    baseURL: '/', // base URL của ứng dụng
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  // Các cấu hình khác của bạn
  devtools: { enabled: false },

  compatibilityDate: '2024-11-08',
})