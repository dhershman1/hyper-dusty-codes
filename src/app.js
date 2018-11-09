import { app } from 'hyperapp'
import { location } from '@hyperapp/router'
import views from './views'
import './main.css'

const state = {
  location: location.state,
  transitioning: false
}

const actions = {
  location: location.actions
}

const main = app(state, actions, views, document.getElementById('app'))

const unsubscribe = location.subscribe(main.location)
