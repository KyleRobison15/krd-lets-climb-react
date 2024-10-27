import { Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react";
import { Climb } from "../hooks/useClimbs";

interface Props {
  climb: Climb;
}

const ClimbCard = ({ climb }: Props) => {

    const {stateAbbreviation, areaName, cragName, stars, name, grade, pitches, style} = climb;

  return (
    <Card>
        <CardHeader>
            <Text fontSize="8px">{`${stateAbbreviation} > ${areaName} > ${cragName}`}</Text>
            <Heading size="sm">{climb.name}</Heading>
        </CardHeader>
        <CardBody></CardBody>
        <CardFooter></CardFooter>
    </Card>
  );
};

export default ClimbCard;
