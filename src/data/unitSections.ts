import type { UnitSection } from '../types/LearningTypes'

// Import new E-series units (E01-E16) based on YouTube curriculum
import { learningUnitE01 } from './UnitE01Data'
import { learningUnitE02 } from './UnitE02Data'
import { learningUnitE03 } from './UnitE03Data'
import { learningUnitE04 } from './UnitE04Data'
import { learningUnitE05 } from './UnitE05Data'
import { learningUnitE06 } from './UnitE06Data'
import { learningUnitE07 } from './UnitE07Data'
import { learningUnitE08 } from './UnitE08Data'
import { learningUnitE09 } from './UnitE09Data'
import { learningUnitE10 } from './UnitE10Data'
import { learningUnitE11 } from './UnitE11Data'
import { learningUnitE12 } from './UnitE12Data'
import { learningUnitE13 } from './UnitE13Data'
import { learningUnitE14 } from './UnitE14Data'
import { learningUnitE15 } from './UnitE15Data'
import { learningUnitE16 } from './UnitE16Data'

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
    title: 'Section 1 - Niveau A1 Complet (Unités E01-E16)',
    description:
      'Programme complet A1 basé sur les épisodes YouTube : de l\'alphabet aux conversations médicales. Maîtrisez les fondamentaux du luxembourgeois !',
    color: '#4ade80',
    order: 1,
    units: [
      learningUnitE01,  // D'Alphabet
      learningUnitE02,  // Sech virstellen
      learningUnitE03,  // D'Artikelen
      learningUnitE04,  // Froewierder & Nee/Net
      learningUnitE05,  // Hunn & Sinn
      learningUnitE06,  // Wou wunns du?
      learningUnitE07,  // Exercicen 1 (Review)
      learningUnitE08,  // Am Pfleegeberäich
      learningUnitE09,  // Vocabulaire quotidien
      learningUnitE10,  // Wéi al bass du?
      learningUnitE11,  // Telefonsnummer
      learningUnitE12,  // Famill a Haus
      learningUnitE13,  // Reegelméisseg Verben
      learningUnitE14,  // Méi Verben a Sätz
      learningUnitE15,  // Strukturen a Wieder
      learningUnitE16   // Beim Dokter (Graduation)
    ],
    pathLayout: [
      { x: 25, y: 10 }, { x: 75, y: 10 },  // Units E01-E02
      { x: 25, y: 20 }, { x: 75, y: 20 },  // Units E03-E04
      { x: 25, y: 30 }, { x: 75, y: 30 },  // Units E05-E06
      { x: 25, y: 40 }, { x: 75, y: 40 },  // Units E07-E08
      { x: 25, y: 50 }, { x: 75, y: 50 },  // Units E09-E10
      { x: 25, y: 60 }, { x: 75, y: 60 },  // Units E11-E12
      { x: 25, y: 70 }, { x: 75, y: 70 },  // Units E13-E14
      { x: 25, y: 90 }, { x: 75, y: 90 }   // Units E15-E16
    ]
  }
]

export const beginnerUnits = beginnerUnitSections.flatMap(section => section.units)

export const getBeginnerUnitById = (unitId: string) =>
  beginnerUnits.find(unit => unit.id === unitId)
