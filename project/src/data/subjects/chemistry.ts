import { Chapter } from '../../types';

// Physical Chemistry
const physicalChemistry = {
  "Some Basic Concepts in Chemistry": [],
  "States of Matter": [],
  "Atomic Structure": [],
  "Chemical Bonding and Molecular Structure": [],
  "Chemical Thermodynamics": [],
  "Solutions": [],
  "Equilibrium": [],
  "Redox Reactions and Electrochemistry": [],
  "Chemical Kinetics": [],
  "Surface Chemistry": []
};

// Inorganic Chemistry
const inorganicChemistry = {
  "Classification of Elements and Periodicity in Properties": [],
  "General Principles and Processes of Isolation of Metals": [],
  "Hydrogen": [],
  "s-Block Elements (Alkali and Alkaline Earth Metals)": [],
  "p-Block Elements": [],
  "d- and f-Block Elements": [],
  "Coordination Compounds": [],
  "Environmental Chemistry": []
};

// Organic Chemistry
const organicChemistry = {
  "Some Basic Principles of Organic Chemistry": [],
  "Hydrocarbons": [],
  "Organic Compounds Containing Halogens": [],
  "Organic Compounds Containing Oxygen": [],
  "Organic Compounds Containing Nitrogen": [],
  "Polymers": [],
  "Biomolecules": [],
  "Chemistry in Everyday Life": [],
  "Principles Related to Practical Chemistry": []
};

export const chemistryChapters: { [key: string]: Chapter[] } = {
  ...physicalChemistry,
  ...inorganicChemistry,
  ...organicChemistry
};