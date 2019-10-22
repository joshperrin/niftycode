import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Nav from './nav'
import ScrollToTop from './scrollToTop'
import Projects from './projects/projects'
import ProjectImg from './components/projectImg'
import projectData from './projects/data'


const App = () => (
  <Router>
    {/* <ScrollToTop /> */}
    {/* Nav & Logo */}
    <Nav />

    {/* Code Projects */}
    <Route exact path="/" component={Projects} />

    {/* Routes */}
    {projectData.map(({ key, sections, projectRoute, projectComponent }) => (
      <Fragment key={key}>

        {/* Mockup Routes */ }
        {sections.map(({ key, mockupRoute, image }) => (
          <Route
            key={key}
            path={mockupRoute}
            render={() => <ProjectImg src={image} />}
          />
        ))}

        {/* Code Route */}
        <Route
          path={projectRoute}
          component={projectComponent}
        />

      </Fragment>
    ))}

  </Router>
)

export default App
