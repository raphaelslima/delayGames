'use client'

import { useState } from "react"

//Icons
import {AiOutlineSend } from "react-icons/ai"
import { FiEdit, FiX } from "react-icons/fi"

const FavCard = () => {

    const [showInput, setShowInput] = useState(false)
    const [input, setInput] = useState('')
    const [favGame, setFavGame] = useState('Adicionar jogo')

    const handleFavGame = () => {
        if(!input) return
        setFavGame(input)
        setInput('')
        setShowInput(false)
    }

    const handleShowInput = () => {
        setShowInput(!showInput)
        setInput('')
    }

    return (
        <div className="w-full sm:w-1/4 bg-gray-900 p-4 h-44 text-white rounded-lg flex flex-col justify-between">
            <div className="w-full flex flex-row items-center justify-between">
                {
                    showInput ? (
                        <button onClick={()=> handleShowInput()}>
                            <FiX size={24} color='#fff'/>
                        </button>
                        
                    ) : ( 
                        <button className="mr-2 hover:scale-105 transition-all duration-300" onClick={()=> handleShowInput()}> 
                            <FiEdit size={24} color='#fff'/> 
                        </button>
                    )
                }
                
                {showInput && (
                    <div className="flex items-center justify-center gap-2 text-black">
                        <input 
                            type="text" 
                            value={input} 
                            className="bg-slate-200 rounded-lg p-1 outline-none w-10/12"
                            onChange={(e)=> setInput(e.target.value)}
                        /> 
                        <button onClick={() => handleFavGame()}>
                            <AiOutlineSend size={24} color={'#fff'}/>
                        </button>
                    </div>
                )}
            </div>
                <p className="font-bold text-white text-sm">{favGame}</p>
        </div>
    )
}

export default FavCard