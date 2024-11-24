import BasketContext from '@/context/basketContext';
import style from '@/pages/favorite/index.module.css'
import { useContext } from 'react';
import Link from 'next/link';

function Favorite() {

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
        }
    }


    return (
        <>
            <section className='container-fluid'>
                <div className='row justify-content-center p-1 m-2 main_product_category'>
                    {
                        favorite.map(item => {
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
        </>
    )
}


export default Favorite;