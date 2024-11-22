import Category from '@/components/category'
import BasketContext from '@/context/basketContext'
import style from '@/pages/shopping/index.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { Suspense, useContext, useEffect, useState } from 'react'



function Shop({ products }) {

    // const [addBasket, setAddBasket] = useState([])
    const { basket, setBasket, favorite, setFavorite } = useContext(BasketContext)

    const handleAddToBasket = (item) => {
        // setAddBasket(item)
        // basket.push(addBasket)
        // console.log(basket)

        setBasket(prev => {
            return [...prev, item]
        })
    }

    const handleAddToFavorite = (item, state) => {
        if (state) {
            setFavorite((prev) => {
                return [...prev, item]
            })
        } else {
            setFavorite((prev) => {
                return prev.filter(item => item.id != id)
            })
        }
    }


    return (
        <>

            <Head>
                <title>shopping</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Suspense fallback={<h1>is Loading...</h1>}>

                <section>
                    <Category />
                </section>


                <section className='container-fluid'>
                    <div className='row justify-content-center p-1 m-2 main_product_category'>
                        {
                            products.map(item => {
                                return (

                                    <div key={item.id} className='col-12 col-md-4 col-xl-3 card product_category'>
                                        <Link href={`/shopping/${item.id}`}>
                                            <img src={item.image} className='card-img-top' />
                                        </Link>
                                        <div className='card-body'>
                                            <h3 className='card-title'>{item.title}</h3>
                                            <h4>price: ${item.price}</h4>
                                            <span>{item.category}</span>
                                            <p className='card-text'>{item.description}</p>

                                            <div className='d-flex justify-content-around align-items-center mb-3'>
                                                {
                                                    basket.find((product) => product.id == item.id) ?
                                                        <div className={style.category_button_added}>Added</div>
                                                        :
                                                        <div className={style.category_button_add} onClick={() => handleAddToBasket(item)}>Add to basket</div>

                                                }

                                                <div className={style.favorite_icon} onClick={() => handleAddToFavorite(item, true)}>
                                                    {
                                                        favorite.find((favorite) => favorite.id == item.id) ?
                                                            <img src='./img/redHeart.png' />
                                                            :
                                                            <img src='./img/whiteHeart.png' />
                                                    }
                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </section>

            </Suspense >
        </>
    )
}




export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    return {
        props: {
            products: data,
        }
    }
}

export default Shop;