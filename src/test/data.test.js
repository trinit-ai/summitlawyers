import { describe, it, expect } from 'vitest'
import { ATTORNEYS, PRACTICE_AREAS, PRACTICE_DETAIL, getAttorney, getPracticeArea } from '../data/firm'

describe('firm data integrity', () => {
  it('every attorney has required fields', () => {
    for (const a of ATTORNEYS) {
      expect(a.slug, `${a.name} slug`).toBeTruthy()
      expect(a.name).toBeTruthy()
      expect(a.initials).toBeTruthy()
      expect(a.role).toBeTruthy()
      expect(['partner', 'counsel']).toContain(a.tier)
    }
  })

  it('attorney slugs are unique', () => {
    const slugs = ATTORNEYS.map(a => a.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('every practice area has required fields', () => {
    for (const p of PRACTICE_AREAS) {
      expect(p.slug).toBeTruthy()
      expect(p.name).toBeTruthy()
      expect(p.desc).toBeTruthy()
      expect(p.numeral).toBeTruthy()
    }
  })

  it('practice slugs are unique', () => {
    const slugs = PRACTICE_AREAS.map(p => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('every PRACTICE_DETAIL key maps to a real practice area', () => {
    for (const slug of Object.keys(PRACTICE_DETAIL)) {
      expect(getPracticeArea(slug), `${slug} should exist in PRACTICE_AREAS`).toBeDefined()
    }
  })

  it('every attorneyId in PRACTICE_DETAIL maps to a real attorney', () => {
    for (const [slug, detail] of Object.entries(PRACTICE_DETAIL)) {
      for (const id of detail.attorneyIds || []) {
        expect(getAttorney(id), `${slug} → ${id} not found`).toBeDefined()
      }
    }
  })

  it('every practiceSlug on attorneys maps to a real practice', () => {
    for (const a of ATTORNEYS) {
      for (const slug of a.practiceSlugs || []) {
        expect(getPracticeArea(slug), `${a.name} → ${slug} not found`).toBeDefined()
      }
    }
  })

  it('there are 14 practice areas', () => {
    expect(PRACTICE_AREAS.length).toBe(14)
  })

  it('there are 8 attorneys', () => {
    expect(ATTORNEYS.length).toBe(8)
  })
})
