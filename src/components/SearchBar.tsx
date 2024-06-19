import { Input } from "@chakra-ui/react";
import { color } from "framer-motion";

const SearchBar = () => {
  return (
    <Input
      placeholder="Search Keyword"
      margin={50}
      border="2px solid #48986A"
      borderRadius={5}
      focusBorderColor="#48986A"
    />
  );
};

export default SearchBar;
