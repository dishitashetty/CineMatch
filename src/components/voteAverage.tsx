import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const VoteAverage = ({ score }: Props) => {
  let vote = score === 0 ? "Unreleased" : score.toFixed(2);
  let color =
    score > 7.5 ? "green" : score > 5 ? "yellow" : score === 0 ? "blue" : "red";
  return (
    <Badge fontSize="14px" borderRadius="5" colorScheme={color}>
      {vote}
    </Badge>
  );
};

export default VoteAverage;
