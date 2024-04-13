import React from 'react'
import './header.css'
import netflixLogo from '../../assets/Images/netflix_logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div>
      <div className='header__outer__container'>
        <div className="header__container">
          <div className='header__left__wrapper'>
            <div className="icons">
              < MenuIcon />
              <div className="notification__number">10</div>
            </div>
            <img src={netflixLogo} alt="Netflix logo" />
            <div className="link__wrapper">
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/home">TVShows</a></li>
                <li><a href="/home">Movies</a></li>
                <li><a href="/home">Latest</a></li>
                <li><a href="/home">MyList</a></li>
                <li><a href="/home">Browse by Language</a></li>
              </ul>
            </div>
          </div>
          <div className='header__right__wrapper'>
            <div className="icon">
              <div className='search__icon'>
                < SearchIcon />
              </div>
              <div className='more__icon'>
                < MoreHorizIcon />
              </div>
              <div className='other__icon'>
                < NotificationsNoneIcon />
              </div>
              <div className='other__icon'>
                < AccountBoxIcon />
              </div>
              <div className='other__icon'>
                < ArrowDropDownIcon  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header