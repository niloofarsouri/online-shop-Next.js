import BasketContext from "@/context/basketContext";
import { useContext } from "react";




function BasketShow() {

    const { basket } = useContext(BasketContext)


    return (
        <>
            <div>
                {
                    basket.map(product => {
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
        </>
    )
}


export default BasketShow;