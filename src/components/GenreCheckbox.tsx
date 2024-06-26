import { Box, Text, Checkbox, CheckboxGroup, Flex } from "@chakra-ui/react";
import { useEffect } from "react";

interface GenreCheckboxProps {
  selectedGenres: string[];
  onGenreChange: (genres: string[]) => void;
}

const GenreCheckbox = ({ selectedGenres, onGenreChange }: GenreCheckboxProps) => {
  const handleGenreChange = (nextValues: string[]) => {
    onGenreChange(nextValues);
  };

  useEffect(() => {
    console.log("Selected Genres: ", selectedGenres);
  }, [selectedGenres]);
  const genres = [
    { label: "Action", value: "28" },
    { label: "Adventure", value: "12" },
    { label: "Animation", value: "16" },
    { label: "Comedy", value: "35" },
    { label: "Crime", value: "80" },
    { label: "Documentary", value: "99" },
    { label: "Drama", value: "18" },
    { label: "Family", value: "10751" },
    { label: "Fantasy", value: "14" },
    { label: "History", value: "36" },
    { label: "Horror", value: "27" },
    { label: "Music", value: "10402" },
    { label: "Mystery", value: "9648" },
    { label: "Romance", value: "10749" },
    { label: "Science Fiction", value: "878" },
    { label: "TV Movie", value: "10770" },
    { label: "Thriller", value: "53" },
    { label: "War", value: "10752" },
    { label: "Western", value: "37" }
  ];

  return (
    <Box width="100%">
      <Text
        fontSize={16}
        mb={2}
        fontWeight={600}
        border="2px solid #48986A"
        padding={2}
        borderRadius={5}
      >
        Genre
      </Text>

      <CheckboxGroup value={selectedGenres} onChange={handleGenreChange}>
        <Flex wrap="wrap" gap={3}>
          {genres.map(genre => (
            <Checkbox
              key={genre.value}
              value={genre.value}
              sx={{
                "& .chakra-checkbox__control[data-checked]": {
                  bg: "#48986A",
                  borderColor: "#48986A",
                },
                "& .chakra-checkbox__control:hover": {
                  borderColor: "#48986A",
                },
                "& .chakra-checkbox__control[data-checked]:hover": {
                  bg: "#48986A",
                  borderColor: "#48986A",
                },
              }}
            >
              {genre.label}
            </Checkbox>
          ))}
        </Flex>
      </CheckboxGroup>
    </Box>
  );
};

export default GenreCheckbox;
