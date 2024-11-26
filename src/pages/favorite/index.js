import BasketContext from '@/context/basketContext';
import style from '@/pages/favorite/index.module.css'
import { useContext } from 'react';
import Link from 'next/link';
import Card from '@/components/card';


function Favorite() {

    const { favorite } = useContext(BasketContext)



    return (
        <>
            <section className='container-fluid'>
                <div className='row justify-content-center p-1 m-2 main_product_category'>
                    {
                        favorite.map(item => {
                            return (
                                <Card key={item.id} {...item} />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}


export default Favorite;