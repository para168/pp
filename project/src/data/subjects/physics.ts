import { Chapter } from '../../types';

export const physicsChapters: { [key: string]: Chapter[] } = {
  "Physics and Measurement": [
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

Length      = 1 meter (m)
Mass        = 1 kilogram (kg)
Time        = 1 second (s)
Current     = 1 ampere (A)
Temperature = 1 kelvin (K)
Amount      = 1 mole (mol)
Luminosity  = 1 candela (cd)`,
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

Force    = [MLT⁻²]
Energy   = [ML²T⁻²]
Power    = [ML²T⁻³]
Pressure = [ML⁻¹T⁻²]`,
      variables: `M = Mass dimension
L = Length dimension
T = Time dimension`
    },
    {
      id: "pm4",
      title: "Measurement Errors",
      description: "Errors in measurement can be systematic (consistent due to system flaws), random (unpredictable variations), or gross (due to mistakes). Accuracy refers to closeness to true value, while precision indicates consistency in repeated measurements.",
      formula: `Error Calculations:

Absolute Error   = |Measured - True|
Relative Error   = |Measured - True| / True
Percentage Error = |Measured - True| / True × 100%`,
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

Least Count     = Main Scale Division / Number of Divisions
Vernier Reading = Main Scale + (VC × LC)`,
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

Dot Product     = A⋅B = AB cos θ
Cross Product   = |A×B| = AB sin θ
Vector Addition = R = √(x₁ + x₂)² + (y₁ + y₂)²`,
      variables: `A, B = Vector magnitudes
θ    = Angle between vectors
R    = Resultant vector
x₁, x₂ = x components
y₁, y₂ = y components`
    }
  ],
  "Kinematics": [
    {
      id: "k1",
      title: "Introduction to Kinematics",
      description: "Kinematics is the branch of physics that describes the motion of objects without considering the causes of motion. It focuses on parameters like displacement, velocity, acceleration, and time.",
      formula: null,
      variables: null
    },
    {
      id: "k2",
      title: "Position, Path Length, and Displacement",
      description: "Position is the location of a particle relative to a reference point. Path length is the total distance covered, while displacement is the shortest distance between initial and final positions.",
      formula: `Basic Definitions:

Position Vector = r = xî + yĵ
Path Length     = Total distance traveled
Displacement    = Final Position - Initial Position`,
      variables: `r    = Position vector
x, y = Coordinates
î, ĵ = Unit vectors`
    },
    {
      id: "k3",
      title: "Speed and Velocity",
      description: "Speed is a scalar quantity (distance/time), while velocity is a vector quantity (displacement/time). Average velocity considers only initial and final positions, while instantaneous velocity describes motion at a specific moment.",
      formula: `Velocity Equations:

Average Speed          = Total Distance / Total Time
Average Velocity       = Δx/Δt
Instantaneous Velocity = lim(Δt→0) Δx/Δt`,
      variables: `Δx = Change in position
Δt = Change in time
v  = Velocity
s  = Speed`
    },
    {
      id: "k4",
      title: "Acceleration",
      description: "Acceleration is the rate of change of velocity with respect to time. It can be uniform (constant) or non-uniform (varying).",
      formula: `Acceleration Equations:

Average Acceleration       = Δv/Δt
Instantaneous Acceleration = lim(Δt→0) Δv/Δt
Tangential Acceleration   = dv/dt
Normal Acceleration       = v²/r`,
      variables: `a  = Acceleration
Δv = Change in velocity
Δt = Change in time
r  = Radius of curvature`
    },
    {
      id: "k5",
      title: "Equations of Motion",
      description: "These equations describe motion under constant acceleration in a straight line.",
      formula: `Motion Equations:

v  = u + at
s  = ut + ½at²
v² = u² + 2as
s_n = u + a(n - ½)`,
      variables: `v   = Final velocity
u   = Initial velocity
a   = Acceleration
t   = Time
s   = Displacement
s_n = Distance in nth second`
    },
    {
      id: "k6",
      title: "Two-Dimensional Motion",
      description: "Motion in a plane can be analyzed by treating horizontal and vertical components independently. Position, velocity, and acceleration are vector quantities.",
      formula: `Vector Equations:

Position     = r = xî + yĵ
Velocity     = v = v_xî + v_yĵ
Acceleration = a = a_xî + a_yĵ`,
      variables: `r = Position vector
v = Velocity vector
a = Acceleration vector
x, y = Components`
    },
    {
      id: "k7",
      title: "Projectile Motion",
      description: "A special case of two-dimensional motion under constant gravitational acceleration, where horizontal and vertical motions are independent.",
      formula: `Projectile Equations:

Time of Flight = T = (2u sinθ)/g
Maximum Height = H = (u² sin²θ)/(2g)
Range         = R = (u² sin2θ)/g
Path          = y = (tanθ)x - (gx²)/(2u²cos²θ)`,
      variables: `u = Initial velocity
θ = Angle of projection
g = Acceleration due to gravity
T = Time of flight
H = Maximum height
R = Range`
    },
    {
      id: "k8",
      title: "Uniform Circular Motion",
      description: "Motion in a circular path with constant speed. The direction of velocity changes continuously, resulting in centripetal acceleration.",
      formula: `Circular Motion Equations:

Angular Velocity         = ω = Δθ/Δt
Linear Velocity         = v = ωr
Centripetal Acceleration = a_c = v²/r = ω²r
Period                  = T = 2π/ω`,
      variables: `ω   = Angular velocity
v   = Linear velocity
r   = Radius
a_c = Centripetal acceleration
T   = Time period
θ   = Angular displacement`
    }
  ],
  "Laws of Motion": [],
  "Work, Energy, and Power": [],
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