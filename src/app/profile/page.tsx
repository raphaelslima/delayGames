'use client'

import Image from "next/image"

// Components
import Container from "@/components/container"

//img
import userImg from 'public/user.png'

//Icons
import { BsShare } from "react-icons/bs"

const Profile = ()=>{

    const handleShare = async () => {
        await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_URL}/profile`)
    }

    return(
        <main className="w-full text-black p-4">
            <Container>
                <section className="w-full flex flex-col items-center justify-center mt-5">
                    <div className="w-full flex flex-col items-center justify-center"> 
                        <Image 
                            alt="Foto de perfil" 
                            src={userImg} 
                            className="rounded-full w-24 h-24 object-cover mb-4"
                        />
                        <div className="flex flex-row items-center justify-center gap-2">
                            <h1 className="font-bold text-xl">Raphael Lima</h1>
                            <button 
                                className="p-2 bg-gray-700 text-white rounded-lg"
                                onClick={()=> handleShare()}
                                >
                                    <BsShare/>
                                </button>
                        </div>
                    </div>
                        
                </section>
            </Container>
        </main>
    )
}

export default Profile