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
				<a href='/' className='button'>Sign up</a>
				<a href='/' className='button'>Log in</a>
			</div>
		)
	}
}

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul>
				
        {/*
				Need to change App.js to handle routes before implementing navlinks

				<NavLink exact to='/' ><li className='nav1'>Home</li></NavLink>
        <NavLink to='/' ><li className='nav2'>About</li></NavLink>
        <NavLink to='/' ><li className='nav3'>Workouts</li></NavLink>
        <NavLink to='/' ><li className='nav4'>Meals</li></NavLink>
	*/}

	{/* Placeholder links */}
	<a href='/'>Home</a>
	<a href='/'>About</a>
	<a href='/'>Workouts</a>
	<a href='/'>Meals</a>
				<LoggedIn />
      </ul>
    </nav>
  )
}

export default Navbar