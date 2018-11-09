import { div } from '@hyperapp/html'
import cc from 'classcat'

// Use cc to setup classes on page transitions
// Whether we use lifecycle hooks or not here.
const Fade = children =>
  div(children)

export default Fade
