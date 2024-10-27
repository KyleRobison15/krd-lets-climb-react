import { useState, useEffect } from "react";
import apiClient, { ApiError, apiEndpoints } from "../services/apiClient";
import useAuth from "./useAuth";
import { CanceledError } from "axios";

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

const useClimbs = () => {
  const [climbs, setClimbs] = useState<Climb[]>([]);
  const [error, setError] = useState<ApiError | null>(null);
  const {
    auth: { accessToken },
  } = useAuth();

  useEffect(() => {

    // AbortController is a class built into modern web browsers
    // It allows us to cancel async operations
    const controller = new AbortController();

    apiClient
      .get<Climb[]>(apiEndpoints.climbs, {
        headers: { Authorization: `Bearer ${accessToken}` },
        signal: controller.signal,
      })
      .then((res) => {
        setClimbs(res.data);
      })
      .catch((err) => {
        if(err instanceof CanceledError){
            return;
        }
        console.log(err);
      });

      // It's good practice when making http requests in useEffect, to provide a cleanup function to abort unnecessary requests 
      // The clean up function will run when the component unmounts
      // In the event that the user loads this page and then immediately navigates away,
      // this clean up function will run, and abort the request.
      return () => controller.abort();
  }, []);

  return { climbs, error };
};

export default useClimbs;
