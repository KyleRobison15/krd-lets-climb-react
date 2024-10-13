import { useState } from "react";

export interface AttemptImage {
  id: number;
  filePath: string;
  fileName: string;
}

export interface Attempt {
  id: number;
  date: string;
  didSend: boolean;
  description: string;
  creationTs: string;
  revisionTs: string;
  attemptImages: AttemptImage[];
}

export interface Climb {
  id: number;
  name: string;
  grade: string;
  boulderGrade: string;
  style: string;
  pitches: number;
  danger: string;
  description: string;
  stateAbbreviation: string;
  areaName: string;
  cragName: string;
  cragLongitude: number;
  cragLatitude: number;
  isTicked: boolean;
  stars: number;
  firstSendDate: string;
  imageFilePath: string;
  imageFileName: string;
  creationTs: string;
  revisionTs: string;
  attempts: Attempt[];
}

const ClimbsGrid = () => {
  const [climbs, setClimbs] = useState([]);
  const [error, setError] = useState("");

//   useEffect(() => {

//     try {
        
//     } catch (error) {
        
//     }

//   }, []);

  return <div>ClimbsGrid</div>;
};

export default ClimbsGrid;
