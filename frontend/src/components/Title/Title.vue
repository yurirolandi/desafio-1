<template>
  <div class="title-container">
    <h1>
      {{ title }}
    </h1>
    <p>
      {{ email }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      default: "",
      type: String,
    },
    email: {
      default: "",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.title-container {
  text-align: center;
  h1 {
    color: white;
    font-family: "Exo 2", sans-serif;
    font-style: italic;
    font-weight: 100;
    font-size: 20px;
  }
  p {
    color: white;
    font-family: "Exo 2", sans-serif;
    font-style: italic;
    font-size: 15px;
    margin-top: -9px;
    font-weight: normal;
  }
}
</style>
