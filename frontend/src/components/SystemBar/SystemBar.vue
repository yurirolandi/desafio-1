<template>
  <v-system-bar dark color="#fff" class="system-bar" />
</template>

<script>
export default {
  name: "SystemBar",
};
</script>

<style lang="scss" scoped>
.system-bar {
  background-image: url("../../assets/systembar.png");
  background-size: 100%;
  background-repeat: no-repeat;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 10;
  @media (min-width: 768px) {
    background-position-y: 50%;
  }
}
</style>
