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
      text: 'TotalBlockingTime',
      font: { size: 24 }
    }
  }
}

export default function TotalBlockingTime (props) {
  const [data, setData] = useState({ labels, datasets: [] })

  useEffect(() => {
    const array = Object.values(chartData).map((val) => val.totalBlockingTime)
    setData({
      labels,
      datasets: [
        {
          label: 'TotalBlockingTime',
          backgroundColor: 'rgba(255, 255, 0, 1)',
          data: array
        }
      ]
    })
  }, [])

  return <Bar options={options} data={data} />
}
