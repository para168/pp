import { Chapter } from '../../../../types';

export const workEnergyPower: Chapter[] = [
  {
    id: "wep1",
    title: "Work",
    description: "Work is done when a force causes displacement of an object in the direction of the force.",
    formula: `Work Equations:

Work by Constant Force:
→ W = F·d cos θ

Work by Variable Force:
→ W = ∫F·dr

Work-Energy Theorem:
→ W_net = ΔKE`,
    variables: `W = Work done
F = Force
d = Displacement
θ = Angle between F and d
KE = Kinetic energy`
  },
  {
    id: "wep2",
    title: "Energy",
    description: "Energy is the capacity to do work. It exists in various forms including kinetic, potential, and mechanical energy.",
    formula: `Energy Equations:

Kinetic Energy:
→ KE = ½mv²

Gravitational Potential Energy:
→ PE = mgh

Elastic Potential Energy:
→ PE = ½kx²

Conservation of Energy:
→ E_initial = E_final`,
    variables: `m = Mass
v = Velocity
h = Height
k = Spring constant
x = Displacement`
  }
];