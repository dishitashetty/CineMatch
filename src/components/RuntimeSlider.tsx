import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

interface RuntimeSliderProps {
  selectedRuntimes: [number, number];
  onRuntimeChange: (runtimes: [number, number]) => void;
}

const RuntimeSlider = ({ selectedRuntimes, onRuntimeChange }: RuntimeSliderProps) => {
  const minRuntime = 0;
  const maxRuntime = 240;

  // Handler to update the state when slider values change
  const handleSliderChange = (val: number[]) => {
    onRuntimeChange([val[0], val[1]]);
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
        Runtime
      </Text>
      <RangeSlider
        aria-label={["minRuntime", "maxRuntime"]}
        defaultValue={selectedRuntimes}
        min={minRuntime}
        max={maxRuntime}
        onChange={handleSliderChange}
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
          Selected: {selectedRuntimes[0]} - {selectedRuntimes[1]} min
        </Text>
      </Flex>
    </Box>
  );
};

export default RuntimeSlider;
