import style from '@/pages/shopping/[id].module.css'



function Product({ product }) {



    return (
        <>
            <div key={product.id} className='card product_category'>
                <img src={product.image} className='card-img-top' />
                <div className='card-body'>
                    <h3>{product.title}</h3>
                    <h4>price: ${product.price}</h4>
                    <span>{product.category}</span>
                    <p>{product.description}</p>
                </div>
            </div>
        </>
    )
}


export async function getStaticPaths() {

    const response = await fetch('https://fakestoreapi.com/products')
    const allpost = await response.json()

    const dataPath = allpost.map(item => {
        return { params: { id: String(item.id) } }
    })

    return {
        paths: dataPath,
        fallback: false,
    }

    // return {
    //     path: [{ params: { id: '1' } }],
    //     fallback: false,
    // }

}




export async function getStaticProps({ params }) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const data = await res.json()

    return {
        props: { product: data }
    }
}



export default Product;