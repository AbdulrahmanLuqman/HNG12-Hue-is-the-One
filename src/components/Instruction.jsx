import { Close } from "./Icons"


const Instruction = ({ showInstruction ,setShowInstruction }) => {
  return (
    <>
      <div className="z-10 text-white bg-gray-700 w-[700px] max-[705px]:w-full mx-auto mt-10 flex flex-col gap-4 items-center px-6 py-10 rounded-xl relative">
      <button onClick={()=> setShowInstruction(false)} className="absolute top-2 right-3 cursor-pointer"><Close /></button>
      <h1 className="text-2xl text-center font-bold mt-2">How to Play &quot;Hue&lsquo; s the One?&quot;</h1>

      <div className="space-y-2">
        <div>
          <h2 className="font-semibold">Objective:</h2>
          <p>Look at the target color displayed in the color box at the top of the screen. Your goal is to select the matching color from the six options available.</p>
        </div>
        <div>
          <h2 className="font-semibold">Making a Guess:</h2>
          <p>Click on the color button that you believe matches the target color. Each button shows a slightly different shade.</p>
        </div>
        <div>
          <h2 className="font-semibold">Feedback & Scoring:</h2>
          <p>If your guess is correct, you'll receive immediate positive feedback and your score will increase.
          If the guess is incorrect, you'll see a message indicating a wrong choice. Don’t worry – you can try again!</p>
        </div>
        <div>
          <h2 className="font-semibold">New Game:</h2>
          <p>Click the “New Game” button to reset the game. A new target color and set of options will be generated, allowing you to continue the challenge.</p>
        </div>
        <div>
          <h2 className="font-semibold">Challenge Yourself:</h2>
          <p>Test and improve your color perception skills as you play, and aim for a high score!</p>
        </div>
      </div>
      </div>

      {
        showInstruction && <div onClick={()=> setShowInstruction(false)} className="bg-black opacity-20 w-screen h-screen fixed top-0 left-0  cursor-pointer"></div>
      }
      {/* <div className="bg-red-400 w-screen h-screen absolute top-0 left-0"></div> */}
    </>
    
  )
}

export default Instruction