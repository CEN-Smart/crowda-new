'use client'
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useCallback, useState } from 'react';
import classNames from 'classnames';
import Logo from './Logo'
import { usePathname } from 'next/navigation'

interface MenuItems {
  [key: string]: string
}

const menuItems: MenuItems[] = [
  { item: 'About', link: '/about' },
  { item: 'Projects', link: '/projects' }
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenu = useCallback((action: boolean) => {
    setIsMenuOpen(action);
  }, [])

  return (
    <header className={classNames(`flex bg-white border-b border-black shadow-primary items-center justify-between md:px-4 lg:px-8`)} >

      {/* Logo to show on Desktop view */}
      <div className={classNames(`pl-4 py-5 `, {
      })}>
        <Logo />
      </div>

      {/* Mobile Menu */}
      <div className={classNames(`
      absolute z-[4] pt-[1.3rem] md:pt-0 drop-shadow-2xl bg-white shadow-primary border-b border-black flex items-center justify-between md:hidden w-[70%] transform transition duration-300`, {
        '-translate-x-full': !isMenuOpen,
        'translate-x-0': isMenuOpen,
      })}>


        {/* Logo to show on mobile view */}
        <div className={classNames(`pb-[0.9rem]   pl-4`)}>
          <Logo onClose={() => handleMenu(false)} />
        </div>
        <span onClick={
          () => handleMenu(false)
        } className={classNames(`pb-[0.9rem]   cursor-pointer pr-4`)} > <AiOutlineClose size={24} /> </span>
      </div>


      {/* OverLay */}
      <div onClick={
        () => handleMenu(false)
      } className={classNames(`absolute z-[2] bg-gray-500/50 inset-0 transform transition duration-300 md:hidden`, {
        'translate-x-0': isMenuOpen,
        '-translate-x-full': !isMenuOpen
      })}></div>


      {/* Nav Links */}
      <nav className={classNames(`flex flex-col pt-10 md:pt-0 absolute top-[3.6rem] md:top-0 bottom-0 bg-white  md:bg-transparent z-[3] w-[70%] md:w-fit transform md:translate-x-0 transition duration-300 md:relative md:flex-row md:flex md:space-x-6`, {
        'translate-x-0': isMenuOpen,
        '-translate-x-full': !isMenuOpen
      })}>
        {menuItems.map((item, i) => (
          <Link onClick={() => handleMenu(false)} href={item.link} key={i} className='nav__link'>
            {item.item}
          </Link>
        ))}
        <div className='px-4'>
          <button className='px-4 py-3 transition duration-300 tracking-wider rounded w-full mt-[70%] md:mt-3 bg-slate-300 font-semibold hover:bg-gray-400'>Connect Wallet</button>
        </div>
      </nav>

      {/* Hamburger Menu */}
      <span onClick={
        () => handleMenu(true)
      } className={classNames(`md:hidden cursor-pointer pr-4`, {
        'hidden': isMenuOpen,
      })}>
        <GiHamburgerMenu size={24} />
      </span>

    </header>
  )
}