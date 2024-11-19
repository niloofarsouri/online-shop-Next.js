import style from '@/components/header/index.module.css'
import Link from 'next/link';
// import { HiShoppingBag } from "react-icons/hi";



function Header() {

    return (
        <>
            <header>
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

        </>
    )
}


export default Header;