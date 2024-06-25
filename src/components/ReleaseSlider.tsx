import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const ReleaseSlider = () => {
  const minYear = 1850;
  const maxYear = 2024;
  const [sliderValues, setSliderValues] = useState([1990, 2024]);

  // Handler to update the state when slider values change
  const handleSliderChange = (val: number[]) => {
    setSliderValues(val);
  };

  // Effect to log changes to the console
  useEffect(() => {
    console.log(
      "Selected Release Year Range: ",
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
        Release Year
      </Text>
      <RangeSlider
        aria-label={["minReleaseYear", "maxReleaseYear"]}
        defaultValue={[1990, 2024]}
        min={minYear}
        max={maxYear}
        onChange={handleSliderChange}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack bg="#48986A" />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Flex justifyContent="space-between" mt={2}>
        <Text fontSize={14}>{minYear}</Text>
        <Text fontSize={14}>{maxYear}</Text>
      </Flex>
      <Flex justifyContent="center" mt={2}>
        <Text fontSize={14}>
          Selected: {sliderValues[0]} - {sliderValues[1]}
        </Text>
      </Flex>
    </Box>
  );
};

export default ReleaseSlider;
