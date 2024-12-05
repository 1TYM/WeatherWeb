import React, { useEffect } from 'react'
import Navbar from './components/navbar'
import Current from './components/current'
import { useDispatch, useSelector } from 'react-redux'
import { getLatLon } from './store/features/weather'
import Daily from './components/daily'

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getLatLon('Tashkent'))
  }, [])

  const weather = useSelector((state)=>state.weather.weather)
  // console.log(weather);
  return weather && (
    <div className='container'>
      <Navbar/>
      <Current/>
      <Daily/>
    </div>
  )
}

export default App