import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <InputGroup margin={50}>
      <Input
        placeholder="Search Keyword"
        border="2px solid #48986A"
        borderRadius={5}
        focusBorderColor="#48986A"
      />
      <InputRightElement>
        <Button size="sm" bg="none" color="#48986A" ml={-5} >
          <FaSearch size="20"/>
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
