const map = new Map()

const consoleResults = () => {
  const values = map.values()
  const mapped = [...values]?.reduce((p, c) => p + c, 0)
  console.log('Duration: ', mapped)
}

export default function onRender (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) {
  map.set(String(startTime), actualDuration)
}

setInterval(() => {
  consoleResults()
}, 2000)
