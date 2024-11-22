import style from '@/components/category/index.module.css'
import BasketContext from '@/context/basketContext';
import { useContext, useEffect, useState } from 'react';




function Category() {

    const [category, setCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [products, setProducts] = useState([])

    const { basket, setBasket, favorite, setFavorite } = useContext(BasketContext)


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategory(json))
    })


    useEffect(() => {
        const abortController = new AbortController()

        if (selectedCategory) {
            fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`, { signal: abortController.signal })
                .then(res => res.json())
                .then(json => setProducts(json))
        }

        return () => {
            abortController.abort('clean up function')
        }

    }, [selectedCategory])


    const handleCategory = (cat) => {
        setSelectedCategory(cat)
    }

    const handleAddToBasket = (item) => {
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
            <section className='container-fluid'>
                <div className='row justify-content-center'>
                    {
                        category.map(item => {
                            return (
                                <div className='col-12 col-md-3 d-flex justify-content-center'>
                                    <div className={style.category_button} key={item} onClick={() => handleCategory(item)}>{item}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </section >


            <section className='container-fluid'>
                <div className='row justify-content-center p-1 m-2 main_product_category'>
                    {
                        products.map(product => {
                            return (
                                <div key={product.id} className='col-12 col-md-4 col-xl-3 card product_category'>
                                    <img src={product.image} className='card-img-top' />
                                    <div className='card-body'>
                                        <h3 className='card-title'>{product.title}</h3>
                                        <h4>price: ${product.price}</h4>
                                        <span>{product.category}</span>
                                        <p className='card-text'>{product.description}</p>

                                        <div className='d-flex justify-content-around align-items-center mb-3'>
                                            {
                                                basket.find((item) => product.id == item.id) ?
                                                    <div className={style.category_button_added}>Added</div>
                                                    :
                                                    <div className={style.category_button_add} onClick={() => handleAddToBasket(product)}>Add to basket</div>

                                            }

                                            <div className={style.favorite_icon} onClick={() => handleAddToFavorite(product, true)}>
                                                {
                                                    favorite.find((favorite) => favorite.id == product.id) ?
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

            <div className='m-5 overflow-y-hidden'>
                <h1 className='p-0'>Selected category: {products.length}</h1>
            </div>

        </>
    )

}


export default Category;