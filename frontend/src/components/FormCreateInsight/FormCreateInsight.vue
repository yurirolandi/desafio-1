<template>
  <div class="container" showForm>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card class="pa-2">
        <div class="form-insights">
          <v-textarea
            v-model="textArea"
            class="form-insights__text"
            color="#000000"
            label="INSIGHT"
            hint="limite de caracteres: 400"
            persistent-hint
            placeholder="Escreva aqui o seu insight..."
            :persistent-placeholder="true"
            :rules="rules"
          ></v-textarea>

          <v-autocomplete
            v-model="selectedTag"
            class="form-insights__tag"
            rounded
            :items="tags"
            label="CATEGORIA"
            placeholder="Adicione uma categoria (opcional)..."
            :persistent-placeholder="true"
            deletable-chips
          >
            <template #selection="{ item }">
              <v-chip
                v-bind="item.attrs"
                class="ma-2 form-insights__tag"
                color="#fef1f5 !importante"
                text-color="#ED4D77"
                label
                outlined
                @click.close="deleteChip(item)"
              >
                {{ item }}
                <v-icon right> mdi-close </v-icon>
              </v-chip>
            </template>
          </v-autocomplete>
        </div>
      </v-card>
    </v-form>
    <div class="container__btn">
      <v-btn
        v-if="currentRouter === 'Edit'"
        class="btn-publish delete"
        @click="deleteInsights()"
      >
        EXCLUIR
      </v-btn>
      <v-btn
        :style="currentRouter !== 'Edit' ? 'width: 100%;' : ''"
        class="btn-publish"
        @click="createInsights()"
      >
        {{ currentRouter === "Edit" ? "ATUALIZAR" : "PUBLICAR" }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FormContainer",
  data: () => ({
    valid: false,
    selectedTag: "",
    textArea: "",
    rules: [(v) => (v || "").length <= 400 || "limite de caracteres 400"],
    tags: ["MELHOR DA PARTIDA", "TEMPORADA", "JOGADOR", "HISTÓRICO"],
  }),
  methods: {
    ...mapActions([
      "CreateInsightsList",
      "DeleteInsightsList",
      "UpdateInsightsList",
      "showSnackBar",
    ]),
    deleteChip(item) {
      this.selectedTag === item ? (this.selectedTag = "") : this.selectedTag;
    },
    async createInsights() {
      if (!this.valid) return false;
      if (this.textArea === "" || this.textArea.length >= 400) {
        this.showSnackBar({
          text: "O insights não pode ficar vazio!!!",
          color: "error",
        });
        return false;
      }

      let data = {
        texto: this.textArea,
        tags: [],
      };

      if (this.selectedTag) {
        data = {
          ...data,
          tags: {
            name: this.selectedTag,
          },
        };
      }
      try {
        if (this.currentRouter === "Edit") {
          await this.UpdateInsightsList({
            body: data,
            id: this.$route.params.id,
          });
        } else await this.CreateInsightsList(data);

        this.showSnackBar({
          text: "Insights enviado com Sucesso!",
          color: "success",
        });
        this.textArea = "";
        this.selectedTag = "";
        this.$router.push({ path: "/" });
      } catch (error) {
        console.log("error", error);
        this.showSnackBar({
          text: "Houve um erro ao tentar criar o Insights!",
          color: "error",
        });
      }
    },
    deleteInsights() {
      try {
        this.DeleteInsightsList(this.$route.params.id);
        this.showSnackBar({
          text: "Insights deletado com Sucesso!",
          color: "success",
        });
        this.$router.push({ path: "/" });
      } catch (error) {
        console.log("error", error);
        this.showSnackBar({
          text: "Houve um erro ao tentar apagar o Insights!",
          color: "error",
        });
      }
    },
  },
  computed: {
    ...mapGetters({
      insightsCards: "getInsights",
    }),
    currentRouter() {
      return this.$route.name;
    },
  },
  watch: {
    valid: function (val) {
      if (!val) this.reset();
      if (this.currentRouter !== "Edit") return false;
      const isEdit = this.insightsCards.filter(
        (card) => card._id === this.$route.params.id
      );

      if (isEdit) {
        this.textArea = isEdit[0].texto;
        this.selectedTag =
          isEdit[0].tags.length > 0 ? isEdit[0].tags[0].name : "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 120px);
  top: 120px;
  position: absolute;
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;

  &__btn {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .btn-publish {
      background-color: #ee4c78;
      color: white;
      height: 56px;
      font-size: 1rem;
      line-height: 1.125;
      font-style: italic;
      font-family: "Exo 2", sans-serif;
      &.delete {
        background-color: #cc3c63;
      }
      &.v-btn--disabled {
        background: RGBA(237, 77, 119, 0.4) !important;
        color: white !important;
      }
    }
  }
  .form-insights {
    &__text {
      color: #000000 !important;
      font-family: "Exo 2", sans-serif;
      line-height: 1.714;
      font-size: 14px;
      font-weight: normal;
      font-style: italic;
      margin-bottom: 1rem;
    }
    &__tag {
      font-family: "Exo 2", sans-serif;
      font-weight: normal;
      font-style: italic;
      border-color: rgba(237, 77, 119, 0.3) !important;
    }
  }
}
</style>
