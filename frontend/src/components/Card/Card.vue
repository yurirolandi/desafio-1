<template>
  <div>
    <v-card v-for="(card, index) in cards" :key="index" class="ma-2">
      <v-card-text>
        <div class="text--primary">
          <router-link :to="{ path: '/edit/' + card._id }">
            {{ card.texto }}
          </router-link>
        </div>
      </v-card-text>
      <v-card-actions v-if="card.tags.length">
        <v-chip class="ma-2 tag" color="#ED4D77" label outlined>
          {{ card.tags[0].name }}
        </v-chip>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cards: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.text--primary {
  a {
    text-decoration: none;
    color: #000;
  }
}
.ma-2.v-card.v-sheet.theme--light.elevation-1 {
  border-radius: 8px;
}
.theme--light.v-application .text--primary {
  text-align: center;
  font-weight: bold;
  font-size: 0.76rem;
  line-height: 1.143;
  font-family: "Exo 2", sans-serif;
}
.v-card__actions {
  justify-content: center;
}
.tag {
  font-family: "Exo 2", sans-serif;
  font-weight: bold;
  border-color: rgba(237, 77, 119, 0.3) !important;
  font-size: 10px !important;
}
.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 12px !important;
}
.v-card__actions {
  padding: 0;
}
</style>
