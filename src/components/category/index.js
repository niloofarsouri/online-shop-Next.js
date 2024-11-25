import style from '@/components/category/index.module.css'
import { useContext, useEffect, useState } from 'react';




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
                        products.map(item => {
                            return (
                                <Card key={item.id} {...item} />
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