import { HStack, Tag } from "@chakra-ui/react";
import useClimbColorScales from "../hooks/useClimbColorScales";

interface Props {
    grade: string,
    style: string,
    pitches: number,
}


const ClimbTagStack = ({grade, style, pitches}: Props) => {
const {getColorForGrade, getColorForStyle} = useClimbColorScales();

  return (
    <HStack>
      <Tag size="sm" colorScheme={getColorForGrade(grade)}>
        {grade}
      </Tag>
      <Tag size="sm" colorScheme={getColorForStyle(style)}>
        {style}
      </Tag>
      <Tag size="sm">{`${pitches} Pitch`}</Tag>
    </HStack>
  );
}

export default ClimbTagStack