import { useEffect, useState } from "react";
import { List, ListItem, Text } from "@chakra-ui/react";
import apiClient, { apiEndpoints } from "../services/apiClient";
import useAuth from "../hooks/useAuth";

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
  const [climbs, setClimbs] = useState<Climb[]>([]);
  const {
    auth: { accessToken },
  } = useAuth();

  useEffect(() => {
    apiClient
      .get<Climb[]>(apiEndpoints.climbs, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setClimbs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Text>{`You have ${climbs.length} climbs.`}</Text>
      <List>
        {climbs.map((climb) => (
          <ListItem key={climb.id}>{climb.name}</ListItem>
        ))}
      </List>
    </>
  );
};

export default ClimbsGrid;
