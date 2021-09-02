<template>
  <div class="create-insights">
    <NavBar class="navbar-insights">
      <template v-slot:navbar-left>
        <v-btn to="/">
          <img class="back" :src="arrowBack" alt="Voltar" />
        </v-btn>
      </template>
      <template v-slot:navbar-center>
        <SubTitle class="navbar-insights__subtitle">
          {{ currentRouter === "Edit" ? "EDITAR" : "CRIAR" }} <br />
          <b><i>INSIGHT</i></b>
        </SubTitle>
      </template>
    </NavBar>
    <FormContainer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import SubTitle from "@/components/SubTitle/SubTitle.vue";
import FormContainer from "@/components/FormCreateInsight/FormCreateInsight.vue";
import arrowBack from "@/assets/arrow_back_24dp.svg";
export default {
  name: "CreateInsight",
  components: {
    NavBar,
    SubTitle,
    FormContainer,
  },
  data() {
    return {
      arrowBack: arrowBack,
    };
  },
  computed: {
    currentRouter() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.create-insights {
  background: #f4f4f4;
  height: 100vh;
  .navbar-insights {
    background-position-y: 90% !important;
    &__subtitle {
      width: 100%;
      margin-right: 3rem;
      line-height: 1;
      font-style: normal;
      font-weight: 500;
    }
  }
}

.v-messages.theme--light {
  text-align: right;
}
</style>
