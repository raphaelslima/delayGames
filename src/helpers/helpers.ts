export const fethDelayGame = async (url: string) =>{
    const res = await fetch(`${process.env.NEXT_API_URL}/${url}`,{next: {
      revalidate: 300
    }})
  
    return res.json()
  }