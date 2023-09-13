// Helpers
import {fethDelayGame} from '@/helpers/helpers'

// Types
import {Game} from '@/types/game'

//Components
import GameCard from '../gameCard'

const GamesGallery = async () => {

    const allGames : Game[] = await fethDelayGame('next-api/?api=games')

    return(
        <section className="my-5">
            <h2 className="text-lg font-bold mb-5">Jogos para se conhecer:</h2>
 
            <div className='grid gap-7 grid-cols-1 md:grid-cols-3 xl:grid-col-4'>   
            {allGames.map((game)=> (

                <GameCard game={game} objCover="object-center" width={'full'}/>

            ))}
            </div>
            
     
        </section>
    )
}

export default GamesGallery