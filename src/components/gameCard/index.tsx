import Link from "next/link"
import Image from "next/image"

// Icons
import {BsArrowRightCircle} from 'react-icons/bs'   

// Types
import {Game} from '@/types/game'

type GameProps = {
    game : Game,
    height: number,
    objCover: string
}



const GameCard = ({game, height, objCover}: GameProps) => {

    return(
        <div>
            <div key={game.id} className={`w-full max-h-${height} h-${height} relative rounded-lg hover:scale-105 transition-all duration-300`}> 
                <Link href={`/game/${game.id}`}>
                    <Image 
                        src={game.image_url}
                        alt={game.title}
                        fill={true}
                        className={`max-h-${height} ${objCover} rounded-lg`}
                        sizes="(max-width: 320px) 100vw, (max-width: 768px) 28vw, (max-width: 1280px) 20vw"
                    />
                </Link>
            </div>
            <Link href={`/game/${game.id}`} className="flex gap-2 items-center p-3">
                <p className="font-bold text-black text-sm text-ellipsis truncate whitespace-nowrap overflow-hidden">{game.title}</p>
                <BsArrowRightCircle size={24} color='#000'/>
            </Link>
        </div>
    )
}

export default GameCard