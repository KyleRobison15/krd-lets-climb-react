import { SimpleGrid } from "@chakra-ui/react";
import useClimbs from "../hooks/useClimbs";
import ClimbCard from "./ClimbCard";
import ClimbCardContainer from "./ClimbCardContainer";

const ClimbsGrid = () => {
  const { climbs } = useClimbs();
  
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
      padding="12px"
      spacing={4}
    >
      {climbs.map((climb) => (
        <ClimbCardContainer key={climb.id}>
          <ClimbCard climb={climb} />
        </ClimbCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ClimbsGrid;
