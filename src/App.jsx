import React, { Profiler } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from './Home'
import HoistedPropDrilling from './hoisted-state-prop-drilling'
import ReactUseReducer from './reducer'
import CustomHook from './custom-hook'
import ContextProvider from './context-provider'
import MobX from './mobx'
import Redux from './redux'
import Recoil from './recoil'
import onRender from './onRender'

function App () {
  return (
    <Profiler id="app" onRender={onRender}>
    <BrowserRouter>
      <div className="navbar bg-primary">
        <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
      </div>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="home" element={<Home />}/>
        <Route path="01-hoisted-props" element={<HoistedPropDrilling />} />
        <Route path="02-use-reducer" element={<ReactUseReducer />} />
        <Route path="03-custom-hook" element={<CustomHook />} />
        <Route path="04-context-provider" element={<ContextProvider />} />
        <Route path="05-mobx" element={<MobX />} />
        <Route path="06-redux" element={<Redux />} />
        <Route path="07-recoil" element={<Recoil />} />
      </Routes>
    </BrowserRouter>
  </Profiler >
  )
}

export default App
