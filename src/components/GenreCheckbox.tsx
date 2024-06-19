import { Box, Text, Checkbox, CheckboxGroup, Flex } from "@chakra-ui/react";

const GenreCheckbox = () => {
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
  <CheckboxGroup defaultValue={[""]}>
    <Flex wrap="wrap" gap={3}>
      <Checkbox
        value="action"
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
        Action
      </Checkbox>
      <Checkbox
        value="adventure"
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
        Adventure
      </Checkbox>
      <Checkbox
        value="animation"
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
        Animation
      </Checkbox>
      <Checkbox
        value="comedy"
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
        Comedy
      </Checkbox>
      <Checkbox
        value="crime"
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
        Crime
      </Checkbox>
      <Checkbox
        value="documentary"
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
        Documentary
      </Checkbox>
      <Checkbox
        value="drama"
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
        Drama
      </Checkbox>
      <Checkbox
        value="family"
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
        Family
      </Checkbox>
      <Checkbox
        value="fantasy"
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
        Fantasy
      </Checkbox>
      <Checkbox
        value="history"
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
        History
      </Checkbox>
      <Checkbox
        value="horror"
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
        Horror
      </Checkbox>
      <Checkbox
        value="music"
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
        Music
      </Checkbox>
      <Checkbox
        value="mystery"
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
        Mystery
      </Checkbox>
      <Checkbox
        value="romance"
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
        Romance
      </Checkbox>
      <Checkbox
        value="scifi"
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
        Science Fiction
      </Checkbox>
      <Checkbox
        value="tvmovie"
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
        TV Movie
      </Checkbox>
      <Checkbox
        value="thriller"
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
        Thriller
      </Checkbox>
      <Checkbox
        value="war"
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
        War
      </Checkbox>
      <Checkbox
        value="western"
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
        Western
      </Checkbox>
    </Flex>
  </CheckboxGroup>
</Box>
);
};

export default GenreCheckbox;