import { Chapter } from '../../../types';
import { 
  physicsAndMeasurement, 
  kinematics,
  lawsOfMotion,
  workEnergyPower
} from './chapters';

export const physicsChapters: { [key: string]: Chapter[] } = {
  "Physics and Measurement": physicsAndMeasurement,
  "Kinematics": kinematics,
  "Laws of Motion": lawsOfMotion,
  "Work, Energy, and Power": workEnergyPower,
  "Rotational Motion": [],
  "Gravitation": [],
  "Properties of Solids and Liquids": [],
  "Thermodynamics": [],
  "Kinetic Theory of Gases": [],
  "Oscillations and Waves": [],
  "Electrostatics": [],
  "Current Electricity": [],
  "Magnetic Effects of Current and Magnetism": [],
  "Electromagnetic Induction and Alternating Currents": [],
  "Electromagnetic Waves": [],
  "Optics": [],
  "Dual Nature of Matter and Radiation": [],
  "Atoms and Nuclei": [],
  "Electronic Devices": [],
  "Communication Systems": []
};