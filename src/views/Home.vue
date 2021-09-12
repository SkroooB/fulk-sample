<template>
  <div class="bg-fulk-dark">
    <div
      class="
        text-center text-4xl
        lg:text-8xl
        md:text-8xl
        font-bold
        py-20
        text-white
      "
    >
      <div>
        <div
          class="
            flex
            justify-items-center justify-center
            space-x-3
            lg:space-x-5
            md:space-x-5
            sm:space-x-5
          "
        >
          <h1>One</h1>
          <h1 class="text-fulk-light">Stop</h1>
        </div>
        <h1>Shop</h1>
        <h1>for sea shipping services</h1>
      </div>
      <p class="text-lg font-normal pt-8 px-10">
        Register now to list your company or your request
      </p>
      <div class="flex justify-items-center justify-center pt-10 space-x-14">
        <div>
          <div class="flex text-base font-normal space-x-1 justify-end">
            <h1>COUNTRY:</h1>
            <h1 class="text-fulk font-bold">OMAN</h1>
          </div>
          <div>
            <h1 class="text-2xl text-fulk">Headquarters</h1>
          </div>
        </div>
        <div>
          <div class="flex text-base font-normal space-x-1 text-fulk-light">
            OTHER COUNTRIES
          </div>
          <div>
            <h1 class="text-2xl">China, India</h1>
          </div>
        </div>
      </div>
      <div class="flex justify-center justify-items-center pt-10">
        <img src="@/assets/world.png" alt="world map" />
      </div>
      <div
        class="
          flex
          justify-center justify-items-center
          items-center
          space-x-10
          pt-10
        "
      >
        <div class="text-3xl font-normal">
          GET STARTED NOW
          <router-link to="/register"
            ><Button
              class="text-xl bg-fulk-light px-4 py-2 rounded hover:bg-fulk"
              >Apply</Button
            ></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
