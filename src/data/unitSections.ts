import type { UnitSection } from '../types/LearningTypes'

// Import only the units that exist and work properly
import { learningUnit1 } from './Unit1Data'
import { learningUnit2 } from './Unit2NewData'
import { learningUnit3 } from './Unit3NewData'
import { learningUnit4 } from './Unit4NewData'
import { learningUnit5 } from './Unit5NewData'
import { learningUnit6 } from './Unit6Data' // Use original version
import { learningUnit7New } from './Unit7NewData'
import { learningUnit8New } from './Unit8NewData'

// Import intermediate level units
import { learningUnit9 } from './Unit9Data'
import { learningUnit10 } from './Unit10Data'
import { learningUnit11 } from './Unit11Data'
import { learningUnit12 } from './Unit12Data'
import { learningUnit13 } from './Unit13Data'
import { learningUnit14 } from './Unit14Data'
import { learningUnit15 } from './Unit15Data'
import { learningUnit16 } from './Unit16Data'

// Import practical life units (Section 3)
import { learningUnit17 } from './Unit17Data'
import { learningUnit18 } from './Unit18Data'
import { learningUnit19 } from './Unit19Data'
import { learningUnit20 } from './Unit20Data'
import { learningUnit21 } from './Unit21Data'
import { learningUnit22 } from './Unit22Data'
import { learningUnit23 } from './Unit23Data'
import { learningUnit24 } from './Unit24Data'

export const beginnerUnitSections: UnitSection[] = [
  {
    id: 'section_1',
    title: 'Section 1 - Premiers pas au quotidien (Unités 1-8)',
    description:
      'Découvrez les salutations, les chiffres et les automatismes essentiels pour créer le contact en luxembourgeois.',
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
  },
  {
    id: 'section_2',
    title: 'Section 2 - Communication quotidienne (Unités 9-16)',
    description:
      'Affinez vos interactions : poser des questions, organiser vos déplacements et gérer les services du quotidien avec aisance.',
    color: '#3b82f6',
    order: 2,
    units: [
      learningUnit9,
      learningUnit10,
      learningUnit11,
      learningUnit12,
      learningUnit13,
      learningUnit14,
      learningUnit15,
      learningUnit16
    ],
    pathLayout: [
      { x: 25, y: 20 }, { x: 75, y: 20 }, // Units 9-10
      { x: 25, y: 40 }, { x: 75, y: 40 }, // Units 11-12
      { x: 25, y: 60 }, { x: 75, y: 60 }, // Units 13-14
      { x: 25, y: 80 }, { x: 75, y: 80 }  // Units 15-16
    ]
  },
  {
    id: 'section_3',
    title: 'Section 3 - Vie pratique et autonomie (Unités 17-24)',
    description:
      'Préparez-vous à vivre au Luxembourg : logement, santé et démarches concrètes pour gagner en autonomie (niveau A2).',
    color: '#f97316',
    order: 3,
    units: [
      learningUnit17,
      learningUnit18,
      learningUnit19,
      learningUnit20,
      learningUnit21,
      learningUnit22,
      learningUnit23,
      learningUnit24
    ],
    pathLayout: [
      { x: 25, y: 20 },
      { x: 75, y: 20 },
      { x: 25, y: 40 },
      { x: 75, y: 40 },
      { x: 25, y: 60 },
      { x: 75, y: 60 },
      { x: 25, y: 80 },
      { x: 75, y: 80 }
    ]
  }
]

export const beginnerUnits = beginnerUnitSections.flatMap(section => section.units)

export const getBeginnerUnitById = (unitId: string) =>
  beginnerUnits.find(unit => unit.id === unitId)
