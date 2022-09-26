import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (<div className="w-3/4 mx-auto pt-8">
    <ul>
      <li><Link to="/01-hoisted-props">01-hoisted-state-prop-drilling</Link></li>
      <li><Link to="/02-custom-hook">02-custom-hook</Link></li>
      <li><Link to="/03-context-provider">03-context-provider</Link></li>
      <li><Link to="/04-use-reducer">04-use-reducer</Link></li>
      <li><Link to="/05-mobx">05-mobx</Link></li>
      <li><Link to="/06-redux">06-redux</Link></li>
      <li><Link to="/07-recoil">07-recoil</Link></li>
    </ul>
  </div>)
}
