<template>
  <div>

    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Nombre">
        <!-- param : {{ $route.params.id }} -->
        <el-input class="input" type="text" v-model="form.pelicula"></el-input>
      </el-form-item>
      <el-form-item class="dropdown" label="Pais">
        <el-select v-model="form.pais" placeholder="please select your zone">
          <el-option label="Argentina" value="argentina"></el-option>
          <el-option label="Extranjera" value="extranjera"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Estreno">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="form.estreno"
            style="width: 100%"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="visto">
        <el-switch v-model="form.visto"></el-switch>
      </el-form-item>

      <el-form-item label="Calificacion 1 - 5">
        <el-radio-group v-model="form.calificacion">
          <el-radio label="1">1</el-radio>
          <el-radio label="2">2</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input type="textarea" v-model="form.opinion"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="conditional(form)">
          {{ $route.params.id == undefined ? "Agregar" : "Editar" }}
        </el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>



  </div>
</template>


<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Form",
  data() {
    return {
      form: {
        id: 0,
        pelicula: "",
        pais: "",
        estreno: new Date(),
        visto: false,
        calificacion: 1,
        opinion: "",
      },

    };
  },
  computed: {
    ...mapState("peliculasStore", ["peliculas", "pelicula"]),
  },
  methods: {
    ...mapActions("peliculasStore", [
      "addMovieComplete1",
      "editMovieComplete1",
      "updateMovie",
      "setTarea",
    ]),
    conditional(form) {
      if (this.$route.params.id == undefined) {
        this.addMovieComplete1(form);
        this.cleanForm();
        this.$router.push("/list");
      } else {
        this.updateMovie(form);
        this.cleanForm();
        this.$router.push("/list");
      }
    },
    cleanForm() {
      this.form = {
        id: 0,
        pelicula: "",
        pais: "",
        estreno: new Date(),
        visto: false,
        calificacion: 1,
        opinion: "",
      };
    }
  },
  created() {
    if (this.$route.params.id != undefined) {
      this.setTarea(this.$route.params.id);
      console.log("no hay id");
      this.form = {
        id: this.pelicula.id,
        pelicula: this.pelicula.pelicula,
        pais: this.pelicula.pais,
        estreno: this.pelicula.estreno,
        visto: this.pelicula.visto,
        calificacion: this.pelicula.calificacion,
        opinion: this.pelicula.opinion,
      };
    }
  },
};
</script>

<style scoped>
.container_form {
  width: 50%;
}

.el-form {
  width: 70%;
  margin: auto;
}

.dropdown {
  /* background-color: red; */
  display: flex;
  justify-content: start;
  padding: 0;
  text-align: start;
}

.el-form-item__content {
  margin-left: 0;
}
</style>