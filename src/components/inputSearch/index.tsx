'use client'

import {useState, FormEvent} from 'react'
import {useRouter} from 'next/navigation'

//Icons
import {FiSearch} from 'react-icons/fi'

const InputSearch = () => {

    const [searchInput, setSearchInput] = useState('')
    const router = useRouter()

    const handleSearch = (e : FormEvent)=>{
        e.preventDefault()

        if(!searchInput) return

        router.push(`/game/search/${searchInput}`)

    }

    return(
        <form onSubmit={handleSearch} className="w-full bg-slate-200 my-5 p-4 rounded-lg flex items-center justify-between">
            <input 
                type="text" 
                placeholder="Procurando algum game?" 
                value={searchInput}
                onChange={(e)=> setSearchInput(e.target.value)}
                className='bg-slate-200 outline-none w-11/12'
            />
            <button type='submit'> 
                <FiSearch size={24} color='#ea580c'/>
            </button>
        </form>
    )
}

export default InputSearch