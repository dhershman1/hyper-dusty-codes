import { app } from 'hyperapp'
import { location } from '@hyperapp/router'
import views from './views'

const state = {
  location: location.state,
  transitioning: false
}

const actions = {
  location: location.actions
}

const main = app(state, actions, views, document.getElementById('app'))

location.subscribe(main.location)
