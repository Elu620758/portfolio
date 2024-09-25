
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import mylogo from '../assets/mylogo.png'
export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);


    return <header className="flex justify-between px-5 py-2 bg-primary " style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#282c34',
    }}>
        <a className="font-bold" href="#"  ><img src={mylogo} alt="Logo" style={{
            width: '50px',
            height: '50px',
            marginRight: '10px',
        }} /></a>
        <nav className="hidden md:block">
            <ul className="flex" style={{ color: "white", fontWeight: 'bold' }}>
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  mobile-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5' /></button>
    </header>
}