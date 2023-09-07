'use client'

import Image from "next/image"
import { useSession, signIn, signOut } from 'next-auth/react'

// Components
import Container from "@/components/container"
import FavCard from "./components/favCard"

//img
import userImg from 'public/user.png'

//Icons
import { BsShare } from "react-icons/bs"

const Profile = ()=>{

    const {data, status} = useSession()

    return(
        <main className="w-full text-black p-4">
            <Container>
                <section className="w-full flex flex-col items-center justify-center mt-5">
                    <div className="w-full flex flex-col items-center justify-center">
                        {
                            status === 'unauthenticated' ? (
                                <Image 
                                    alt="Foto de perfil" 
                                    src={userImg}
                                    quality={100}
                                    priority={true} 
                                    className="rounded-full w-24 h-24 object-cover mb-4"
                                />
                            ) : (
                                <Image 
                                    alt="Foto de perfil" 
                                    src={data?.user?.image!}
                                    quality={100}
                                    priority={true} 
                                    className="rounded-full w-24 h-24 object-cover mb-4"
                                    width={24}
                                    height={24}
                                />
                            )
                        }
                        <div className="flex flex-row items-center justify-center gap-2">
                            <h1 className="font-bold text-xl">{status === 'authenticated' ? data.user?.name : 'Faça Login'}</h1>
                            
                        </div>
                    </div> 
                </section>
                <section className="w-full flex flex-col sm:flex-row items-center justify-center gap-5 flex-wrap mt-5">
                    <FavCard/>
                    <FavCard/>
                    <FavCard/>  
                </section>
            </Container>
        </main>
    )
}

export default Profile