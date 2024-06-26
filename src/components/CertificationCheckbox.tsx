import { Box, Text, Checkbox, CheckboxGroup, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const CertificationCheckbox = () => {
  // State to keep track of selected certifications
  const [selectedCertifications, setSelectedCertifications] = useState<
    string[]
  >([]);

  // Handler to update the state when checkbox selections change
  const handleCertificationChange = (nextValues: string[]) => {
    setSelectedCertifications(nextValues);
  };

  // Effect to log changes to the console
  useEffect(() => {
    console.log("Selected Certifications: ", selectedCertifications);
  }, [selectedCertifications]);

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
        Certification
      </Text>

      <CheckboxGroup
        value={selectedCertifications}
        onChange={handleCertificationChange}
      >
        <Flex wrap="wrap" gap={3}>
          {/* Each Checkbox now updates the selectedCertifications state */}
          <Checkbox
            value="0"
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
            NR
          </Checkbox>
          <Checkbox
            value="1"
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
            G
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
            PG
          </Checkbox>
          <Checkbox
            value="3"
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
            PG-13
          </Checkbox>
          <Checkbox
            value="4"
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
            R
          </Checkbox>
          <Checkbox
            value="5"
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
            NC-17
          </Checkbox>
        </Flex>
      </CheckboxGroup>
    </Box>
  );
};

export default CertificationCheckbox;
