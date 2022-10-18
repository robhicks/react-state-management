import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from './Home'
// import onRender from './onRender'

const HoistedPropDrilling = lazy(() => import('./hoisted-state-prop-drilling'))
const ReactUseReducer = lazy(() => import('./reducer'))
const CustomHook = lazy(() => import('./custom-hook'))
const ContextProvider = lazy(() => import('./context-provider'))
const MobX = lazy(() => import('./mobx'))
const Redux = lazy(() => import('./redux'))
const Recoil = lazy(() => import('./recoil'))
const Charts = lazy(() => import('./charts'))
const Doc = lazy(() => import('./doc'))

function App () {
  return (
      <BrowserRouter>
        <div className="navbar bg-primary">
          <Link className="btn btn-ghost normal-case text-xl text-white" to="/">Home</Link>
        </div>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="home" element={<Home />}/>
          <Route path="01-hoisted-props" element={<Suspense fallback={<div>Loading...</div>}><HoistedPropDrilling /></Suspense>} />
          <Route path="02-custom-hook" element={<Suspense fallback={<div>Loading...</div>}><CustomHook /></Suspense>} />
          <Route path="03-context-provider" element={<Suspense fallback={<div>Loading...</div>}><ContextProvider /></Suspense>} />
          <Route path="04-use-reducer" element={<Suspense fallback={<div>Loading...</div>}><ReactUseReducer /></Suspense>} />
          <Route path="05-mobx" element={<Suspense fallback={<div>Loading...</div>}><MobX /></Suspense>} />
          <Route path="06-redux" element={<Suspense fallback={<div>Loading...</div>}><Redux /></Suspense>} />
          <Route path="07-recoil" element={<Suspense fallback={<div>Loading...</div>}><Recoil /></Suspense>} />
          <Route path="charts" element={<Suspense fallback={<div>Loading...</div>}><Charts /></Suspense>} />
          <Route path="doc" element={<Suspense fallback={<div>Loading...</div>}><Doc /></Suspense>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App

// <Profiler id="app" onRender={onRender}></Profiler >
