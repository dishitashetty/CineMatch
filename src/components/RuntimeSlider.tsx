import { useState } from "react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

const RuntimeSlider = () => {
  const minRuntime = 0;
  const maxRuntime = 240;
  const [sliderValues, setSliderValues] = useState([0, 240]);

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
        Runtime
      </Text>
      <RangeSlider
        aria-label={["min", "max"]}
        defaultValue={[60, 180]}
        min={minRuntime}
        max={maxRuntime}
        onChange={(val) => setSliderValues(val)}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack bg="#48986A" />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Flex justifyContent="space-between" mt={2}>
        <Text fontSize={14}>{minRuntime} min</Text>
        <Text fontSize={14}>{maxRuntime} min</Text>
      </Flex>
      <Flex justifyContent="center" mt={2}>
        <Text fontSize={14}>
          Selected: {sliderValues[0]} - {sliderValues[1]}
        </Text>
      </Flex>
    </Box>
  );
};

export default RuntimeSlider;
