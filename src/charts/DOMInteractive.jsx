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
      text: 'DOMInteractive',
      font: { size: 24 }
    }
  }
}

export default function DOMInteractive (props) {
  const [data, setData] = useState({ labels, datasets: [] })

  useEffect(() => {
    const array = Object.values(chartData).map((val) => val.domInteractive)
    setData({
      labels,
      datasets: [
        {
          backgroundColor: 'rgba(20, 20, 255, 0.75)',
          data: array
        }
      ]
    })
  }, [])

  return <Bar options={options} data={data} />
}
