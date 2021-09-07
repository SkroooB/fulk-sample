<template>
  <div class="bg-fulk-dark ">
    <div class="text-center text-8xl font-bold py-20 text-white">
    <div>
      <div class="flex justify-items-center justify-center space-x-5">
        <h1>New</h1>
        <h1 class="text-fulk-light">cellular</h1>
        </div>
      <h1>products</h1>
      <h1>on the market</h1>
    </div>
    <p class="text-lg font-normal pt-8 px-10">
      The future of animal products is right here. Safe food produced from animal cells instead of slaughtered animals. We bring you the latest on fermented and cultivated food products and news from cellular agriculture companies.
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
      <img src="@/assets/world.png" alt="world map">
    </div>
    <div class="flex justify-center justify-items-center items-center space-x-10 pt-10">
      <div class="text-3xl font-normal">
        GET STARTED NOW
        <router-link to="/register"><Button class="text-xl bg-fulk-light px-4 py-2 rounded hover:bg-fulk">Apply</Button></router-link>
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
