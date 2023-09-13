import Link from "next/link"
import Image from "next/image"

// Icons
import {BsArrowRightCircle} from 'react-icons/bs'   

// Types
import {Game} from '@/types/game'

type GameProps = {
    game : Game,
    height: string,
    objCover: string,
    width: string
}



const GameCard = ({game, height, objCover, width}: GameProps) => {

    return(
        <div>
            <div key={game.id} className={`w-full sm:w-${width} h-${height} relative rounded-lg hover:scale-105 transition-all duration-300`}> 
                <Link href={`/game/${game.id}`}>
                    <Image 
                        src={game.image_url}
                        alt={game.title}
                        fill={true}
                        className={`max-h-${height} ${objCover} rounded-lg w-full`}
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