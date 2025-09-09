<template>
  <section
    class="flex justify-center items-center md:flex-row flex-col md:px-16 py-10 bg-[#F5F5F5]"
  >
    <div class="px-4 w-full">
      <h1 class="md:text-4xl text-3xl font-bold mb-6">
        احجز حصتك التعليمية من أي مكان وفي أي وقت.
      </h1>
      <p class="md:w-5/6 w-full md:text-base text-sm mb-8 text-[#999999]">
        منصّة تعليمية توصلك مباشرةً لمدرّسين ومعلمين معتمدين عبر جلسات أونلاين
        (فيديو ) وقت ما يناسبك ومن أي مكان. بدل عناء التنقّل والدروس التقليدية،
        احجز حصّتك عن بُعد وتعلّم بسهولة ومرونة، مع تجربة تفاعلية آمنة تحافظ على
        خصوصيتك وتساعدك توصل لأهدافك التعليمية بسرعة وكفاءة.
      </p>
      <div class="flex gap-4">
        <button
          class="flex justify-center gap-2.5 w-44 h-14 py-2 px-4 cursor-pointer text-sm text-white rounded-lg bg-gradient-to-br from-[#015B5B] via-[#015B5B] to-[#009A9A]"
        >
          <img
            src="../assets/icons/google-play 1 (1).png"
            class="w-8 h-8 mt-1"
            alt="play store icon"
          />
          <p class="text-xs text-start">
            احصل عليه من<br />
            <span class="text-base font-bold">Google Play</span>
          </p>
        </button>
        <button
          class="flex justify-center gap-2.5 w-44 h-14 py-2 px-4 text-sm cursor-pointer text-white rounded-lg bg-gradient-to-br from-[#015B5B] via-[#015B5B] to-[#009A9A]"
        >
          <img
            src="../assets/icons/app store.png"
            class="w-8 h-8 mt-1"
            alt="App store icon"
          />
          <p class="text-xs text-start">
            احصل عليه من<br />
            <span class="text-base font-bold">App Store</span>
          </p>
        </button>
      </div>
    </div>
    <div class="md:w-2/5 w-full px-6">
      <img
        src="../assets/img/Group 1000001107.svg"
        class="md:w-4/5 w-full"
        alt="hero image"
      />
    </div>
  </section>
  <section
    class="flex justify-center items-center flex-col-reverse md:flex-row md:px-16 px-4 py-10 bg-[#F5F5F5]"
  id="two"
    >
    <div class="md:w-2/5 w-full">
      <img
        src="../assets/img/Group 7.svg"
        class="md:w-4/5 w-full"
        alt="hero image"
      />
    </div>
    <div class="md:px-4 md:w-3/5">
      <div class="">
        <h1 class="text-4xl relative line font-bold mb-6">مزايا التطبيق</h1>
        <p class="md:w-5/6 md:text-base text-sm text-[#015B5B] mb-8">
          منصة تعليمية ذكية صُممت لتكون نقطة التقاء رقمية تربط بين الطلاب
          والمراكز التعليمية
        </p>
      </div>
      <div class="w-5/6">
        <ul class="list-disc list-inside text-base flex flex-col gap-4">
          <li class="flex gap-2 md:text-base text-sm">
            <img src="../assets/icons/Variant8.svg" alt="mark for lists" />تصفح
            المحتوى التعليمي و الكورسات المتاحة بسهولة.
          </li>
          <li class="flex gap-2 md:text-base text-sm">
            <img src="../assets/icons/Variant8.svg" alt="mark for lists" />تقديم
            طلبات الاشتراك في الكورسات ومتابعة حالتها.
          </li>
          <li class="flex gap-2 md:text-base text-sm">
            <img
              src="../assets/icons/Variant8.svg"
              alt="mark for lists"
            />متابعة المحتوى الدراسي، الأسئلة، الفصول والشباتر بعد التفعيل
          </li>
          <li class="flex gap-2 md:text-base text-sm">
            <img src="../assets/icons/Variant8.svg" alt="mark for lists" />تقييم
            الكورسات وقراءة تقييمات المستخدمين الآخرين.
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section
    class="text-white w-full px-2 py-10 bg-gradient-to-br from-[#015B5B] via-[#015B5B] to-[#009A9A]"
  id="three"
    >
    <div class="flex flex-col max-[391px]:hidden">
      <h1 class="text-3xl text-center font-bold mb-2">تعليم… بسهولة وفاعلية</h1>
      <p class="text-center">
        متابعة التقدّم الدراسي في مكان واحد. كما توفر المنصة لوحات تحكم تحليلية
        متقدمة
      </p>
    </div>
    <div class="max-[391px]:block hidden">
      <h1 class="text-3xl text-center font-bold mb-2 px-2">
        رعايه طبيه ... ببساطة وسرعة
      </h1>
      <p class="text-center px-1">
        من أول تسجيل لحد الجلسة، كل خطوة في التطبيق مصممة عشان تسهّل عليك وتحافظ
        على راحتك وخصوصيتك.
      </p>
    </div>
    <div class="py-10 block max-[391px]:hidden">
      <img
        src="../assets/img/Group 1000001105.svg"
        class="w-5/6 mx-auto"
        alt="welcome image"
      />
    </div>
    <div class="py-10 max-[391px]:block hidden">
      <img
        src="../assets/img/section 3.png"
        class="w-5/6 mx-auto"
        alt="welcome image"
      />
    </div>

    <div class="flex justify-center gap-4">
      <button
        class="flex justify-center gap-2.5 w-44 h-14 py-2 px-4 cursor-pointer text-sm text-[#015B5B] rounded-lg bg-[#F5F5F5]"
      >
        <img
          src="../assets/icons/google-play 1 (1).png"
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
          src="../assets/icons/flowbite_apple-solid.png"
          class="w-8 h-8 mt-1"
          alt="App store icon"
        />
        <p class="text-xs text-start">
          احصل عليه من<br />
          <span class="text-base font-bold">App Store</span>
        </p>
      </button>
    </div>
  </section>
  <section
    class="flex justify-center flex-row max-[391px]:flex-col-reverse items-center w-full py-10 bg-[#F5F5F5]"
  >
    <div class="">
      <img
        src="../assets/img/Group 1000001154.png"
        class="pl-7"
        alt="hero image"
      />
    </div>
    <div class="max-[391px]:px-4 px-3">
      <div class="">
        <h1 class="text-4xl max-[391px]:text-3xl mb-6">
          ليه تعقّدها؟ التعليم صار أبسط!
        </h1>
        <p class="max-[391px]:font-medium text-[11px] font-bold mb-8">
          كل اللي تحتاجه لتعلّم فعال في جيبك. بدون مشاوير، بدون قيود… بس خطوات
          بسيطة وتكون في حصتك التعليمية.
        </p>
      </div>
      <div class="w-full">
        <ul
          class="list-disc list-inside text-base max-[391px]:text-sm flex flex-col gap-4"
        >
          <li class="flex gap-2">
            <img src="../assets/icons/Variant8.svg" alt="mark for lists" />
            منصة تعليمية ذكية صُممت لتكون نقطة التقاء رقمية تربط بين الطلاب
          </li>
          <li class="flex gap-2">
            <img src="../assets/icons/Variant8.svg" alt="mark for lists" />
            مكالمة أو فيديو حسب راحتك
          </li>
          <li class="flex gap-2">
            <img src="../assets/icons/Variant8.svg" alt="mark for lists" />
            معلمين و مراكز تعليمية معتمدة
          </li>
          <li class="flex gap-2">
            <img src="../assets/icons/Variant8.svg" alt="mark for lists" />
            خصوصية وأمان تام.
          </li>
          <li class="flex gap-2">
            <img src="../assets/icons/Variant8.svg" alt="mark for lists" />
            واجهة سهلة وسريعة الاستخدام
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section 
  class="px-6 md:px-16 py-10 bg-[#fefbf0]"
  id="four"
  >
    <div
      class="mx-auto text-xl font-semibold py-10 w-full md:w-5/6 grid gap-4 grid-cols-4 [grid-template-areas:'four three two one'] max-[391px]:grid-cols-2 max-[391px]:[grid-template-areas:'two four''tree one' text-center"
    >
      <div class="flex flex-col items-center">
        <img src="../assets/icons/download 1.png" class="w-8 h-8 mb-2" alt="" />
        <h1>20000</h1>
        <h1>تنزيل التطبيق</h1>
      </div>
      <div class="flex flex-col items-center">
        <img src="../assets/icons/users 1.png" class="w-8 h-8 mb-2" alt="" />
        <h1>20000</h1>
        <h1>عدد المستخدمين</h1>
      </div>
      <div class="flex flex-col items-center">
        <img src="../assets/icons/teacher.png" class="w-8 h-8 mb-2" alt="" />
        <h1>20000</h1>
        <h1>عدد سناتر تعليمية</h1>
      </div>
      <div class="flex flex-col items-center">
        <img src="../assets/icons/star 1.png" class="w-8 h-8 mb-2" alt="" />
        <h1>20000</h1>
        <h1>عدد التقييمات</h1>
      </div>
    </div>
    <div class="text-center py-10">
      <span class="text-4xl relative lineTwo font-bold mb-6">تواصل معنا</span>
    </div>
    <div
      class="max-w-6xlxl mx-auto h-fit py-10 px-6 rounded-lg bg-white flex md:flex-row flex-col-reverse justify-center items-center gap-6 shadow-lg"
    >
      <img
        src="../assets/img/group.png"
        class="w-full md:w-2/5 h-auto object-contain md:block"
      />
      <div class="w-full md:w-3/5 flex flex-col justify-between">
        <form class="flex flex-col w-full space-y-3">
          <div class="relative w-full">
            <input
              type="text"
              placeholder="الاسم بالكامل"
              class="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg text-right focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
            <img
              src="../assets/icons/profile.png"
              class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              alt="user icon"
            />
          </div>

          <div class="relative w-full">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              class="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-lg text-right focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
            <img
              src="../assets/icons/sms.png"
              class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              alt="email icon"
            />
          </div>

          <div class="relative w-full">
            <textarea
              rows="3"
              placeholder="استفسارك"
              class="w-full pr-10 pl-3 py-2 h-[180px] border border-gray-300 rounded-lg text-right resize-none focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            ></textarea>
            <img
              src="../assets/icons/sms.png"
              class="absolute right-3 top-3 text-gray-400 w-5 h-5"
              alt="email icon"
            />
          </div>
        </form>

        <button
          class="mt-4 w-36 py-2 px-4 h-10 text-white cursor-pointer rounded-lg bg-gradient-to-br from-[#015B5B] to-[#009A9A]"
        >
          إرسال
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.line::before {
  content: "";
  bottom: -10px;
  right: 0px;
  position: absolute;
  width: 185px;
  height: 3px;
  background-color: #f9d36b;
}
.lineTwo::before {
  content: "";
  bottom: -10px;
  right: 0px;
  position: absolute;
  width: 170px;
  height: 3px;
  background-color: #f9d36b;
}
</style>
<script setup>
</script>
