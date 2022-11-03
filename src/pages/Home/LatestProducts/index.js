import {
  ProductsLatest,
  LatestContainer,
  LatestProductsRow,
  LatestProductCol,
  ProductLatest,
  ReviewProducts,
  TopRatedProducts,
  v4,
} from "../index";
import "./styles.css";

const LatestProducts = () => {
  const elArray = [<ProductLatest />, <TopRatedProducts />, <ReviewProducts />];

  return (
    <ProductsLatest>
      <LatestContainer>
        <LatestProductsRow>
          {elArray.map((el) => (
            <LatestProductCol key={el + v4()}>{el}</LatestProductCol>
          ))}
        </LatestProductsRow>
      </LatestContainer>
    </ProductsLatest>
  );
};

export default LatestProducts;
