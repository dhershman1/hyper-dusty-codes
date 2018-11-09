import { div, h2 } from '@hyperapp/html'
import Fade from '../Transitions/Fade'

const Portfolio = (actions, state) => () =>
  Fade([
    h2({ key: 'port' }, 'Portfolio Page')
  ])

export default Portfolio
