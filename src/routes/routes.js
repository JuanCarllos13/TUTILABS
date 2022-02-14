import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'

import Error from '../pages/Error'
import Favorites from '../pages/Favorites'
import Home from '../pages/home'
import MovieInfo from '../pages/MoviesInfo'
import Search from '../pages/Search'
function Routes () {
  return (
        <Router>

            <Switch>

              <Route exact path='/'component={Home} />
                <Route exact path='/favorites'component={Favorites} />
                <Route exact path='/Movie'component={Search} />
                <Route exact path='/Movie/:id'component={MovieInfo} />
                <Route exact path='/*'component={Error} />
            </Switch>
        </Router>
  )
}

export default Routes
