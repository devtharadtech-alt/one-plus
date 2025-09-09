import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  
  // لإلغاء ظهور devtools
  devtools: { enabled: false },

  // إعداد Tailwind CSS
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      hmr: {
        overlay: false // 👈 إلغاء شاشة اللودينج/الأخطاء
      }
    }
  },

  // تعطيل بعض الخصائص التجريبية (خليها فاضية دلوقتي)
  experimental: {},

  app: {
    head: {
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl'
      },
      title: 'One +',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
});
