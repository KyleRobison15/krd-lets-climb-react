
// Define the color type
type GradeColorScale = {
  [key in string]: string;
};

type StyleColorScale = {
  [key in string]: string;
};

const gradeColorScale: GradeColorScale = {
  "5.4": "gray",
  "5.5": "gray",
  "5.6": "gray",
  "5.7": "purple",
  "5.7+": "purple",
  "5.8-": "teal",
  "5.8": "teal",
  "5.8+": "teal",
  "5.9-": "yellow",
  "5.9": "yellow",
  "5.9+": "yellow",
  "5.10-": "blue",
  "5.10": "blue",
  "5.10+": "blue",
  "5.10a": "blue",
  "5.10b": "blue",
  "5.10c": "blue",
  "5.10d": "blue",
  "5.11-": "pink",
  "5.11": "pink",
  "5.11+": "pink",
  "5.11a": "pink",
  "5.11b": "pink",
  "5.11c": "pink",
  "5.11d": "pink",
  "5.12-": "purple",
  "5.12": "purple",
  "5.12+": "purple",
  "5.12a": "purple",
  "5.12b": "purple",
  "5.12c": "purple",
  "5.12d": "purple",
  "5.13-": "red",
  "5.13": "red",
  "5.13+": "red",
  "5.13a": "red",
  "5.13b": "red",
  "5.13c": "red",
  "5.13d": "red",
  "5.14-": "orange",
  "5.14": "orange",
  "5.14+": "orange",
  "5.14a": "orange",
  "5.14b": "orange",
  "5.14c": "orange",
  "5.14d": "orange",
  "5.15-": "orange",
  "5.15": "orange",
  "5.15+": "orange",
  "5.15a": "orange",
  "5.15b": "orange",
  "5.15c": "orange",
  "5.15d": "orange",
};

const styleColorScale: StyleColorScale = {
  "Trad": "orange",
  "Sport": "teal",
  "Boulder": "green",
  "Ice": "blue",
  "Mixed": "gray",
};

const getColorForGrade = (grade: string): string => {
  return gradeColorScale[grade];
};

const getColorForStyle = (style: string): string => {
  return styleColorScale[style];
}

const useClimbColorScales = () => {
  return { getColorForGrade, getColorForStyle };
};

export default useClimbColorScales;
