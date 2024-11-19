import style from '@/components/category/index.module.css'
import { useEffect, useState } from 'react';




function Category() {

    const [category, setCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategory(json))
    })


    useEffect(() => {
        const abortController = new AbortController()

        if (selectedCategory) {
            fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`,{signal:abortController.signal})
                .then(res => res.json())
                .then(json => setProducts(json))
        }

        return () => {
            abortController.abort('clean up function')
        }

    }, [selectedCategory])


    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(json => setAll(json))
    // })


    const handleCategory = (cat) => {
        // console.log(cat)
        setSelectedCategory(cat)
    }


    return (
        <>
            <section>
                <div className={style.main_category}>
                    {/* <div className={style.category_button} onClick={handleAllProducts}>All</div> */}
                    {
                        category.map(item => {
                            return (
                                <div className={style.category_button} key={item} onClick={() => handleCategory(item)}>{item}</div>
                            )
                        })
                    }
                </div>
            </section >

            <section>
                <div className='d-md-flex flex-row justify-content-center main_product_category'>
                    {
                        products.map(product => {
                            return (
                                <div key={product.id} className='card product_category'>
                                    <img src={product.image} className='card-img-top' />
                                    <div className='card-body'>
                                        <h3>{product.title}</h3>
                                        <h4>price: ${product.price}</h4>
                                        <span>{product.category}</span>
                                        <p>{product.description}</p>
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


export default Category;