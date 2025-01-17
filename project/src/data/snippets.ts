export const snippets = [
  {
    id: '1',
    subject: 'physics',
    chapter: 'Kinematics',
    title: 'Velocity and Acceleration',
    description: 'Velocity is the rate of change of position with respect to time, while acceleration is the rate of change of velocity with time.',
    formula: 'v = u + at',
    variables: 'v: final velocity, u: initial velocity, a: acceleration, t: time'
  },
  {
    id: '2',
    subject: 'chemistry',
    chapter: 'Chemical Bonding',
    title: 'Ionic Bonds',
    description: 'Ionic bonds form when electrons are transferred from a metal to a non-metal, resulting in oppositely charged ions that attract each other.',
    formula: 'Na + Cl → Na+ + Cl- → NaCl',
    variables: 'Na: Sodium atom, Cl: Chlorine atom, Na+: Sodium ion, Cl-: Chloride ion'
  },
  {
    id: '3',
    subject: 'mathematics',
    chapter: 'Calculus',
    title: 'Derivative Rules',
    description: 'The power rule is a fundamental rule for finding derivatives of polynomial functions.',
    formula: 'd/dx(xⁿ) = n·xⁿ⁻¹',
    variables: 'n: power, x: variable'
  }
] as const;