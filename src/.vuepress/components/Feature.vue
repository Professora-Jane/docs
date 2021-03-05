<template>
  <div>
    <h4> {{ id + " - " + feature }} </h4>
    <table>
      <thead style="display: none;">
      </thead>
      <tbody>
        <tr>
          <td><b>ID</b></td>
          <td>{{ id }}</td>
        </tr>
        <tr>
          <td><b>Eu, como</b></td>
          <td>{{ parteInteressada }}</td>
        </tr>
        <tr>
          <td><b>Desejo</b></td>
          <td>{{ feature }}</td>
        </tr>
        <tr>
          <td><b>Para que eu possa</b></td>
          <td>
            <span v-for="item in descricaoSplited">
              {{ "> " + item }}<br>
            </span>
          </td>
        </tr>
        <tr>
          <td><b>Critérios de aceitação:</b></td>
          <td>
            <span v-for="item in criteriosSplited">
              {{ "> " + item }}<br>
            </span>
          </td>
        </tr>
        <tr>
          <td><b>Status:</b></td>
          <td>
            {{ status }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
      default: " ?? "
    },
    parteInteressada: {
      type: String,
      required: true
    },
    feature: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    },
    criterios: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
  },
  computed: {
    descricaoSplited() {
      return this.descricao.split("> ").filter(item => item !== "")
    },
    criteriosSplited() {
      return this.criterios.split("> ").filter(item => item !== "")
    }
  }
}
</script>