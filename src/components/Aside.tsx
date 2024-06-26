import React, { useState } from "react";
import { Box, StackDivider, VStack } from "@chakra-ui/react";
import RuntimeSlider from "./RuntimeSlider";
import ReleaseSlider from "./ReleaseSlider";
import RefreshButton from "./RefreshButton";
import GenreCheckbox from "./GenreCheckbox";
import RatingSlider from "./RatingSlider";
import CertificationCheckbox from "./CertificationCheckbox";
import CastSelector from "./CastSelector";
import PlatformCheckbox from "./PlatformCheckboxes";

interface AsideProps {
  onFiltersChange: (filters: any) => void; // Update type as needed
}

const Aside = ({ onFiltersChange }: AsideProps) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedCertifications, setSelectedCertifications] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<[number, number]>([0, 10]);
  const [selectedReleaseYears, setSelectedReleaseYears] = useState<[number, number]>([1990, 2024]);
  const [selectedRuntimes, setSelectedRuntimes] = useState<[number, number]>([60, 180]);
  const [selectedCast, setSelectedCast] = useState<string[]>([]);

  const handleGenreChange = (genres: string[]) => {
    setSelectedGenres(genres);
    onFiltersChange({ with_genres: genres.join("|") });
  };

  const handleCertificationChange = (certifications: string[]) => {
    setSelectedCertifications(certifications);
    onFiltersChange({ certification: certifications.join("|") });
  };

  const handlePlatformChange = (platforms: string[]) => {
    setSelectedPlatforms(platforms);
    onFiltersChange({ platform: platforms.join("|") });
  };

  const handleRatingChange = (ratings: [number, number]) => {
    setSelectedRatings(ratings);
    onFiltersChange({
      vote_average_gte: ratings[0],
      vote_average_lte: ratings[1],
    });
  };

  const handleReleaseYearChange = (years: [number, number]) => {
    setSelectedReleaseYears(years);
    onFiltersChange({
      release_date_gte: years[0].toString(),
      release_date_lte: years[1].toString(),
    });
  };

  const handleRuntimeChange = (runtimes: [number, number]) => {
    setSelectedRuntimes(runtimes);
    onFiltersChange({
      with_runtime_gte: runtimes[0],
      with_runtime_lte: runtimes[1],
    });
  };

  const handleCastChange = (cast: string[]) => {
    setSelectedCast(cast);
    onFiltersChange({ with_cast: cast.join("|") });
  };

  return (
    <VStack
      width={200}
      marginLeft={5}
      divider={<StackDivider />}
      spacing={4}
      align="stretch"
    >
      <Box>
        <GenreCheckbox
          selectedGenres={selectedGenres}
          onGenreChange={handleGenreChange}
        />
      </Box>

      <Box>
        <CastSelector onCastChange={handleCastChange} />
      </Box>

      <Box>
        <ReleaseSlider
          selectedReleaseYears={selectedReleaseYears}
          onReleaseYearChange={handleReleaseYearChange}
        />
      </Box>

      <Box>
        <RuntimeSlider
          selectedRuntimes={selectedRuntimes}
          onRuntimeChange={handleRuntimeChange}
        />
      </Box>

      <Box>
        <RatingSlider
          selectedRatings={selectedRatings}
          onRatingChange={handleRatingChange}
        />
      </Box>

      <Box>
        <PlatformCheckbox
          selectedPlatforms={selectedPlatforms}
          onPlatformChange={handlePlatformChange}
        />
      </Box>

      <Box>
        <CertificationCheckbox
          selectedCertifications={selectedCertifications}
          onCertificationChange={handleCertificationChange}
        />
      </Box>

      <Box>
        <RefreshButton />
      </Box>
    </VStack>
  );
};

export default Aside;
