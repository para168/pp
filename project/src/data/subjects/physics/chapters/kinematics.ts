import { Chapter } from '../../../../types';

export const kinematics: Chapter[] = [
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
----------------------------------------

Position Vector:
    r = xî + yĵ

Path Length:
    s = Total distance traveled

Displacement:
    Δr = r₂ - r₁
    where:
    r₂ = Final position
    r₁ = Initial position`,
    variables: `r    = Position vector
x, y = Coordinates
î, ĵ = Unit vectors`
  },
  {
    id: "k3",
    title: "Speed and Velocity",
    description: "Speed is a scalar quantity (distance/time), while velocity is a vector quantity (displacement/time). Average velocity considers only initial and final positions, while instantaneous velocity describes motion at a specific moment.",
    formula: `Velocity Equations:
----------------------------------------

Average Speed:
    v_avg = Total Distance / Total Time

Average Velocity:
    v_avg = Δx/Δt
    
Instantaneous Velocity:
    v = lim(Δt→0) Δx/Δt`,
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
----------------------------------------

Average Acceleration:
    a_avg = Δv/Δt

Instantaneous Acceleration:
    a = lim(Δt→0) Δv/Δt

Tangential Acceleration:
    a_t = dv/dt

Normal Acceleration:
    a_n = v²/r`,
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
----------------------------------------

First Equation (Velocity-Time):
    v = u + at

Second Equation (Position-Time):
    s = ut + ½at²

Third Equation (Velocity-Position):
    v² = u² + 2as

Distance in nth second:
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
----------------------------------------

Position:
    r = xî + yĵ

Velocity:
    v = v_xî + v_yĵ

Acceleration:
    a = a_xî + a_yĵ`,
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
----------------------------------------

Time of Flight:
    T = (2u sinθ)/g

Maximum Height:
    H = (u² sin²θ)/(2g)

Range:
    R = (u² sin2θ)/g

Path Equation:
    y = (tanθ)x - (gx²)/(2u²cos²θ)`,
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
----------------------------------------

Angular Velocity:
    ω = Δθ/Δt

Linear Velocity:
    v = ωr

Centripetal Acceleration:
    a_c = v²/r = ω²r

Period:
    T = 2π/ω`,
    variables: `ω   = Angular velocity
v   = Linear velocity
r   = Radius
a_c = Centripetal acceleration
T   = Time period
θ   = Angular displacement`
  }
];