import { Card, CardBody, Skeleton, SkeletonText, HStack } from "@chakra-ui/react";

const MovieCardLoading = () => {
  return (
    <Card width="100%" borderRadius={10} overflow="hidden">
      <Skeleton height="422px" startColor="#EDEDED" endColor="#CACACA" /> {/* Placeholder for the image */}
      <CardBody>
        <SkeletonText mt="4" noOfLines={1} spacing="4" width="70%" skeletonHeight="20px" /> {/* Mimicking Heading */}
        <HStack mt="4" justifyContent="space-between" width="100%">
          <SkeletonText noOfLines={1} width="50%" skeletonHeight="15px" /> {/* Mimicking services text */}
          <Skeleton height="15px" width="20%" /> {/* Placeholder for VoteAverage component */}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MovieCardLoading;
