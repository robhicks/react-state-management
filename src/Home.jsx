import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (<div className="w-3/4 mx-auto pt-8">
    <ul>
      <li><Link to="/01-hoisted-props">01-hoisted-state-prop-drilling</Link></li>
      <li><Link to="/02-use-reducer">02-use-reducer</Link></li>
      <li><Link to="/03-custom-hook">03-custom-hook</Link></li>
      <li><Link to="/04-single-provider-monolithic-model">04-single-provider-monolithic-model</Link></li>
      <li><Link to="/05-single-provider-segmented-model">05-single-provider-segmented-model</Link></li>
      <li><Link to="/06-segmented-providers">06-segmented-providers</Link></li>
      <li><Link to="/07-mobx">07-mobx</Link></li>
      <li><Link to="/08-redux">08-redux</Link></li>
      <li><Link to="/09-recoil">09-recoil</Link></li>
    </ul>
  </div>)
}
