import Link from 'next/link'
import Image from 'next/image'

// Helpers
import {fethDelayGame} from '@/helpers/helpers'

// Types
import {Game} from '@/types/game'

// Icons
import {BsArrowRightCircle} from 'react-icons/bs'


const GamesGallery = async () => {

    const allGames : Game[] = await fethDelayGame('next-api/?api=games')

    return(
        <section className="my-5">
            <h2 className="text-lg font-bold mb-5">Jogos para se conhecer:</h2>
 
            <div className='grid gap-7 grid-cols-1 md:grid-cols-3 xl:grid-col-4'>   
            {allGames.map((game)=> (
                <div>
                    <div key={game.id} className='w-full max-h-56 h-56 relative rounded-lg hover:scale-105 transition-all duration-300'> 
                    <Link href={`/game/${game.id}`}>
                        <Image 
                        src={game.image_url}
                        alt={game.title}
                        priority={true}
                        fill={true}
                        className="max-h-96 object-cover rounded-lg"
                        sizes="(max-width: 320px) 100vw, (max-width: 768px) 28vw, (max-width: 1280px) 20vw"
                        />
                    </Link>
                </div>
                    <Link href={`/game/${game.id}`} className="flex gap-2 items-center p-3">
                        <p className="font-bold text-black text-sm text-ellipsis truncate whitespace-nowrap overflow-hidden">{game.title}</p>
                        <BsArrowRightCircle size={24} color='#000'/>
                    </Link>
                </div>
            ))}
            </div>
            
     
        </section>
    )
}

export default GamesGallery