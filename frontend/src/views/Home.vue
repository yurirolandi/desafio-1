<template>
  <div class="home">
    <div class="home-header">
      <NavBar>
        <template v-slot:navbar-left>
          <img class="insights" :src="brand" alt="Insights" />
        </template>
        <template v-slot:navbar-center>
          <img class="perfil" :src="perfil" alt="Perfil" />
        </template>
        <template v-slot:navbar-right>
          <v-btn to="/create-insights">
            <img class="adicionar" :src="addPlus" alt="Adicionar" />
          </v-btn>
        </template>
      </NavBar>
      <div class="home-header__text">
        <Title title="Olá, Antonio!" email="antonio.pina@g.globo" />
        <SubTitle><i>Feed de</i> <b>Insights</b> </SubTitle>
      </div>
    </div>
    <div class="home-main">
      <Card v-if="searchFilter" :cards="searchFilter" />
      <Skeleton v-else tipo="list-item, button" :items="3" />
      <RefreshInsights @buttonRefresh="getInsightsList()" />
    </div>
    <div class="home-footer">
      <Search
        :searchFilter.sync="searchFilter"
        labelText="Pesquise por termos ou categorias..."
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import NavBar from "@/components/NavBar/NavBar.vue";
import Title from "@/components/Title/Title.vue";
import SubTitle from "@/components/SubTitle/SubTitle.vue";
import Card from "@/components/Card/Card.vue";
import RefreshInsights from "@/components/RefreshInsights/RefreshInsights.vue";
import Search from "@/components/Search/Search.vue";
import Skeleton from "@/components/Skeleton/Skeleton.vue";
import addPlus from "@/assets/add_plus_24dp.svg";
import perfil from "@/assets/perfil.png";
import brand from "@/assets/brand-insights.svg";

export default {
  name: "Home",
  components: {
    NavBar,
    Title,
    SubTitle,
    Card,
    Skeleton,
    RefreshInsights,
    Search,
  },
  data() {
    return {
      addPlus: addPlus,
      perfil: perfil,
      brand: brand,
    };
  },
  computed: {
    ...mapGetters({
      insightsCards: "getInsights",
    }),

    searchFilter: {
      get() {
        return this.insightsCards;
      },
      set(value) {
        return this.setSearchInsights(value);
      },
    },
  },
  methods: {
    ...mapMutations(["setSearchInsights"]),
    ...mapActions(["getInsightsList"]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  background: #f4f4f4;
  &-header {
    background-image: url("../assets/background.svg");
    background-size: 100%;
    background-position-y: 95%;
    height: 300px;
    &__text {
      top: 7rem;
      position: relative;
    }
  }
  &-main {
    position: absolute;
    top: 13.125rem;
    padding: 12px;
    margin-right: auto;
    max-height: 520px;
    margin-left: auto;
    overflow: scroll;
    width: 100%;
    @media (max-width: 320px) {
      max-height: 340px;
    }
    @media (width: 414px) {
      max-height: 390px;
    }
    @media (height: 667px) {
      max-height: 390px;
    }
  }
  &-footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
