import type { UnitSection } from '../types/LearningTypes'
import { learningUnit1 } from './Unit1Data'
import { learningUnit2 } from './Unit2Data'
import { learningUnit3 as learningUnitNumbers } from './Unit3NewData'
import { learningUnit4 as learningUnitTime } from './Unit4NewData'
import { learningUnit5 as learningUnitFamily } from './Unit5NewData'
import { learningUnit6 } from './Unit6Data'

export const beginnerUnitSections: UnitSection[] = [
  {
    id: 'section_1',
    title: 'Premiers pas',
    description: 'Découvrez les bases du luxembourgeois',
    color: '#4ade80',
    order: 1,
    units: [learningUnit1, learningUnit2],
    pathLayout: [
      { x: 50, y: 20 },
      { x: 50, y: 40 }
    ]
  },
  {
    id: 'section_2',
    title: 'Nombres et temps',
    description: 'Maîtrisez les nombres, le temps et les jours',
    color: '#3b82f6',
    order: 2,
    units: [learningUnitNumbers, learningUnitTime],
    pathLayout: [
      { x: 30, y: 60 },
      { x: 70, y: 75 }
    ]
  },
  {
    id: 'section_3',
    title: 'Famille et relations',
    description: 'Parlez de votre famille avec les possessifs',
    color: '#8b5cf6',
    order: 3,
    units: [learningUnitFamily, learningUnit6],
    pathLayout: [
      { x: 40, y: 90 },
      { x: 60, y: 105 }
    ]
  }
]

export const beginnerUnits = beginnerUnitSections.flatMap(section => section.units)

export const getBeginnerUnitById = (unitId: string) =>
  beginnerUnits.find(unit => unit.id === unitId)
