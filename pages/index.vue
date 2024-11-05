<script lang="ts" setup></script>

<template>
  <div>
    <p class="text">Page: index</p>
    <div>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>

      <button type="button" class="btn btn-link">Link</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text {
  color: $primary;
  font-size: $fs-xl;
}
</style>
