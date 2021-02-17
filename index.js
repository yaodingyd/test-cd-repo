console.log('it\'s working')

const id = setInterval(() => {
  console.log('its running')
}, 1000);

setTimeout(() => {
  clearInterval(id)
}, 1000000);