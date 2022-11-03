import {
  FeatureItemContainer,
  FeatureItemImage,
  FeatureImageIcons,
  FeatureImageIcon,
  FeatureImageAnchor,
  FeatureItemText,
  FeatureItemName,
  FeaturedItemAnchor,
  FeatureItemCost,
  v4,
  useSelector,
  useDispatch,
  cartActions,
  heartActions,
} from "../../../index";
import "../../../styles.css";

const FeaturesItems = () => {
  const dispatch = useDispatch();
  const imagesLists = useSelector((state) => state.featuresSlice.imageLists);
  const addToCartHandler = (id) => {
    dispatch(cartActions.addToCart(id));
  };

  const addToWishList = (id) => {
    dispatch(heartActions.addToWishList(id));
  };
  return (
    <>
      {imagesLists.map((image) => (
        <FeatureItemContainer key={`${image[1] + v4()}`}>
          <FeatureItemImage
            style={{ backgroundImage: "url(" + image[1] + ")" }}
          >
            <FeatureImageIcons className="feature__image__icons">
              <FeatureImageIcon
                className="feature__image__icon"
                onClick={addToWishList.bind(null, image[5])}
              >
                <FeatureImageAnchor href="#!">
                  <ion-icon name="heart-outline"></ion-icon>
                </FeatureImageAnchor>
              </FeatureImageIcon>
              <FeatureImageIcon className="feature__image__icon">
                <FeatureImageAnchor href="#!">
                  <ion-icon name="bag-remove-outline"></ion-icon>
                </FeatureImageAnchor>
              </FeatureImageIcon>
              <FeatureImageIcon
                className="feature__image__icon"
                onClick={addToCartHandler.bind(null, image[5])}
              >
                <FeatureImageAnchor href="#!">
                  <ion-icon name="cart-outline"></ion-icon>
                </FeatureImageAnchor>
              </FeatureImageIcon>
            </FeatureImageIcons>
          </FeatureItemImage>
          <FeatureItemText>
            <FeatureItemName>
              <FeaturedItemAnchor href="#!">{image[2]}</FeaturedItemAnchor>
            </FeatureItemName>
            <FeatureItemCost>{image[3]}</FeatureItemCost>
          </FeatureItemText>
        </FeatureItemContainer>
      ))}
    </>
  );
};

export default FeaturesItems;
