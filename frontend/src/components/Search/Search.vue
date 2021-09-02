<template>
  <v-text-field
    class="search-filter"
    @input="handleSearch($event)"
    append-icon="mdi-magnify"
    :label="labelText"
    solo
    hide-details
  ></v-text-field>
</template>

<script>
export default {
  name: "Search",
  props: {
    labelText: {
      default: "",
      type: String,
    },
  },
  methods: {
    handleSearch(value) {
      this.$emit("update:searchFilter", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-filter {
  font-family: "Exo 2", sans-serif;
  color: #000 !important;
  font-style: italic;
  font-size: 14px;
  text-align: center;
}
</style>
