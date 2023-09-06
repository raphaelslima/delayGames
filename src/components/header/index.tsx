import Image from 'next/image'
import Link from 'next/link'

//Imagem
import logoImg from 'public/logo.svg'

//Icons
import {LiaGamepadSolid} from 'react-icons/lia'

const Header = () =>{
    return(
        <header className="w-full flex justify-center h-28 bg-slate-100 text-black">
            <div className="max-w-screen-xl p-4 flex items-center h-full w-full justify-between">
                <nav className='flex flex-col items-center md:flex-row'>
                    <Link href='/' className='md:mr-4'> 
                        <Image src={logoImg} alt='Logo do site' quality={100} priority={true} width={100} height={100} className='md:w-48 md:h-w-48'/>
                    </Link>

                    <div className='w-full flex gap-1'>
                    <Link href='/'>
                        <span className='text-xm hover:scale-125 transition-transform duration-500'>Jogos</span>
                    </Link>

                    <span>|</span>

                    <Link href='/profile'>
                        <span className='text-xm hover:scale-125 transition-transform duration-500'>Perfil</span>
                    </Link>
                    </div>
                </nav>

                <div>
                    <Link href='/profile'>
                        <LiaGamepadSolid size={34} color='#475568' />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header