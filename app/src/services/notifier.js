export default {
  notify (msg) {
    return new Notification('Pomotask', {
      body: msg
    })
  }
}
