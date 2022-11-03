import {
  FeaturesSection,
  FeatureContainer,
  fetchFeaturesImages,
  FeaturesHead,
  FeaturesContainer,
  useDispatch,
  useSelector,
  featureActions,
} from "../index";

import { useEffect } from "react";

const Features = () => {
  const dispatch = useDispatch();
  const firstRender = useSelector((state) => state.featuresSlice.firstRender);

  useEffect(() => {
    if (firstRender) {
      dispatch(fetchFeaturesImages());
      dispatch(featureActions.firstRenderHappened(false));
    }
  }, [dispatch, firstRender]);

  return (
    <FeaturesSection>
      <FeatureContainer>
        <FeaturesHead />
        <FeaturesContainer />
      </FeatureContainer>
    </FeaturesSection>
  );
};

export default Features;
