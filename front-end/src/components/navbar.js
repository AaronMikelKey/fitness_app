import React from 'react'
import {NavLink} from 'react-router-dom'
//no css yet
//import '../css/global.sass'

const LoggedIn = (props) => {
	if (props.user) {
		return <a href='/'>{props.user.username}</a>
	}
	else {
		return (
			<div className='buttons'>
				<a href='/signup' className='button'>Sign up</a>
				<a href='/login' className='button'>Log in</a>
			</div>
		)
	}
}

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul>
				<NavLink to='/' ><li className='nav1'>Home</li></NavLink>
        <NavLink to='/about' ><li className='nav2'>About</li></NavLink>
        <NavLink to='/workouts' ><li className='nav3'>Workouts</li></NavLink>
        <NavLink to='/meals' ><li className='nav4'>Meals</li></NavLink>
				<LoggedIn />
      </ul>
    </nav>
  )
}

export default Navbar