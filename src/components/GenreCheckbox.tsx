import { Box, Text, Checkbox, CheckboxGroup, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const GenreCheckbox = () => {
  // State to keep track of selected genres
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  // Handler to update the state when checkbox selections change
  const handleGenreChange = (nextValues: string[]) => {
    setSelectedGenres(nextValues);
  };

  // Effect to log changes to the console
  useEffect(() => {
    console.log("Selected Genres: ", selectedGenres);
  }, [selectedGenres]);

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
          {/* Checkboxes for each genre */}
          {/* Adjust the 'value' attributes if you're using genre IDs from an API */}
          {[
            "Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary",
            "Drama", "Family", "Fantasy", "History", "Horror", "Music",
            "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller",
            "War", "Western"
          ].map(genre => (
            <Checkbox key={genre} value={genre.toLowerCase()} sx={{
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
            }}>
              {genre}
            </Checkbox>
          ))}
        </Flex>
      </CheckboxGroup>
    </Box>
  );
};

export default GenreCheckbox;
