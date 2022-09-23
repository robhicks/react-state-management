import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (<div className="w-3/4 mx-auto pt-8">
    <ul>
      <li><Link to="/01-hoisted-props">01-hoisted-state-prop-drilling</Link></li>
      <li><Link to="/02-use-reducer">02-use-reducer</Link></li>
      <li><Link to="/03-custom-hook">03-custom-hook</Link></li>
      <li><Link to="/04-context-provider">04-context-provider</Link></li>
      <li><Link to="/05-mobx">05-mobx</Link></li>
      <li><Link to="/06-redux">06-redux</Link></li>
      <li><Link to="/07-recoil">07-recoil</Link></li>
      <li><Link to="/08-synced-store">08-synced-store</Link></li>
    </ul>
  </div>)
}
