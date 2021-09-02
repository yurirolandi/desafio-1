<template>
  <div>
    <div class="skeleton-load" v-for="(item, index) in items" :key="index">
      <v-skeleton-loader v-bind="attrs" :type="tipo"></v-skeleton-loader>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tipo", "items"],
  data: () => ({
    attrs: {
      class: "mt-5 pa-2",
      boilerplate: true,
      elevation: 2,
    },
  }),
};
</script>

<style lang="scss" scoped>
.skeleton-load {
  background: white;
}
</style>
