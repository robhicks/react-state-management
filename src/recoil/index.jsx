import React from 'react'
import { RecoilRoot } from 'recoil'
import Budget from './Budget'

export default function Recoil () {
  return (
    <div className="w-8/12 mx-auto py-4">
      <h1 className="prose prose-2xl mb-1">07-recoil</h1>
      <RecoilRoot>
        <Budget />
      </RecoilRoot>
    </div>
  )
}
