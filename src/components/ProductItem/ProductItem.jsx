import s from './ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { images, title, variants } = product;
  const image = images[0].src;
  const price = variants[0].price;
  return (
    <li className={s.item}>
      <img src={image} alt="" className={s.itemImg} />
      <div className={s.itemTextWrap}>
        <span className={s.itemTitleWrap}>
          <p className={s.itemTitle}>{title}</p>
          <p className={s.itemTitle}>{price} KR.</p>
        </span>
        <span className={s.itemConditionWrap}>
          <p className={s.itemCondition}>Condition</p>
          <p className={s.itemCondition}>Slightly used</p>
        </span>
      </div>
      <span className={s.itemUsedCondition}>USED</span>
      <button className={s.itemBtn}>
        PICK-UP IN <span>2200</span>
      </button>
    </li>
  );
};

export default ProductItem;
