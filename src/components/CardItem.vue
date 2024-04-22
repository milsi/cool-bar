<template>
  <div id="info-card" class="bg-base-200 m-3 divide-y p-8">
    <div>
      <h1 class="text-xl font-bold"><slot name="heading"></slot></h1>
    </div>
    <div class="">
      <slot name="details"></slot>
    </div>
  </div>
</template>

<style scoped>
#info-card {
  border-radius: 10px;
  background: #fff;
  box-shadow:
    21px 21px 32px #b1b1b1,
    -21px -21px 32px #fff;
}
</style>
