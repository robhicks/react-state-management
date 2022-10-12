const map = new Map()

const consoleResults = () => {
  const values = map.values()
  const firstElement = Array.from(map)[0]
  const mapped = [...values]?.reduce((p, c) => p + c, 0)
  console.log(`Duration-${firstElement[0]}:`, mapped)
}

export default function onRender (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) {
  // console.log(`Duration-${id}:`, actualDuration)
  // console.log('baseDuration', baseDuration)  
  map.set(id, actualDuration)
}

setInterval(() => {
  consoleResults()
}, 2000)
