<template>
  <div
    class="
      flex
      justify-between
      items-center
      px-2
      lg:px-10
      md:px-10
      bg-grayLight
      text-fulk-dark
      py-5
    "
  >
  
    <router-link to="/"
      ><img class="h-9" src="@/assets/Fulk_logo.png" alt="Logo"
    /></router-link>
    <div class="flex space-x-5 items-center">
      <router-link class="transition duration-75 ease-in hover:text-fulk" to="/"
        >Home</router-link
      >
      <router-link
        class="transition duration-75 ease-in hover:text-fulk"
        to="/Account"
        >Account</router-link
      >
      <router-link
        class="transition duration-75 ease-in hover:text-fulk"
        to="/Register"
        >Register</router-link
      >
      <div
        class="
          m-1
          mr-2
          w-10
          h-10
          relative
          flex
          justify-center
          items-center
          ring
          rounded-full
          bg-gray-500
          text-xl text-white
        "
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg"
          class="rounded-full"
        />
        <div
          class="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-red-500"
        ></div>
      </div>
    </div>
  </div>
  <router-view />
  <add-to-homescreen />
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>
