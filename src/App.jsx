import { useState } from "react"
import Color from "./components/Color"
import Instruction from "./components/Instruction"
const App = () => {
  const [showInstruction, setShowInstruction] = useState(true)
  return (
    <>
      {
        showInstruction ? <Instruction showInstruction={showInstruction} setShowInstruction={setShowInstruction} /> : <Color setShowInstruction={setShowInstruction} />
      }
    </>
  )
}

export default App