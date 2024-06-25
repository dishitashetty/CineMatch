import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardLoading = () => {
  return (
    <Card width="100%" borderRadius={10} overflow={"hidden"}>
      <Skeleton height="422px"> {/* Adjust height to match the image size */}
        {/* Body of the card */}
      </Skeleton>
      <CardBody>
        <SkeletonText mt="4" noOfLines={1} spacing="4" width="70%" />
        <Skeleton height="20px" width="30%" mt="4" />
      </CardBody>
    </Card>
  );
};

export default MovieCardLoading;
