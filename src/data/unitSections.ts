import type { UnitSection } from '../types/LearningTypes'

// Import only the units that exist and work properly
import { learningUnit1 } from './Unit1Data'
import { learningUnit2 } from './Unit2NewData'
import { learningUnit3 } from './Unit3NewData'
import { learningUnit4 } from './Unit4NewData'
import { learningUnit5 } from './Unit5NewData'
import { learningUnit6 } from './Unit6Data'  // Use original version
import { learningUnit7New } from './Unit7NewData'
import { learningUnit8New } from './Unit8NewData'

export const beginnerUnitSections: UnitSection[] = [
  {
    id: 'section_1',
    title: 'Section 1 - Fondamentaux (Unités 1-8)',
    description: 'Découvrez les bases du luxembourgeois',
    color: '#4ade80',
    order: 1,
    units: [
      learningUnit1,
      learningUnit2,
      learningUnit3,
      learningUnit4,
      learningUnit5,
      learningUnit6,
      learningUnit7New,
      learningUnit8New
    ],
    pathLayout: [
      { x: 25, y: 20 }, { x: 75, y: 20 }, // Units 1-2
      { x: 25, y: 40 }, { x: 75, y: 40 }, // Units 3-4
      { x: 25, y: 60 }, { x: 75, y: 60 }, // Units 5-6
      { x: 25, y: 80 }, { x: 75, y: 80 }  // Units 7-8
    ]
  }
]

export const beginnerUnits = beginnerUnitSections.flatMap(section => section.units)

export const getBeginnerUnitById = (unitId: string) =>
  beginnerUnits.find(unit => unit.id === unitId)