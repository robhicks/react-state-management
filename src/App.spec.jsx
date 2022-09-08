import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

function toJson(component) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result
}

test('App', () => {
  const component = renderer.create(<App></App>)
  let tree = toJson(component)
  console.log(`tree`, tree)
  expect(tree).toMatchSnapshot()
})