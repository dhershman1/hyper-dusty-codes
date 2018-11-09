import { app } from 'hyperapp'
import { location } from '@hyperapp/router'
import './main.css'

const state = {
  location: location.state
}

const actions = {
  location: location.actions
}

const view = (state, actions) => ''

const main = app(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)
