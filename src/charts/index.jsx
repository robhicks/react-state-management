import React from 'react'
import {
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  SubTitle,
  Title,
  Tooltip
} from 'chart.js'

import DOMInteractive from './DOMInteractive'
import DOMComplete from './DOMComplete'
import LargestContentfulPaint from './LargestContentfulPaint'
import TotalBlockingTime from './TotalBlockingTime'
import Components from './Components'

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  SubTitle,
  Title,
  Tooltip
)

export default function Charts (props) {
  return (
    <div className="w-full px-8 py-4 h-full">
      <h1 className="prose prose-2xl mb-3">Charts</h1>
      <div className="h-[calc(100%-8rem)] overflow-y-auto">
        <DOMInteractive />
        <div className="mt-4 border border-gray-200"></div>
        <DOMComplete />
        <div className="mt-4 border border-gray-200"></div>
        <LargestContentfulPaint />
        <div className="mt-4 border border-gray-200"></div>
        <TotalBlockingTime />
        <div className="mt-4 border border-gray-200"></div>
        <Components />
      </div>
    </div>
  )
}
