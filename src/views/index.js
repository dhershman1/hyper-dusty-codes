import { Link, Route } from '@hyperapp/router'
import { div, footer, h1, header, li, main, nav, span, ul } from '@hyperapp/html'

// Page View Routes
import Home from './Home'
import Portfolio from './Portfolio'

const view = (state, action) => {
  function isActive (to) {
    if (state.location.pathname === to) {
      return 'nav__link nav__link--active'
    }

    return 'nav__link'
  }

  return div({ class: 'wrapper' }, [
    header([
      nav({ class: 'nav' }, [
        h1({ class: 'nav__title' }, 'Dusty Codes'),
        ul({ class: 'nav__list' }, [
          li({ class: 'nav__item' }, [
            Link({ class: isActive('/'), to: '/' }, 'Home')
          ]),
          li({ class: 'nav__item' }, [
            Link({ class: isActive('/portfolio'), to: '/portfolio' }, 'Portfolio')
          ])
        ])
      ])
    ]),
    main([
      Route({ path: '/', render: Home(action, state) }),
      Route({ path: '/portfolio', render: Portfolio(action, state) })
    ]),
    footer([
      span([
        'Dustin Hershman © 2019 Built using ',
        Link({ to: 'https://github.com/jorgebucaran/hyperapp', target: '_blank' }, 'Hyperapp')
      ])
    ])
  ])
}

export default view
