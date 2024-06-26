import { Movie } from "../hooks/useMovies";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import VoteAverage from "./voteAverage";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card width="100%" borderRadius={10} overflow={"hidden"}>
      <Image
        src={`${"https://image.tmdb.org/t/p/original/"}${movie.poster_path}`}
      />
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
        <HStack justifyContent={"space-between"}>
          {movie.services ? (
            movie.services.map((service) => (
              <>
                <Text key={service.provider_id}>{service.provider_name}</Text>
                <Image src={service.logo_path} />
              </>
            ))
          ) : (
            <Text>No streaming services available</Text>
          )}
          <VoteAverage score={movie.vote_average} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
