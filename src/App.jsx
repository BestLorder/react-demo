import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from './router/index'

function handleRoute(route) {
  return <Route key={route.path} {...route} />
}
function App() {
  return <Router>{routes.map(handleRoute)}</Router>
}
export default App
