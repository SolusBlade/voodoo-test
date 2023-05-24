import InfoBar from 'components/InfoBar/InfoBar';
import ProductItem from 'components/ProductItem/ProductItem';
import SubscribeForm from 'components/SubscribeForm/SubscribeForm';
import s from './ProductList.module.scss';
import { useEffect, useState } from 'react';
import { getProductsApi } from 'services/shopifyApi';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      getProductsApi().then(r => setProducts(r.products));
  }, []);

  return (
    <>
      <section className={s.section}>
        <InfoBar />
        <ul className={s.list}>
          {products.map(product => (
            <ProductItem product={product} key={product.id} />
          ))}
              </ul>
              <SubscribeForm />
      </section>
    </>
  );
};

export default ProductList;
