import { Chapter } from '../../../../types';

export const physicsAndMeasurement: Chapter[] = [
  {
    id: "pm1",
    title: "Introduction to Physics",
    description: "Physics is the branch of science that deals with the fundamental principles governing the natural world. It relies on measurement as a foundation for describing physical quantities, connecting theoretical physics to real-world phenomena by quantifying physical properties.",
    formula: null,
    variables: null
  },
  {
    id: "pm2",
    title: "Physical Quantities and Units",
    description: "Physical quantities are measurable aspects of a physical system, classified into fundamental quantities (length, mass, time) and derived quantities (velocity, force). The SI system is the universal standard with seven base units.",
    formula: `Base SI Units:
----------------------------------------

Length:
    1 meter (m)

Mass:
    1 kilogram (kg)

Time:
    1 second (s)

Current:
    1 ampere (A)

Temperature:
    1 kelvin (K)

Amount:
    1 mole (mol)

Luminosity:
    1 candela (cd)`,
    variables: `m   = meter
kg  = kilogram
s   = second
A   = ampere
K   = kelvin
mol = mole
cd  = candela`
  },
  {
    id: "pm3",
    title: "Dimensional Analysis",
    description: "Dimensional analysis expresses physical quantities in terms of base quantities. It helps check equation correctness, derive relationships between quantities, and convert units between systems.",
    formula: `Common Dimensional Formulas:
----------------------------------------

Force:
    [MLT⁻²]

Energy:
    [ML²T⁻²]

Power:
    [ML²T⁻³]

Pressure:
    [ML⁻¹T⁻²]`,
    variables: `M = Mass dimension
L = Length dimension
T = Time dimension`
  },
  {
    id: "pm4",
    title: "Measurement Errors",
    description: "Errors in measurement can be systematic (consistent due to system flaws), random (unpredictable variations), or gross (due to mistakes). Accuracy refers to closeness to true value, while precision indicates consistency in repeated measurements.",
    formula: `Error Calculations:
----------------------------------------

Absolute Error:
    |Measured - True|

Relative Error:
    |Measured - True| / True

Percentage Error:
    |Measured - True| / True × 100%`,
    variables: `Measured = Measured value
True     = True value`
  },
  {
    id: "pm5",
    title: "Significant Figures",
    description: "Significant figures represent meaningful digits in measurements. Rules: all non-zero digits are significant, zeros between significant digits are significant, leading zeros are not significant, trailing decimal zeros are significant.",
    formula: null,
    variables: null
  },
  {
    id: "pm6",
    title: "Measurement Instruments",
    description: "Various instruments are used for precise measurements in physics. Common devices include Vernier calipers (0.1mm accuracy), screw gauge (0.01mm accuracy), physical balance (mass), and stopwatch (time intervals).",
    formula: `Instrument Calculations:
----------------------------------------

Least Count:
    Main Scale Division / Number of Divisions

Vernier Reading:
    Main Scale + (VC × LC)`,
    variables: `Main Scale Division = Smallest division on main scale
Number of Divisions = Divisions on vernier scale
VC = Vernier coincidence
LC = Least count`
  },
  {
    id: "pm7",
    title: "Scalars and Vectors",
    description: "Physical quantities are classified as scalars (magnitude only) or vectors (magnitude and direction). Vectors follow special rules for addition, subtraction, and multiplication.",
    formula: `Vector Operations:
----------------------------------------

Dot Product:
    A⋅B = AB cos θ

Cross Product:
    |A×B| = AB sin θ

Vector Addition:
    R = √(x₁ + x₂)² + (y₁ + y₂)²`,
    variables: `A, B = Vector magnitudes
θ    = Angle between vectors
R    = Resultant vector
x₁, x₂ = x components
y₁, y₂ = y components`
  }
];