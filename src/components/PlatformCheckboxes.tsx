import { Box, Text, Checkbox, CheckboxGroup, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const PlatformCheckbox = () => {
  // State to keep track of selected platforms
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  // Handler to update the state when checkbox selections change
  const handlePlatformChange = (nextValues: string[]) => {
    setSelectedPlatforms(nextValues);
  };

  // Effect to log changes to the console
  useEffect(() => {
    console.log("Selected Platforms: ", selectedPlatforms);
  }, [selectedPlatforms]);

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
        Platform
      </Text>

      <CheckboxGroup value={selectedPlatforms} onChange={handlePlatformChange}>
        <Flex wrap="wrap" gap={3}>
          <Checkbox
            value="8"
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
            Netflix
          </Checkbox>
          <Checkbox
            value="15"
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
            Hulu
          </Checkbox>
          <Checkbox
            value="119"
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
            Amazon Prime Video
          </Checkbox>
          <Checkbox
            value="384"
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
            HBO Max
          </Checkbox>
          <Checkbox
            value="337"
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
            Disney+
          </Checkbox>
          <Checkbox
            value="2"
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
            Apple TV
          </Checkbox>
          <Checkbox
            value="386"
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
            Peacock
          </Checkbox>
          <Checkbox
            value="257"
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
            FuboTV
          </Checkbox>
          <Checkbox
            value="73"
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
            Tubi
          </Checkbox>
        </Flex>
      </CheckboxGroup>
    </Box>
  );
};

export default PlatformCheckbox;
