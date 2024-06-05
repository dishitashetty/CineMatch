import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}

const VoteAverage = ( { score }: Props) => {
    let color = score > 7.5 ? 'green' : score > 5 ? 'yellow' : 'red'
  return (
    <Badge fontSize="14px" borderRadius="5" colorScheme={color}>{score.toFixed(3)}</Badge>
  )
}

export default VoteAverage