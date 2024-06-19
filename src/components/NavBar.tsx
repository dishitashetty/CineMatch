import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <HStack height={20} justifyContent={"space-between"} padding="10px" marginBottom={5}>
      <Image src={logo} boxSize="60px" borderRadius="20px"></Image>
      <SearchBar></SearchBar>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
