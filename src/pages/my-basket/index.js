import BasketContext from '@/context/basketContext'
import style from '@/pages/my-basket/index.module.css'
import { useContext } from 'react'
import Link from 'next/link'


function MyBasket() {


    const { basket, setBasket, favorite, setFavorite } = useContext(BasketContext)



    const handleRemoveFromBasket = (id) => {

        setBasket(prev => {
            return prev.filter(item => item.id != id)
        })

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

    return (
        <>
            <section className='container-fluid'>
                <div className='row justify-content-center p-1 m-2 main_product_category'>
                    {
                        basket.map(item => {
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
                                    </div>

                                    <div className='d-flex justify-content-around align-items-center mb-3'>
                                        <div className={style.category_button_add} onClick={() => handleRemoveFromBasket(item.id)}>Remove</div>

                                        <div className={style.favorite_icon}>
                                            {
                                                favorite.find((favorite) => favorite.id == item.id) ?
                                                    <img src='./img/redHeart.png' onClick={() => handleFavorite(item, false)} />
                                                    :
                                                    <img src='./img/whiteHeart.png' onClick={() => handleFavorite(item, true)} />
                                            }


                                        </div>
                                    </div>
                                </div>


                            )
                        })

                    }

                </div>
            </section>
        </>
    )
}


export default MyBasket;