import React from 'react';
import './Header.css';
import './public/Logo/zurichBlue.svg';



const Header = () => {
    
	return (
		<header className="container"> 
		<div className='headerText'>
		<p>Version</p>
		<h1>Dokumentenbibliothek</h1>
		</div>
             <img src="/public/Logo/zurichBlue.svg" />
			
		</header>

	);
};



export default Header;
