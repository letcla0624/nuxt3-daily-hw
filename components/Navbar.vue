<script setup lang="ts">
const route = useRoute();
const isRoomActive = computed(() => route.path.startsWith("/room"));
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">首頁</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              to="/room"
              class="nav-link"
              :class="{ active: isRoomActive }"
            >
              房型
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar-nav {
  .nav-link {
    &:hover,
    &.active {
      color: $primary;
    }

    &.active {
      font-weight: 500;
    }
  }
}
</style>
