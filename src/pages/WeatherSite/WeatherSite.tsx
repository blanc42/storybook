import React, { useEffect, useState } from 'react'

const WeatherSite = () => {
   // const [location, setLocation] = useState<string | null>(null)
   const [temp, setTemp] = useState<number | null>(null)
    const [loading, setLoading] = useState(true)
   useEffect(()=> {
       getData()
   }, [])

   const styles = {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    color : temp! > 25 ? "red" : "blue"
   }

   const getData = async () => {
       const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=12.8601&longitude=77.653&current_weather=true")
       const data = await res.json()
       // console.log(data)
       // setLocation()
       setTemp(data.current_weather.temperature)
       setLoading(false)
   }
   if(loading) {
    return <p>loading</p>
   }
   
   return (
    <div>The temperature in Bangalore is <p className='text-xl font-bold' style={styles}>{temp}</p> degree celcius</div>
 )
}

export default WeatherSite