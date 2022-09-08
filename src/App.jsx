import React, { Profiler } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from './Home'
import HoistedPropDrilling from './hoisted-state-prop-drilling'
import ReactUseReducer from './reducer'
import CustomHook from './custom-hook'
import SingleProviderMonolithicModel from './single-provider-monolithic-model'
import SingleProviderSegmentedModel from './single-provider-segmented-model'
import SegmentedProviders from './segmented-providers'
import MobX from './mobx'
import Redux from './redux'
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
        <Route path="04-single-provider-monolithic-model" element={<SingleProviderMonolithicModel />} />
        <Route path="05-single-provider-segmented-model" element={<SingleProviderSegmentedModel />} />
        <Route path="06-segmented-providers" element={<SegmentedProviders />} />
        <Route path="07-mobx" element={<MobX />} />
        <Route path="08-redux" element={<Redux />} />
      </Routes>
    </BrowserRouter>
  </Profiler >
  )
}

export default App
