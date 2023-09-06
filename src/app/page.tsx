import Image from "next/image";
import Link from "next/link";

//Componets
import Container from "@/components/container";
import InputSearch from "@/components/inputSearch";

//Helpers
import { fethDelayGame } from '@/helpers/helpers'

//Types
import { Game } from "@/types/game";

//Icons
import {BsArrowRightSquare} from 'react-icons/bs'

export default async function Home() {

  const gameDay : Game = await fethDelayGame('next-api/?api=game_day')

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">Separamos um jogo exclusivo para você!</h1>
        <Link href={`/game/${gameDay.id}`}  className="w-full">
          <section className="w-full bg-black rounded-lg ">
            <div className="w-full max-h-96 h-48 relative rounded-lg">
              <div className="absolute z-20 bottom-0 flex gap-2 items-center p-3">
                  <p className="font-bold text-xl text-white">{gameDay.title}</p>
                  <BsArrowRightSquare size={24} color='#fff'/>
              </div>
              <Image 
                src={gameDay.image_url} 
                alt={`Game do dia ${gameDay.title}`} 
                quality={100} 
                priority={true}
                fill={true}
                className="max-h-96 object-cover rounded-lg opacity-50"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 44vw"
                />
            </div>
          </section>
        </Link>
        <InputSearch/>
      </Container>
    </main>
  )
}
