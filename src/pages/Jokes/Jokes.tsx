import { useState } from 'react'

type jokeType = {
    joke : string
    id : number
}

function Jokes() {

    // const [input, setInput] = useState<number>(0)
    // const [search, setSearch] = useState<string | null>(null)



    const [jokes, setJokes] = useState<jokeType | null>(null)


    // there is no need for useEffec here since changing the state rerenders the component automatically
    const getJokes = async () => {
        try {
            const data = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
            const joke = await data.json();
            setJokes(joke);
            console.log(jokes)
        } catch(err) {
            console.log(err)
        }
    }

  return (
    <div className='mx-[15%]'>
        <button onClick={getJokes} className='bg-blue-500 text-xl p-2 rounded-md my-4'>Get a new joke</button>
        <div className='text-2xl font-bold'>
            {
                jokes != null ? 
                    (<div>{jokes?.joke}</div>) : (<div>nothing here</div>)
                  
                
                //  #### you can't use this since you can only use thernary operator here
                // if you want to you can move it to a new component and use this without the default return since these already return the approproate elements after checking the condition

                // if(jokes != null) {
                //     return <div>something</div>
                // } else {
                //     return <div>else</div>
                // }
            }
        </div>
    </div>
  )
}

export default Jokes