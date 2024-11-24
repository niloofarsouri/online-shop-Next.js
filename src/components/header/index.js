import style from '@/components/header/index.module.css'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Basket from '../basket';
import Image from 'next/image';




function Header() {

    const [open, setOpen] = useState(false)


    return (
        <>
            <header className='d-none d-md-block'>
                <div className={style.main_header}>
                    <ul>
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

                        <Link href={'/favorite'}>
                            <li className={style.main_favorite}>
                                <img src='./img/redHeart.png' />
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className={style.main_basket}>
                    <Link href={'/my-basket'}>
                        <Basket />
                    </Link>
                </div>

            </header>



            <header className='d-block d-md-none zindex-fixed'>

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

                                <Link href={'/favorite'}>
                                    <li className={style.main_favorite}>
                                        <img src='./img/redHeart.png' />
                                    </li>
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