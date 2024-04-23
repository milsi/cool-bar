<template>
  <div
    id="info-card"
    class="min-h-46 card mx-auto my-3 grid min-w-full max-w-96 grid-cols-1 gap-y-3 divide-y bg-base-200 p-8"
  >
    <div>
      <h1 class="text-xl font-bold"><slot name="heading"></slot></h1>
    </div>
    <div class="p-3">
      <slot name="details"></slot>
    </div>
  </div>
</template>
