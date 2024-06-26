import { Box, StackDivider, VStack } from "@chakra-ui/react";
import RuntimeSlider from "./RuntimeSlider";
import ReleaseSlider from "./ReleaseSlider";
import RefreshButton from "./RefreshButton";
import GenreCheckbox from "./GenreCheckbox";
import RatingSlider from "./RatingSlider";
import CertificationCheckbox from "./CertificationCheckbox";
import CastSelector from "./CastSelector";
import PlatformCheckbox from "./PlatformCheckboxes";

const Aside = () => {
  return (
    <VStack
      width={200}
      marginLeft={5}
      divider={<StackDivider />}
      spacing={4}
      align="stretch"
    >
      <Box>
        <GenreCheckbox></GenreCheckbox>
      </Box>
      <Box>
        <CastSelector></CastSelector>
      </Box>
      <Box>
        <ReleaseSlider></ReleaseSlider>
      </Box>
      <Box>
        <RuntimeSlider></RuntimeSlider>
      </Box>
      <Box>
        <RatingSlider></RatingSlider>
      </Box>
      <Box>
        <PlatformCheckbox></PlatformCheckbox>
      </Box>
      <Box>
        <CertificationCheckbox></CertificationCheckbox>
      </Box>
      <Box>
        <RefreshButton></RefreshButton>
      </Box>
    </VStack>
  );
};

export default Aside;
