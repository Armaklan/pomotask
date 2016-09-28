import moment from 'moment'
import EventEmitter from 'events'

class TimerEventEmitter extends EventEmitter {}

export default {
  remaining: '0:00',
  events: new TimerEventEmitter(),

  begin (type) {
    this.current = type
    this.endDate = moment().add(type.duration, 's')
    this.refresh()
  },

  remainingTime () {
    var duration = moment.duration(this.endDate.diff(moment()))
    return moment.utc(duration.asMilliseconds()).format('m:s')
  },

  refresh () {
    this.remaining = this.remainingTime()
    if (moment.duration(this.endDate.diff(moment())).asMilliseconds() > 0) {
      setTimeout(this.refresh.bind(this), 1000)
    } else {
      this.remaining = '00:00'
      this.events.emit('timer-end', this.current)
    }
  }
}
