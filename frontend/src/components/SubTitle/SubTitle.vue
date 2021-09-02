<template>
  <h3 class="subtitle-container">
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: "SubTitle",
};
</script>
<style lang="scss" scoped>
.subtitle-container {
  font-family: "Exo 2", sans-serif;
  color: #ed4d77;
  font-size: 20px;
  text-align: center;
}
</style>
