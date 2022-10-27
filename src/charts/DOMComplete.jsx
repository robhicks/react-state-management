import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import labels from './labels'
import { chartData } from './stats'

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    subtitle: {
      display: true,
      text: 'Time in Milliseconds',
      font: { size: 16 }
    },
    title: {
      display: true,
      text: 'DOMComplete',
      font: { size: 24 }
    }
  }
}

export default function DOMComplete (props) {
  const [data, setData] = useState({ labels, datasets: [] })

  useEffect(() => {
    const array = Object.values(chartData).map((val) => val.domComplete)
    setData({
      labels,
      datasets: [
        {
          label: 'DOMComplete',
          backgroundColor: 'rgba(255, 20, 20, 0.75)',
          data: array
        }
      ]
    })
  }, [])

  return <Bar options={options} data={data} />
}
