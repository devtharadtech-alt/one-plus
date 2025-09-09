<template>
  <header>
    <nav
      class="fixed top-0 w-full z-10 flex justify-between items-center px-4 md:px-6 py-4 shadow-md bg-[#f5f5f5]"
    >
      <button
        class="block md:hidden order-1 lg:order-2"
        @click="isOpen = !isOpen"
      >
        <img src="assets/icons/toggle.png" alt="toggle menu" />
      </button>
      <img
        src="assets/icons/icon one.svg"
        class="w-10 h-10 md:w-12 md:h-12 order-2 lg:order-1"
        alt="logo"
      />
      <ul
        class="hidden lg:flex text-base md:text-lg font-bold gap-3 md:gap-6 order-3"
      >
        <li><NuxtLink to="/">الرئيسية</NuxtLink></li>
        <li><NuxtLink to="#two">المزايا</NuxtLink></li>
        <li><NuxtLink to="#three">عن التطبيق</NuxtLink></li>
        <li><NuxtLink to="#four">سجل معنا</NuxtLink></li>
      </ul>
      <div class="hidden lg:flex gap-3 md:gap-6 items-center order-4">
        <div class="flex items-center">
          <img src="assets/icons/images.png" class="p-2" alt="" />
          <p class="text-sm md:text-base">السعودية</p>
        </div>
        <button
          class="w-28 md:w-32 py-2 px-4 text-xs md:text-sm h-10 text-white cursor-pointer rounded-xl bg-gradient-to-br from-[#015B5B] via-[#015B5B] to-[#009A9A]"
        >
          تواصل معنا
        </button>
      </div>
      <div
        v-if="isOpen"
        class="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6 lg:hidden z-50"
      >
        <ul class="flex flex-col gap-4 text-base md:text-lg font-bold">
          <li><NuxtLink to="/">الرئيسية</NuxtLink></li>
          <li><NuxtLink to="#two">المزايا</NuxtLink></li>
          <li><NuxtLink to="#three">عن التطبيق</NuxtLink></li>
          <li><NuxtLink to="#four">سجل معنا</NuxtLink></li>
        </ul>
        <div class="flex flex-col items-center gap-4 mt-4">
          <div class="flex items-center">
            <img src="assets/icons/images.png" class="p-2" alt="" />
            <p class="text-sm md:text-base">السعودية</p>
          </div>
          <button
            class="w-28 md:w-32 py-2 px-4 text-xs md:text-sm h-10 text-white cursor-pointer rounded-xl bg-gradient-to-br from-[#015B5B] via-[#015B5B] to-[#009A9A]"
          >
            تواصل معنا
          </button>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <NuxtPage />
  </main>
  <footer class="bg-gradient-to-br from-[#015B5B] via-[#015B5B] to-[#009A9A]">
    <div class="w-full mx-auto justify-center flex flex-col items-center">
      <div
        class="flex flex-col items-center justify-center border-b border-b-white w-4/5 py-10 text-center"
      >
        <h1 class="text-white text-2xl font-bold mb-4">حمل التطبيق الان</h1>
        <div class="flex justify-center gap-4 mb-4">
          <button
            class="flex justify-center gap-2.5 w-44 h-14 py-2 px-4 cursor-pointer text-sm text-[#015B5B] rounded-lg bg-[#F5F5F5]"
          >
            <img
              src="assets/icons/google-play 1 (1).png"
              class="w-8 h-8 mt-1"
              alt="play store icon"
            />
            <p class="text-xs text-start">
              احصل عليه من<br />
              <span class="text-base font-bold">Google Play</span>
            </p>
          </button>
          <button
            class="flex justify-center gap-2.5 w-44 h-14 py-2 px-4 text-sm cursor-pointer text-[#015B5B] rounded-lg bg-[#F5F5F5]"
          >
            <img
              src="assets/icons/flowbite_apple-solid.png"
              class="w-8 h-8 mt-1"
              alt="App store icon"
            />
            <p class="text-xs text-start">
              احصل عليه من<br />
              <span class="text-base font-bold">App Store</span>
            </p>
          </button>
        </div>
        <p class="text-white text-lg font-bold">
          تطوير وتشغيل بواسطة
          <a href="#" class="text-[#F5F5F5] underline">ثراد تك</a>
        </p>
        <div
          class="py-2 font-bold text-white hidden max-[391px]:flex max-[391px]:justify-center"
        >
          <span class="mx-2"><NuxtLink to="/">سياسة الاستخدام</NuxtLink></span>
          <span class="mx-2"><NuxtLink to="/">الشروط والاحكام</NuxtLink></span>
        </div>
      </div>
      <div class="flex justify-around items-center w-full pt-4 pb-10">
        <img src="assets/icons/icon one white.png" class="w-12 h-12" alt="" />
        <ul
          class="text-base font-bold text-white flex gap-3 max-[391px]:hidden pr-30"
        >
          <li><NuxtLink to="/usagePolicy">سياسة الاستخدام</NuxtLink></li>
          <li><NuxtLink to="/termsConditions">الشروط والاحكام</NuxtLink></li>
        </ul>
        <ul class="flex gap-2">
          <li
            class="cursor-pointer w-10 h-10 flex items-center justify-center border rounded-full border-white"
          >
            <NuxtLink to="/">
              <img src="assets/icons/whatsapp.png" alt="" />
            </NuxtLink>
          </li>
          <li
            class="cursor-pointer w-10 h-10 flex items-center justify-center border rounded-full border-white"
          >
            <NuxtLink to="/">
              <img src="assets/icons/facebook.png" alt="" />
            </NuxtLink>
          </li>
          <li
            class="cursor-pointer w-10 h-10 flex items-center justify-center border rounded-full border-white"
          >
            <NuxtLink to="/">
              <img src="assets/icons/instagram.png" alt="" />
            </NuxtLink>
          </li>
          <li
            class="cursor-pointer w-10 h-10 flex items-center justify-center border rounded-full border-white"
          >
            <NuxtLink to="/">
              <img src="assets/icons/x.png" alt="" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>
<style>
main {
  background-color: #f5f5f5;
  padding-top: 80px;
}
html {
  scroll-behavior: smooth;
}
</style>
