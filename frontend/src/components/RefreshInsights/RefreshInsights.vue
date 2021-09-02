<template>
  <div class="refresh-insights">
    <button class="refresh-insights__icon" @click.stop="$emit('buttonRefresh')">
      <img :src="image" alt="Loading" />
    </button>
    <p class="refresh-insights__text">Toque para exibir mais insights</p>
  </div>
</template>

<script>
import image from "@/assets/loadingInsight.svg";

export default {
  name: "RefreshInsights",
  data() {
    return {
      image: image,
    };
  },
};
</script>

<style lang="scss" scoped>
.refresh-insights {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  &__icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  &__text {
    font-family: "Exo 2", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #666666;
  }
}
</style>
