import Category from '@/components/category'
import style from '@/pages/shopping/index.module.css'
import Head from 'next/head'
import { Suspense, useContext, useEffect, useState } from 'react'
import Card from '@/components/card'



function Shop({ products }) {


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
                                    <Card key={item.id} {...item} />
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