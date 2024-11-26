import style from '@/components/card/index.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import BasketContext from '@/context/basketContext'


function Card(props) {

    const { basket, setBasket, favorite, setFavorite } = useContext(BasketContext)
    const { id, image, title, category, description, price } = props;


    const handleBasket = (props, state) => {
        if (state) {
            setBasket((prev) => {
                return [...prev, props]
            })

        } else {
            setBasket((prev) => {
                return prev.filter(item => item.id != props.id)
            })
        }
    }

    const handleFavorite = (props, state) => {
        if (state) {
            setFavorite((prev) => {
                return [...prev, props]
            })

        } else {
            setFavorite((prev) => {
                return prev.filter(item => item.id != props.id)
            })
        }
    }

    // const handleRemoveFromFavorite = (id) => {
    //     setFavorite((prev) => {
    //         return prev.filter(item => item.id != id)
    //     })
    // }

    return (
        <>
            <div key={id} className='col-12 col-md-4 col-xl-3 card product_category'>
                <Link href={`/shopping/${id}`}>
                    <img src={image} className='card-img-top' />
                </Link>
                <div className='card-body'>
                    <h3 className='card-title'>{title}</h3>
                    <h4>price: ${price}</h4>
                    <span>{category}</span>
                    <p className='card-text'>{description}</p>

                    <div className='d-flex justify-content-around align-items-center mb-3'>
                        {
                            basket.find((product) => product.id == props.id) ?
                                <div className={style.category_button_added} onClick={() => handleBasket(props, false)}>Remove</div>
                                :
                                <div className={style.category_button_add} onClick={() => handleBasket(props, true)}>Add to basket</div>

                        }

                        <div className={style.favorite_icon}>
                            {
                                favorite.find((favorite) => favorite.id == props.id) ?
                                    <img src='./img/redHeart.png' onClick={() => handleFavorite(props, false)} />
                                    :
                                    <img src='./img/whiteHeart.png' onClick={() => handleFavorite(props, true)} />
                            }


                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}


export default Card;