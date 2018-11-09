import { div, h2 } from '@hyperapp/html'
import Fade from '../Transitions/Fade'

const Home = (actions, state) => () =>
  Fade([
    h2({ key: 'home' }, 'Home Page')
  ])

export default Home
