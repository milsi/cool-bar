<template>
  <div
    class="min-h-46 card mx-auto my-3 grid h-fit min-w-full max-w-96 grid-cols-1 gap-x-1 gap-y-2 divide-y bg-base-200 p-5 md:h-full"
  >
    <div class="h-1/6 min-h-fit">
      <h1 class="text-xl font-bold"><slot name="heading"></slot></h1>
      <h2 class="text-sm font-extralight"><slot name="instructions"></slot></h2>
    </div>
    <div class="top-0 h-5/6 p-3">
      <slot name="details"></slot>
    </div>
  </div>
</template>
