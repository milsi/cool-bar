<template>
  <div id="info-card">
    <div>
      <h1><slot name="heading"></slot></h1>
    </div>
    <slot name="details"></slot>
  </div>
</template>

<style scoped>
#info-card {
  border-radius: 10px;
  background: #fff;
  box-shadow:
    21px 21px 32px #b1b1b1,
    -21px -21px 32px #fff;
  height: 110%;
  margin: 1em;
  padding: 1.5em;
}
</style>
