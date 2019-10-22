import React, { useRef } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useTransition } from 'react-spring'

import pages from './_pagesConfig'

const AccountArea = (props) => {
  const { location } = props
  const pageTransitionRef = useRef()
  const pageTransition = useTransition(location, location => location.pathname.split('/').filter(a => a)[0], {
    ref: pageTransitionRef,
    from: { opacity: 0, transform: 'translate3d(5%,100%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(5%,-100%,0)' },
  })

  return pageTransition.map(({ item, props: styles, key }) => (
    <Switch key={key} location={item}>
      {pages.map(page => (
        <Route
          key={page.id}
          path={page.pathname}
          render={routeProps => (
            <page.component
              styles={styles}
              pageTransitionRef={pageTransitionRef}
              {...props}
              {...routeProps}
            />
          )}
        />
      ))}
    </Switch>
  ))
}

export default AccountArea
