import style from '@/components/header/index.module.css'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
// import { HiShoppingBag } from "react-icons/hi";



function Header() {

    const [open, setOpen] = useState(false)
    const menuRef = useRef()

    const handleMenu = () => {
        setOpen(true)
        console.log(menuRef)

    }



    return (
        <>
            <header className='d-none d-md-block'>
                <div className={style.main_header}>
                    <ul>
                        <Link href={'/'}>
                            <li>Home</li>
                        </Link>

                        {/* <li>Shopping<HiShoppingBag /></li> */}
                        <Link href={'/shopping'}>
                            <li>Shopping</li>
                        </Link>

                        <Link href={'/About-us'}>
                            <li>About Us</li>
                        </Link>

                        <Link href={'/contact'}>
                            <li>Contact Us</li>
                        </Link>
                    </ul>
                </div>
            </header>



            <header className='d-block d-md-none zindex-fixed' ref={menuRef}>

                <div className={style.hamburger_menu_img} onClick={() => setOpen(!open)}>
                    <img src='./img/hamburger-icon.png' />
                </div>

                {
                    !open ?
                        <div className={style.hamburger_menu_img} onClick={() => setOpen(!open)}>
                            <img src='./img/hamburger-icon.png' />
                        </div>
                        :
                        <div className={style.hamburger_menu_img} onClick={() => setOpen(!open)}>
                            <img src='./img/x.png' />
                        </div>
                }

                {
                    open &&
                    // <div className={`${open ? 'active' : 'hamburger_menu'}`}>
                    <div className={style.hamburger_menu}>

                        <div className='container-fluid'>

                            <ul className='row justify-content-center'>
                                <Link href={'/'}>
                                    <li>Home</li>
                                </Link>

                                <Link href={'/shopping'}>
                                    <li>Shopping</li>
                                </Link>

                                <Link href={'/About-us'}>
                                    <li>About Us</li>
                                </Link>

                                <Link href={'/contact'}>
                                    <li>Contact Us</li>
                                </Link>
                            </ul>

                        </div>

                    </div>
                }

            </header >



        </>
    )
}


export default Header;