import { div, h2 } from '@hyperapp/html'

const Portfolio = (actions, state) => () => {
  return div({ class: 'animate animate--enter' }, [
    h2({ key: 'port' }, 'Portfolio Page')
  ])
}

export default Portfolio
