import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const MovieCardLoading = () => {
  return (
    <Card width="300px" borderRadius={10} overflow={"hidden"}>
        <Skeleton height="600px">
            <CardBody>
                <SkeletonText>
                </SkeletonText>
            </CardBody>
        </Skeleton>
    </Card>
  )
}

export default MovieCardLoading