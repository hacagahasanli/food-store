import {
  FeatureRow,
  FeatureInner,
  FeatureTitleContainer,
  FeatureHeader,
  FeaturedControls,
  FeaturedLists,
  FeaturedList,
  featureActions,
  getLocaleLists,
} from "../../index";
import { useSelector, useDispatch } from "react-redux";

const FeaturesHead = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.featuresSlice.featuresLists);

  
  const handleList = (e) => {
    const listID = e.target.id;
    dispatch(featureActions.removeClass());
    dispatch(featureActions.addClass(listID));
    dispatch(getLocaleLists(listID));
  };

  return (
    <FeatureRow>
      <FeatureInner>
        <FeatureTitleContainer>
          <FeatureHeader>Featured Product</FeatureHeader>
        </FeatureTitleContainer>
        <FeaturedControls>
          <FeaturedLists>
            {lists.map((list, index) => (
              <FeaturedList
                key={list.id}
                id={list.id}
                item={lists[index].classes}
                onClick={handleList}
              >
                {list.name}
              </FeaturedList>
            ))}
          </FeaturedLists>
        </FeaturedControls>
      </FeatureInner>
    </FeatureRow>
  );
};

export default FeaturesHead;
