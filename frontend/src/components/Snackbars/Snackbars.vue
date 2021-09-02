<template>
  <v-snackbar
    v-model="snackOptions.snackbar"
    :timeout="snackOptions.timeout"
    :color="color"
    right
    top
  >
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="black" text v-bind="attrs" @click="closeSnackbar">
        Fechar
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Snackbar",
  methods: {
    ...mapMutations(["setSnackBarStatus"]),

    closeSnackbar() {
      this.setSnackBarStatus(false);
    },
  },
  computed: {
    ...mapGetters({
      snackOptions: "getSnackBarStatus",
      text: "getSnackBarText",
      color: "getSnackBarColor",
    }),
  },
};
</script>
