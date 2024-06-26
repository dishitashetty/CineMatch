import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import Select, { MultiValue, StylesConfig } from "react-select";
import axios from "axios";

interface OptionType {
  value: string;
  label: string;
}

interface CastSelectorProps {
  onCastChange: (selectedCast: string[]) => void;
}

const CastSelector: React.FC<CastSelectorProps> = ({ onCastChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<OptionType>>([]);
  const [options, setOptions] = useState<OptionType[]>([]);

  const handleChange = (selected: MultiValue<OptionType>) => {
    setSelectedOptions(selected);
    onCastChange(selected.map(option => option.value));
  };

  // Fetch actors from TMDB API
  useEffect(() => {
    const fetchActors = async () => {
      try {
        const pages = Array.from({ length: 100 }, (_, i) => i + 1);
        const requests = pages.map(page =>
          axios.get('https://api.themoviedb.org/3/person/popular', {
            params: {
              api_key: '7ca98b08beebf0d76c27b0bc5bf8579b',
              language: 'en-US',
              page,
            },
          })
        );

        const responses = await Promise.all(requests);
        const allActors = responses.flatMap(response =>
          response.data.results
            .filter((actor: any) => actor.known_for_department === 'Acting')
            .map((actor: any) => ({
              value: actor.id,
              label: actor.name,
            }))
        );

        setOptions(allActors);
      } catch (error) {
        console.error('Error fetching actors:', error);
      }
    };

    fetchActors();
  }, []);

  // Log changes to the console whenever the selectedOptions change
  useEffect(() => {
    console.log("Selected Cast Members: ", selectedOptions.map(option => option.label).join(", "));
  }, [selectedOptions]);

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
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
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
