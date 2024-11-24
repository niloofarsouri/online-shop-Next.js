import style from '@/components/card/index.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import BasketContext from '@/context/basketContext'


function Card(props) {

    const { basket, setBasket, favorite, setFavorite } = useContext(BasketContext)
    const { id, image, title, category, description, price } = props;


    const handleAddToBasket = (props) => {
        // setAddBasket(item)
        // basket.push(addBasket)
        // console.log(basket)

        setBasket(prev => {
            return [...prev, props]
        })
    }

    const handleAddToFavorite = (props, state) => {
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
                            basket.find((product) => product.id == id) ?
                                <div className={style.category_button_added}>Added</div>
                                :
                                <div className={style.category_button_add} onClick={() => handleAddToBasket(props)}>Add to basket</div>

                        }

                        <div className={style.favorite_icon} onClick={() => handleAddToFavorite(props, true)}>
                            {
                                favorite.find((favorite) => favorite.id == props.id) ?
                                    <img src='./img/redHeart.png' />
                                    :
                                    <img src='./img/whiteHeart.png' />
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Card;