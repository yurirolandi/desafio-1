<template>
  <div class="loading">
    <v-progress-circular indeterminate color="white"></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: #0b0b0b8a;
  width: 100%;
  height: calc(100vh + 35px);
  z-index: 11;
}
</style>
