// Types
import {ParamsSearchGame} from '@/types/paramsSearchGame'
import {Game} from '@/types/game'

// Helpers
import {fethDelayGame} from '@/helpers/helpers'

// Components
import Container from '@/components/container'
import InputSearch from '@/components/inputSearch'
import GameCard from '@/components/gameCard'

const SearchGame = async ({params}: ParamsSearchGame ) => {

    const decodeTitle = decodeURI(params.title)

    const games: Game[] | null = await fethDelayGame(`next-api/?api=game&title=${decodeTitle}`)

    return(
        <main>
            <Container>
                <InputSearch/>
                <h2 className='font-bold mb-5'>Veja o que encontramos:</h2>
                {
                    games !== null ? (
                        <div className='grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                            {
                                games.map((game)=> (
                                    <GameCard game={game}/>
                            ))
                            }
                        </div>
                    ) : <p className='text-lg'>Jogo não encontrado :(</p>
                }
            </Container>
        </main>
    )
}

export default SearchGame