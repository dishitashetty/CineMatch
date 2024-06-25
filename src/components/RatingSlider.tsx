import { useState, useEffect } from "react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

const RatingSlider = () => {
  const minRating = 0;
  const maxRating = 10;
  const [sliderValues, setSliderValues] = useState([0, 10]);

  // Handler to update the state when slider values change
  const handleSliderChange = (val: number[]) => {
    setSliderValues(val);
  };

  // Effect to log changes to the console
  useEffect(() => {
    console.log(
      "Selected Rating Range: ",
      sliderValues[0],
      "-",
      sliderValues[1]
    );
  }, [sliderValues]);

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
        defaultValue={[6, 10]}
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
          Selected: {sliderValues[0]} - {sliderValues[1]}
        </Text>
      </Flex>
    </Box>
  );
};

export default RatingSlider;
