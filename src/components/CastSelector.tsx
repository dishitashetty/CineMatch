import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import Select, { MultiValue, StylesConfig } from "react-select";

interface OptionType {
  value: string;
  label: string;
}

const CastSelector: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<OptionType>>([]);

  const handleChange = (selected: MultiValue<OptionType>) => {
    setSelectedOptions(selected);
  };

  // Log changes to the console whenever the selectedOptions change
  useEffect(() => {
    console.log("Selected Cast Members: ", selectedOptions.map(option => option.label).join(", "));
  }, [selectedOptions]);

  const options: OptionType[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const customStyles: StylesConfig<OptionType, true> = {
    control: (provided, state) => ({
      ...provided,
      border: "2px solid #48986A",
      borderRadius: 10,
      boxShadow: state.isFocused ? "none" : undefined,
      "&:hover": {
        border: "2px solid #48986A",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#48986A" : state.isFocused ? "#48986A" : undefined,
      color: state.isSelected ? "white" : "black",
      "&:active": {
        backgroundColor: state.isSelected ? "#48986A" : "#48986A",
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#48986A",
      borderRadius: 5,
      color: "white",
      padding: "2px",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "white",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "white",
      ':hover': {
        backgroundColor: "#285C43",
        color: "white",
      },
    }),
  };

  return (
    <Box width="100%">
      <Text
        fontSize={16}
        mb={2}
        fontWeight={600}
        border="2px solid #48986A"
        padding={2}
        borderRadius={10}
      >
        Cast
      </Text>
      <Select
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        options={options}
        placeholder="Select"
        styles={customStyles}
      />
    </Box>
  );
};

export default CastSelector;
