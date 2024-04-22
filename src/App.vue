<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <header>
    <nav role="tablist" class="tabs tabs-lifted">
      <RouterLink to="/" role="tab" class="tab">Home</RouterLink>
      <RouterLink to="/workouts" role="tab" class="tab">Workouts</RouterLink>
      <RouterLink to="/stats" role="tab" class="tab">Stats</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (width >= 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;

    /* margin-left: -1rem; */
    font-size: 1rem;

    /* padding: 1rem 0; */
    margin-top: 1rem;
  }
}
</style>
