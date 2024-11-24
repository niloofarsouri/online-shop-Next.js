import Layout from "@/components/layout";
import BasketContext from "@/context/basketContext";
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from "react";



export default function App({ Component, pageProps }) {

  const [basket, setBasket] = useState([])
  // const [allProduct, setAllProduct] = useState([])
  const [favorite, setFavorite] = useState([])


  return (
    <>
      <BasketContext.Provider value={{ basket, setBasket, favorite, setFavorite }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BasketContext.Provider>
    </>
  );
}
