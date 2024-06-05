import { Movie } from "../hooks/useMovies";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={`${"https://image.tmdb.org/t/p/original/"}${movie.poster_path}`}></Image>
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
