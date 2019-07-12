import { div, h2 } from '@hyperapp/html'

const Home = (actions, state) => () =>
  div({ class: 'animate animate--enter' }, [
    h2({ key: 'home' }, 'About')
  ])

export default Home
