<template>
  <v-app>
    <SystemBar />
    <Loading v-if="loading" />
    <v-main>
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SystemBar from "./components/SystemBar/SystemBar.vue";
import Loading from "./components/Loading/Loading.vue";
import Snackbar from "./components/Snackbars/Snackbars.vue";
export default {
  name: "App",
  components: {
    SystemBar,
    Loading,
    Snackbar,
  },
  computed: {
    ...mapGetters({
      loading: "getIsLoading",
    }),
  },
  methods: {
    ...mapActions(["getInsightsList"]),
  },
  created() {
    this.getInsightsList();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.v-messages__message {
  text-align: right !important;
}
.create-insights .v-input__icon.v-input__icon--append {
  display: none;
}
i.v-icon.notranslate.mdi.mdi-magnify.theme--light {
  color: #6666;
}
.v-text-field--rounded > .v-input__control > .v-input__slot {
  padding: 0 !important;
}
label.v-label.v-label--active.theme--light {
  color: #000;
}
textarea#input-16 {
  height: 250px;
}
.v-skeleton-loader__button.v-skeleton-loader__bone {
  margin: auto;
}

.slide-enter-active,
.slide-leave-active {
  transition: 300ms;
}
.slide-enter-to {
  position: relative;
  right: 0;
}
.slide-leave {
  position: absolute;
}
.slide-enter {
  right: -100vw;
  position: absolute;
}
.slide-leave-to {
  left: -100vw;
}
</style>
