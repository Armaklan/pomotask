import Vue from 'vue'
import Pomodoro from 'components/Pomodoro'

export default {
  '/about': {
    component: Vue.component('landing-page', require('./components/LandingPageView')),
    name: 'landing-page'
  },
  '/': {
    component: Pomodoro,
    name: 'pomodoro'
  }
}
