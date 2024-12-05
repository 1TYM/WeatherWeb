import React, { useState } from 'react'
import { images } from '../../assets/image';
import style from './navbar.module.scss';
import { useDispatch } from 'react-redux';
import { getLatLon } from '../../store/features/weather';

const Navbar = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch();
  const setWeather = (e)=>{
    if(e.key == 'Enter' && query) {
      dispatch(getLatLon(query))
    }
  }
  return (
    <nav className={style.nav}>
        <a href="" className={style.logo}>
            <img src={images.logo} alt="" className={style.logo__img} />
            vue weather
        </a>
        <div className={style.search}>
            <img src={images.city} alt="" className={style.search__img} />
            <input type="text" 
              className={style.search__input} 
              placeholder='Выбрать город'
              onChange={(e)=>{setQuery(e.target.value);}}
              onKeyDown={setWeather}
            />
        </div>
    </nav>
  )
}

export default Navbar