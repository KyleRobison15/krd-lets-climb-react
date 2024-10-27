import { List, ListItem } from "@chakra-ui/react";
import useClimbs from "../hooks/useClimbs";

const ClimbsGrid = () => {

  const {climbs} = useClimbs();

  return (
    <>
      <List>
        {climbs.map((climb) => (
          <ListItem key={climb.id}>{climb.name}</ListItem>
        ))}
      </List>
    </>
  );
};

export default ClimbsGrid;
