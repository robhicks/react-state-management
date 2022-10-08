import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import labels from './labels'
import { Bar } from 'react-chartjs-2'
import { chartData } from './stats'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

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
      text: 'Components',
      font: { size: 24 }
    },
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  }
}

export default function Components (props) {
  const [data, setData] = useState({ labels, datasets: [] })

  useEffect(() => {
    setData({
      labels,
      datasets: [
        {
          label: 'index',
          backgroundColor: 'red',
          data: Object.values(chartData).map((entry) => entry.index)
        },
        {
          label: 'Budget',
          backgroundColor: 'green',
          data: Object.values(chartData).map((entry) => entry.Budget)
        },
        {
          label: 'MonthlyBudgets',
          backgroundColor: 'blue',
          data: Object.values(chartData).map((entry) => entry.MonthlyBudgets)
        },
        {
          label: 'MonthlyBudget',
          backgroundColor: 'yellow',
          data: Object.values(chartData).map((entry) => entry.MonthlyBudget)
        },
        {
          label: 'Categories',
          backgroundColor: 'purple',
          data: Object.values(chartData).map((entry) => entry.Categories)
        },
        {
          label: 'Category',
          backgroundColor: 'brown',
          data: Object.values(chartData).map((entry) => entry.Category)
        },
        {
          label: 'Item',
          backgroundColor: 'orange',
          data: Object.values(chartData).map((entry) => entry.Item)
        },
        {
          label: 'Transaction',
          backgroundColor: 'lime',
          data: Object.values(chartData).map((entry) => entry.Transaction)
        }
      ]
    })
  }, [])

  return <Bar options={options} data={data} />
}
