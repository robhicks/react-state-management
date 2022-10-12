import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (<div className="w-3/4 mx-auto pt-8">
    <ul className="text-xl">
      <li className="underline"><Link to="/01-hoisted-props">01-hoisted-state-prop-drilling (hoisted)</Link></li>
      <li className="underline"><Link to="/02-custom-hook">02-custom-hook</Link></li>
      <li className="underline"><Link to="/03-context-provider">03-context-provider (provider)</Link></li>
      <li className="underline"><Link to="/04-use-reducer">04-use-reducer (reducer)</Link></li>
      <li className="underline"><Link to="/05-mobx">05-mobx</Link></li>
      <li className="underline"><Link to="/06-redux">06-redux</Link></li>
      <li className="underline"><Link to="/07-recoil">07-recoil</Link></li>
      <li className="underline mt-4"><Link to="/charts">Charts</Link></li>
    </ul>
  </div>)
}
