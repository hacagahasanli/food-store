import {
  FeatureItemsContainer,
  FeaturesProgress,
  useSelector,
  FeaturesItems,
} from "../../index";
import "../../styles.css";
import { Suspense } from "react";

const FeaturesContainer = () => {
  const imagesLists = useSelector((state) => state.featuresSlice.imageLists);
  return (
    <FeatureItemsContainer>
      {imagesLists.length === 0 ? <FeaturesProgress /> : <FeaturesItems />}
    </FeatureItemsContainer>
  );
};

export default FeaturesContainer;
