<template lang="html">
  <h1>Pomodoro Timer</h1>
  <div id="timer">
   {{ clock.remaining }}
  </div>
  <button class="default" v-for="type in types" @click="pomodoro(type)">{{ type.name }}</button>
  <br/>
  <table>
    <tr>
      <th colspan="2">Historique de l'activité</th>
    </tr>
    <tr v-for="trace in traces">
      <td>{{ trace.createdDate }}</td>
      <td>{{ trace.title }}</td>
    </tr>
  </table>
  <br/>
  <a v-link="{ path: '/about' }">About</a>
</template>

<script>
import timer from '../services/timer'
import tracer from '../services/tracer'
import pomodoro from '../services/pomodoro'

export default {
  data () {
    return {
      types: pomodoro.types,
      clock: {
        remaining: '00:00'
      },
      traces: tracer.traces
    }
  },
  computed: {},
  ready () {
    this.clock = timer
  },
  attached () {},
  methods: {
    pomodoro (type) {
      pomodoro.run(type)
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
