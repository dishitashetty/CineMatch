import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

interface RatingSliderProps {
  selectedRatings: [number, number];
  onRatingChange: (ratings: [number, number]) => void;
}

const RatingSlider = ({ selectedRatings, onRatingChange }: RatingSliderProps) => {
  const minRating = 0;
  const maxRating = 10;

  // Handler to update the state when slider values change
  const handleSliderChange = (val: number[]) => {
    onRatingChange([val[0], val[1]]);
  };

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
        Rating
      </Text>
      <RangeSlider
        aria-label={["minRating", "maxRating"]}
        defaultValue={selectedRatings}
        min={minRating}
        max={maxRating}
        onChange={handleSliderChange}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack bg="#48986A" />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Flex justifyContent="space-between" mt={2}>
        <Text fontSize={14}>{minRating}</Text>
        <Text fontSize={14}>{maxRating}</Text>
      </Flex>
      <Flex justifyContent="center" mt={2}>
        <Text fontSize={14}>
          Selected: {selectedRatings[0]} - {selectedRatings[1]}
        </Text>
      </Flex>
    </Box>
  );
};

export default RatingSlider;
