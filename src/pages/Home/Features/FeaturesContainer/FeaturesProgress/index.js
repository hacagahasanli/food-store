import { Fragment } from "react";
import { FeatureItemContainer, Skeleton, Stack } from "../../../index";

const FeaturesProgress = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Fragment>
      {array.map((i) => (
        <FeatureItemContainer key={i}>
          <Stack
            spacing={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Skeleton variant="rectangular" width={270} height={270} />
            <Skeleton variant="text" width={100} height={30} />
            <Skeleton variant="text" width={80} height={25} />
          </Stack>
        </FeatureItemContainer>
      ))}
    </Fragment>
  );
};

export default FeaturesProgress;


