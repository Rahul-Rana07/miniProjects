import "./components/EV.css"
import { ToggleSwitch } from './components/ToggleSwitch'
import {ShortCircuit} from './components/ShortCircuit'
import {Counter} from './components/hooks/Counter'
import { Challenges } from "./components/hooks/Challenges"
import { Registrartion } from "./components/hooks/Registrartion"


export const App =() =>
{
  return(
    <section>
      <Registrartion />
    </section>
  )
}