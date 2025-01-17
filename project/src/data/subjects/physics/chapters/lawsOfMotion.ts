import { Chapter } from '../../../../types';

export const lawsOfMotion: Chapter[] = [
  {
    id: "nl1",
    title: "Introduction to Newton's Laws of Motion",
    description: "Newton's Laws of Motion describe the relationship between the forces acting on a body and its motion. These laws are the foundation of classical mechanics.",
    formula: null,
    variables: null
  },
  {
    id: "nl2",
    title: "Newton's First Law (Law of Inertia)",
    description: "A body remains in its state of rest or uniform motion in a straight line unless acted upon by an external force. This law defines inertia, the tendency of an object to resist changes in its state of motion.",
    formula: null,
    variables: null
  },
  {
    id: "nl3",
    title: "Newton's Second Law of Motion",
    description: "The rate of change of momentum of a body is directly proportional to the external force applied and occurs in the direction of the force.",
    formula: `Force and Momentum:
----------------------------------------

Force:
    F = dp/dt

Momentum:
    p = mv

For constant mass:
    F = ma`,
    variables: `F = Force (N)
p = Momentum
m = Mass (kg)
a = Acceleration (m/s²)`
  },
  {
    id: "nl4",
    title: "Newton's Third Law of Motion",
    description: "For every action, there is an equal and opposite reaction. This means that forces always occur in pairs, with one force acting on each interacting body.",
    formula: null,
    variables: null
  },
  {
    id: "nl5",
    title: "Free-Body Diagrams (FBDs)",
    description: "A free-body diagram represents all external forces acting on a body. It is used to analyze the forces and solve problems in mechanics.",
    formula: null,
    variables: null
  },
  {
    id: "nl6",
    title: "Friction",
    description: "Friction is the resistive force opposing relative motion between two surfaces in contact. It depends on the nature of the surfaces and the normal force.",
    formula: `Frictional Forces:
----------------------------------------

Static Friction:
    f_s ≤ μ_s N

Kinetic Friction:
    f_k = μ_k N`,
    variables: `f_s = Static friction
f_k = Kinetic friction
μ_s = Coefficient of static friction
μ_k = Coefficient of kinetic friction
N = Normal force`
  },
  {
    id: "nl7",
    title: "Circular Motion and Centripetal Force",
    description: "In circular motion, a centripetal force acts toward the center of the circle, keeping the body in its curved path.",
    formula: `Centripetal Force:
----------------------------------------
 
Force:
    F_c = mv² / r`,
    variables: `F_c = Centripetal force
m = Mass
v = Velocity
r = Radius of the circular path`
  },
  {
    id: "nl8",
    title: "Applications of Newton's Laws",
    description: "Applications include analyzing motion on an inclined plane, pulley systems, and problems involving elevators.",
    formula: `Inclined Plane:
----------------------------------------

Normal Force:
    N = mg cosθ

Parallel Force:
    F_parallel = mg sinθ`,
    variables: `N = Normal force
F_parallel = Parallel component of force
m = Mass
g = Acceleration due to gravity
θ = Angle of the incline`
  },
  {
    id: "nl9",
    title: "Impulse and Momentum",
    description: "Impulse is the product of force and the time over which it acts. It is equal to the change in momentum of the object.",
    formula: `Impulse-Momentum Relation:
----------------------------------------

Impulse:
    J = FΔt = Δp`,
    variables: `J = Impulse
F = Force
Δt = Time interval
Δp = Change in momentum`
  }
];
