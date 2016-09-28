import timer from './timer'
import notifier from './notifier'
import tracer from './tracer'

class TimerType {
  constructor (name, duration, shouldTrace) {
    this.name = name
    this.duration = duration
    this.shouldTrace = shouldTrace
  }
}

const timerTypes = [
  new TimerType('Pomodoro', 25, true),
  new TimerType('Short break', 5, false),
  new TimerType('Long break', 15, false)
]

timer.events.on('timer-end', (type) => {
  notifier.notify(`End of ${type.name}`)
  tracer.trace(type)
})

export default {
  types: timerTypes,

  run (type) {
    timer.begin(type)
  }
}
