import { Link, Route } from '@hyperapp/router'
import {div, footer, h1, header, main, p } from '@hyperapp/html'

// Page View Routes
import Home from './Home'
import Portfolio from './Portfolio'

const view = (state, action) => {
  return div({ class: 'wrapper' }, [
    header([
      h1('Hyper Dusty Codes'),
      Link({ to: '/' }, 'Home'),
      Link({ to: '/portfolio' }, 'Portfolio')
    ]),
    main([
      Route({ path: '/', render: Home(action, state) }),
      Route({ path: '/portfolio', render: Portfolio(action, state) })
    ]),
    footer([
      p('A footer copyright can go here!')
    ])
  ])
}

export default view
