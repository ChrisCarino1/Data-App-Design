import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='bg-black sticky top-0 z-50'>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4'>
                        <Link className='hover:bg-[#00df9a] px-2 py-1 rounded-md' to="hero" smooth={true} offset={0} duration={500}>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link className='hover:bg-[#00df9a] px-2 py-1 rounded-md' to="dashboard" smooth={true} offset={-100} duration={500}>Dashboard</Link>
                    </li>
                    <li className='p-4'>
                        <Link className='hover:bg-[#00df9a] px-2 py-1 rounded-md' to="newsletter" smooth={true} offset={-200} duration={500}>Newsletter</Link>
                    </li>
                    <li className='p-4'>
                        <Link className='hover:bg-[#00df9a] px-2 py-1 rounded-md' to="pricing" smooth={true} offset={-100} duration={500}>Pricing</Link>
                    </li>
                    <li className='p-4'>
                        <Link className='hover:bg-[#00df9a] px-2 py-1 rounded-md' to="about" smooth={true} offset={-250} duration={500}>About/Contact</Link>
                    </li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    { nav? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold m-4 text-[#00df9a]'>REACT.</h1>
                    <ul className='uppercase p-4'>
                        <li className='p-4 border-b border-gray-600 hover:bg-[#00df9a] rounded-t-lg'><Link to="hero" smooth={true} offset={0} duration={500} onClick={handleNav}>Home</Link></li>
                        <li className='p-4 border-b border-gray-600 hover:bg-[#00df9a]'><Link to="dashboard" smooth={true} offset={-100} duration={500} onClick={handleNav}>Dashboard</Link></li>
                        <li className='p-4 border-b border-gray-600 hover:bg-[#00df9a]'><Link to="newsletter" smooth={true} offset={-200} duration={500} onClick={handleNav}>Newsletter</Link></li>
                        <li className='p-4 border-b border-gray-600 hover:bg-[#00df9a]'><Link to="pricing" smooth={true} offset={-100} duration={500} onClick={handleNav}>Pricing</Link></li>
                        <li className='p-4 border-b border-gray-600 hover:bg-[#00df9a] rounded-b-lg'><Link to="about" smooth={true} offset={-250} duration={500} onClick={handleNav}>About/Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar