import { HStack, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface Props{
    rating: number;
}

const StarRating = ({rating}: Props) => {
  return (
    <HStack spacing={1} pt="3px" pb="6px">
      {[...Array(rating)].map((_, index) => (
        <Icon key={index} as={FaStar} color="yellow.400" fontSize="14px"/>
      ))}
    </HStack>
  );
}

export default StarRating