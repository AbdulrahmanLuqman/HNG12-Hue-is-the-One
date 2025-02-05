import { useEffect, useState } from "react";
import { colors } from "./colors";

const Color = ({setShowInstruction}) => {
    const [numberOfColors, setNumberOfColors] = useState(10)
    const [difficulty, setDifficulty] = useState("easy")
    const [colours, setColors] = useState(colors)

    const [currentColor, setCurrentColor] = useState(0);
    const [currentColors, setCurrentColors] = useState([]);
    const [isCorrect, setIsCorrect] = useState(0)
    const [isWrong, setIsWrong] = useState(0);

    useEffect(()=> {
      const filteredColors = colors.filter((color)=> color.difficulty === difficulty).slice(0, numberOfColors)
      setColors(filteredColors)
    }, [difficulty, numberOfColors])
    
    const shuffleColor = (colours) => {
      return [...colours].sort(() => Math.random() - 0.5);
    };
    
    useEffect(() => {
      setCurrentColors(shuffleColor(colours[currentColor].shades));
    }, [currentColor, colours]);
  
    const handleClick = (selectedColor) => {
      if(selectedColor.isTargetHexColor ){
        const audio = new Audio("/assets/sounds/correct.mp3")
        audio.play()
        setIsCorrect(prev => prev + 1)
      } else{
        const audio = new Audio("/assets/sounds/wrong.mp3")
        audio.play()
        setIsWrong(prev => prev + 1)
      }
      setCurrentColor((prev) => (prev + 1) % colours.length);

      if(currentColor === numberOfColors){
        setIsCorrect(0)
        setIsWrong(0)
      }
    };

    const handleNumberOfColors = (e)=> {
      setNumberOfColors(parseInt(e.target.value))
      handleReset()
    }

    const handleDifficultyChange = (e) => {
      setDifficulty(e.target.value)
      handleReset()
    }

    const handleReset = ()=> {
        setCurrentColor(0)
        setIsCorrect(0)
        setIsWrong(0)
    }
    
  return (
    <div className="w-[400px] max-[400px]:w-full h-[600px] mt-5 py-3 bg-gray-500 mx-auto flex flex-col justify-between rounded-2xl relative">
      <div className="">
          <h2 data-testid="gameInstructions" className="text-3xl font-semibold text-center py-5">Guess the correct color!</h2>
          <div data-testid="colorBox" style={{backgroundColor: colours[currentColor].targetHexColor}} className="w-full h-40 rounded-md"></div>
          <div data-testid="colorOption" className="grid grid-cols-3 gap-2 m-4">
              {
                  currentColors.map((col, index) => <button disabled={currentColor + 1 === colours.length} onClick={()=> handleClick(col)} key={index} style={{backgroundColor: col.hexColor}} className={`${currentColor + 1 === colours.length && "opacity-50"} w-full h-10 rounded-md cursor-pointer hover:border-2`}></button>)
              }
          </div>
      </div>
      <div className="relative h-full flex justify-between items-end px-6">
          <p data-testid="gameStatus">{currentColor + 1}/{colours.length}</p>
          <div data-testid="score" className="absolute top-0 left-0 flex flex-col">
            <span className={`bg-green-700 text-[whitesmoke] p-2 text-lg`}>{isCorrect}</span>
            <span className="bg-red-700 text-[whitesmoke] p-2 text-lg">{isWrong}</span>
          </div>
          <div className="absolute top-0 left-0 right-0 mx-auto w-fit flex flex-col gap-3">
            <div className="flex gap-2">
              <label htmlFor="level" className="text-lg">Colors:</label>
              <select onChange={handleNumberOfColors} id="level" className="text-sm border rounded">
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
                <option value={50}>50</option>
              </select>
            </div>
            <div className="flex gap-2">
              <label htmlFor="level" className="text-lg">Level:</label>
              <select onChange={handleDifficultyChange} id="level" className="text-sm border rounded">
                <option value="easy">easy</option>
                <option value="normal">normal</option>
                <option value="hard">hard</option>
              </select>
            </div>
          </div>
          <button onClick={handleReset} data-testid="newGameButton" className="cursor-pointer text-sm bg-black text-white px-4 py-2 rounded-xl">New game</button>
      </div>
    </div>
  )
}

export default Color