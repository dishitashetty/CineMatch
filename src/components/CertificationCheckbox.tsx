import { Box, Text, Checkbox, CheckboxGroup, Flex } from "@chakra-ui/react";

const CertificationCheckbox = () => {
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

      <CheckboxGroup defaultValue={[""]}>
        <Flex wrap="wrap" gap={3}>
          <Checkbox
            value="NR"
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
            value="G"
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
            value="PG"
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
            value="P13"
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
            value="R"
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
            value="NC17"
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
