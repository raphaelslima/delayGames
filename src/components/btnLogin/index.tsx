'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

//Icons
import {LiaGamepadSolid} from 'react-icons/lia'

const BtnLogin = () => {

    const {data, status} = useSession()

    return(
        <div>
            {
            status === 'unauthenticated' ? (
                        <button className='flex flex-col items-center justify-center' onClick={()=> signIn()}>
                            <LiaGamepadSolid size={34} color='#475568' />
                            <p className='text-sm'>Faça Login</p>
                        </button>
            ):(
                <button className='flex flex-col items-center justify-center' onClick={()=> signOut()}>
                            <LiaGamepadSolid size={34} color='#475568' />
                            <p className='text-sm'>{data?.user?.name}</p>
                        </button>
            )
        }
        </div>
    )
}

export default BtnLogin