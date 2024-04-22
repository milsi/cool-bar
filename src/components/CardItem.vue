<template>
  <div
    id="info-card"
    class="min-w-md min-h-46 mx-auto my-3 grid max-w-96 grid-cols-1 gap-y-3 divide-y bg-base-200 p-8"
  >
    <div>
      <h1 class="text-xl font-bold"><slot name="heading"></slot></h1>
    </div>
    <div class="p-3">
      <slot name="details"></slot>
    </div>
  </div>
</template>

<style scoped>
#info-card {
  border-radius: 30px;
  background: linear-gradient(45deg, #e6e6e6, #fff);
  box-shadow:
    20px -20px 40px #d9d9d9,
    -20px 20px 40px #fff;
}
</style>
