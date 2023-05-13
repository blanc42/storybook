import { useState } from 'react'
import { useTemp } from '../../hooks/useTemp'

const HomePage = () => {

    const [temp , setTemp] = useState<number>(0)
    
    async function doSomething() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const temp = await useTemp();
        console.log(`The current temperature is ${temp}°C`);
        setTemp(temp)
      }
      
    doSomething();

    return (
    <>
    <main className='w-screen h-screen'>
        <h1 className='text-3xl font-bold'>HOME PAGE</h1>

        {/* temprature */}
        <div className='border-3 border-white w-[100px] h-[100px] rounded-md flex justify-center items-center text-3xl font-bold '>
            <p>{temp}&#176;C</p>
        </div>


        {/* links */}

        <div className='flex gap-2'>
            <a href="https://youtube.com" className=''>
                <img src="https://youtube.com/favicon.ico" className='w-8' alt="Youtube Icon" />
            </a>

            <a href="https://4anime.is" className=''>
                <img src="https://4anime.is/images/logo.png" className='w-8' alt="4anime Icon" />
            </a>
        </div>

        {/* Todo-List */}
        <div>

        </div>

        {/* Bitcoin and Index Prices */}
        <div>
            
        </div>

    </main>
    </>
  )
}

export default HomePage