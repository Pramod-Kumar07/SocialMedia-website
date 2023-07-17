import React from 'react';
import './LeftSection.css';
import instagram from '../../Login/instagram.png';
import { GrHomeRounded } from 'react-icons/gr';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { BiMessageSquareAdd, BiMoviePlay } from 'react-icons/bi';
import { RiMessengerLine } from 'react-icons/ri';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { NavLink } from 'react-router-dom';
import { FaRegHeart, FaRegUserCircle } from 'react-icons/fa';

function Home() {
  return (
    <div>
        <div className='leftSection'>
            <div className='logoContainer'>
                <img src={instagram} alt='instaLogo'/>
            </div>
            <div className='iconContainer'>
              <NavLink to='/' className='link'>
                <div className='icon'><GrHomeRounded className='fill'/> <section>Home</section></div>
              </NavLink>

              <NavLink to='/search' className='link'>
                <div className='icon'><FiSearch className='search'/> <section>Search</section></div>
              </NavLink>

              <NavLink to='/explore' className='link'>
                <div className='icon'><ExploreOutlinedIcon className='fill'/> <section>Explore</section></div>
              </NavLink>

              <NavLink to='/reels' className='link'>
                <div className='icon'><BiMoviePlay className='fill'/> <section>Reels</section></div>
              </NavLink>

              <NavLink to='/messages' className='link'>
                <div className='icon'><RiMessengerLine className='fill'/> <section>Messages</section></div>
              </NavLink>

              <NavLink to='/notificatios' className='link'>
                <div className='icon'><FaRegHeart className='fill'/> <section>Notificatios</section></div>
              </NavLink>

              <NavLink to='/create' className='link'>
                <div className='icon'><BiMessageSquareAdd className='fill'/> <section>Create</section></div>
              </NavLink>

              <NavLink to='/profile' className='link'>
                <div className='icon'><FaRegUserCircle className='fill'/> <section>Profile</section></div>
              </NavLink>

              <NavLink to='/more' className='link'>
                <div className='icon'><FiMenu className='search'/> <section>More</section></div>
              </NavLink>

            </div>

        </div>
    </div>
  )
}

export default Home