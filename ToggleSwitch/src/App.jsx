import "./components/EV.css"
import { ToggleSwitch } from './components/ToggleSwitch'
import {ShortCircuit} from './components/ShortCircuit'
import {Counter} from './components/hooks/Counter'
import { Challenges } from "./components/hooks/Challenges"

export const App =() =>
{
  return(
    <section>
      < Challenges />
    </section>
  )
}