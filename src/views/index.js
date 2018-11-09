import { Link, Route } from '@hyperapp/router'
import {div, footer, h1, header, li, main, nav, p, ul } from '@hyperapp/html'

// Page View Routes
import Home from './Home'
import Portfolio from './Portfolio'

const view = (state, action) => {
  return div({ class: 'wrapper' }, [
    header([
      nav({ class: 'nav' }, [
        h1({ class: 'nav__title' }, 'Hyper Dusty Codes'),
        ul({ class: 'nav__list' }, [
          li({ class: 'nav__item' }, [
            Link({ class: 'nav__link', to: '/' }, 'Home'),
          ]),
          li({ class: 'nav__item' }, [
            Link({ class: 'nav__link', to: '/portfolio' }, 'Portfolio')
          ])
        ])
      ])
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
