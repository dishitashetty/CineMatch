import React, { useState, useEffect } from "react";
import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  // State to store the input value
  const [inputValue, setInputValue] = useState("");

  // State to store the parsed array of words
  const [searchTerms, setSearchTerms] = useState<string[]>([]);

  // Update the state whenever the input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Handle button click or form submission
  const handleSearch = () => {
    // Parse the input value into words and update the searchTerms state
    const terms = inputValue.trim().split(/\s+/);
    setSearchTerms(terms);
  };

  // Use useEffect to log changes whenever searchTerms changes
  useEffect(() => {
    console.log("Search Terms: ", searchTerms);
  }, [searchTerms]);

  return (
    <InputGroup margin={50}>
      <Input
        placeholder="Search Keyword"
        border="2px solid #48986A"
        borderRadius={5}
        focusBorderColor="#48986A"
        value={inputValue}
        onChange={handleInputChange}
      />
      <InputRightElement>
        <Button size="sm" bg="none" color="#48986A" ml={-5} onClick={handleSearch}>
          <FaSearch size="20"/>
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
