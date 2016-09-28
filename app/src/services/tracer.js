import moment from 'moment'

class Log {
  constructor (title) {
    this.title = title
    this.createdDate = moment().format('DD/MM/YYYY HH:mm')
  }
}

export default {
  traces: [],

  trace (type) {
    this.traces.push(new Log(type.name))
  }
}
