<template>
  <div class="navbar">
    <div class="navbar-content">
      <slot name="navbar-left"></slot>
      <slot name="navbar-center"></slot>
      <slot name="navbar-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: flex-end;
  height: 90px;
  width: 100%;
  background-image: url("../../assets/background.svg");
  background-position-y: 36%;
  background-size: 100%;
  position: fixed;
  top: 1.5rem;
  z-index: 10;
  @media (max-width: 320px) {
    background-position-y: 18%;
  }
  @media (min-width: 768px) {
    background-position-y: 69%;
  }
  @media (min-width: 1024px) {
    background-position-y: 76%;
  }
  &-content {
    display: flex;
    height: 56px;
    justify-content: space-between;
    width: 100%;
    padding: 0 0.5rem;
    align-items: center;
    margin-bottom: 0.4rem;

    .insights {
      width: 50px;
      height: 32px;
    }
    .perfil {
      width: 56px;
      height: 56px;
    }
    .adicionar,
    .back {
      width: 24px;
      height: 24px;
    }
    a.v-btn.v-btn--is-elevated.v-btn--has-bg.v-btn--router.theme--light.v-size--default {
      background: none;
      border: none;
      height: 0;
    }
  }
}
</style>
