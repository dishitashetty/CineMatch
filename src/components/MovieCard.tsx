import { Movie } from "../hooks/useMovies";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image
        src={`${"https://image.tmdb.org/t/p/original/"}${movie.poster_path}`}
      ></Image>
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
        {movie.services ? (
          movie.services.map((service) => (
            <>
              <Text key={service.provider_id}>{service.provider_name}</Text>
              <Image src={service.logo_path}></Image>
            </>
          ))
        ) : (
          <Text>No streaming services available</Text>
        )}
      </CardBody>
    </Card>
  );
};

export default MovieCard;
