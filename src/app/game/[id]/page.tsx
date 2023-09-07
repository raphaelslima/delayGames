import { redirect } from "next/navigation"
import Image from "next/image"

//Components
import Container from "@/components/container"
import Label from "./components/label"

//Types
import {Game} from '@/types/game'
type GameDetailProps = {
    params: {
        id: string
    }
}

//Helpers
import {fethDelayGame} from '@/helpers/helpers'
import GameCard from "@/components/gameCard"

const GameDetail = async ({params}: GameDetailProps) => {

    const game: Game = await fethDelayGame(`next-api/?api=game&id=${params.id}`)

    const allGames : Game[] = await fethDelayGame('next-api/?api=games')

    let gameRandom : Game | null = null
    let sortNumberIdGame = Number(params.id)
    while(Number(params.id) === sortNumberIdGame){
        sortNumberIdGame = Math.floor(Math.random() * allGames.length)
    }
    gameRandom = await fethDelayGame(`next-api/?api=game&id=${sortNumberIdGame}`)
    
    if(!game || !gameRandom){
        redirect('/')
    }

    return (
        <main className="w-full text-black">
                <div className="h-44 sm:h-96 w-full relative bg-black">
                    <Image 
                        src={game.image_url}
                        alt={`${game.title}`}
                        quality={100}
                        priority={true}
                        fill={true}
                        className="max-h-96 object-cover opacity-70"
                        sizes="(max-width: 320px) 100vw"
                    />
                </div>
            <Container>
                <h1 className="font-bold text-xl my-4">{game.title}</h1>
                <p>{game.description}</p>

                <h2 className="font-bold text-lg my-5" >Plataformas:</h2>

                <div className="flex gap-2 flex-wrap">
                    {game.platforms.map((platform, i)=> (
                        <Label  key={i} item={platform}/>
                    ))}
                </div>

                <h2 className="font-bold text-lg my-5" >Categorias:</h2>

                <div className="flex gap-2 flex-wrap">
                    {game.categories.map((category, i)=> (
                        <Label  key={i} item={category}/>
                    ))}
                </div>

                <p className="mt-5 flex justify-start gap-4"><span className="font-bold">Data de lançameto: </span> {game.release}</p>

                <h2 className="font-bold text-lg my-5">Game Recomendado:</h2>

                <GameCard game={gameRandom}/>
            </Container>
        </main>
    )
}

export default GameDetail