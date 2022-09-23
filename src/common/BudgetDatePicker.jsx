/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { mdiChevronLeftCircleOutline, mdiChevronRightCircleOutline } from '@mdi/js'
import { add, format, sub } from 'date-fns'

export default function BudgetDatePicker ({ currentDate, setCurrentDate }) {
  const [currentMonth, setCurrentMonth] = useState('')
  const [currentYear, setCurrentYear] = useState('')

  const previousMonth = () => {
    setCurrentDate(sub(currentDate, { months: 1 }))
  }

  const nextMonth = () => {
    setCurrentDate(add(currentDate, { months: 1 }))
  }

  const gotoToday = () => {
    setCurrentDate(new Date())
  }

  useEffect(() => {
    if (currentDate instanceof Date) {
      setCurrentMonth(format(currentDate, 'MMMM'))
      setCurrentYear(format(currentDate, 'yyyy'))
    }
  }, [currentDate])

  return (
    <div className="flex h-8 align-middle justify-end gap-1">
      <button className="w-6" onClick={previousMonth}><svg><path d={mdiChevronLeftCircleOutline}></path></svg></button>
      <div>
        <button onClick={gotoToday}>
          {currentMonth} {currentYear}
        </button>
      </div>

      <button className="w-6" onClick={nextMonth}><svg><path d={mdiChevronRightCircleOutline}></path></svg></button>
    </div>
  )
}
{}
