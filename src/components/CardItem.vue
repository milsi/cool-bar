<template>
  <div
    class="min-h-46 card mx-auto my-3 grid h-fit min-w-full max-w-96 grid-cols-1 grid-rows-10 gap-x-1 gap-y-2 divide-y bg-base-200 p-5 md:h-full"
  >
    <div class="min-h-fit">
      <h1 class="text-xl font-bold"><slot name="heading"></slot></h1>
    </div>
    <div class="top-0 row-span-9 p-3">
      <slot name="details"></slot>
    </div>
  </div>
</template>
