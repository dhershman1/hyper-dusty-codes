import { div, h2 } from '@hyperapp/html'

const Card = (actions, state) => () => {
  return div({ class: 'animate animate--enter' }, [
    h2({ key: 'port' }, 'Card Page')
  ])
}

export default Card
