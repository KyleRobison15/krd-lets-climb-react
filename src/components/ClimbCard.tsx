import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Tag,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Climb } from "../hooks/useClimbs";
import StarRating from "./StarRating";
import ClimbTagStack from "./ClimbTagStack";

interface Props {
  climb: Climb;
}

const ClimbCard = ({ climb }: Props) => {
  const {
    stateAbbreviation,
    areaName,
    cragName,
    stars,
    name,
    grade,
    pitches,
    style,
  } = climb;

  const locationBreakdown = `${stateAbbreviation} > ${areaName} > ${cragName}`;

  return (
    <Card boxShadow="lg" variant="outline">
      <CardHeader>
        <Tooltip label={locationBreakdown} placement="top-start">
          <Text noOfLines={1} fontSize="10px">
            {locationBreakdown}
          </Text>
        </Tooltip>
        <Heading size="md">{name}</Heading>
        <StarRating rating={stars} />
        <ClimbTagStack grade={grade} style={style} pitches={pitches} />
      </CardHeader>
      <CardBody p="14px">
        <Box h="150px" borderWidth="1px" borderRadius={10}></Box>
      </CardBody>
    </Card>
  );
};

export default ClimbCard;
