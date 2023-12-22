import { create } from 'zustand'


export const Sections = {
    "me": "Me",
    "skills": "Skills",
    "projects": "Projects",
    "contact": "Contact",
    "testimonials": "Testimonials"
}

export type ISectionID = keyof typeof Sections 

type Store = {
    currentSection: ISectionID,
    setCurrentSection: (currentSection: ISectionID) => void
    getCurrentSectionName: (currentSection: ISectionID) => string
}
const useCurrentSection = create<Store>((set) => ({
    currentSection: Sections.me as "me", 
    setCurrentSection(currentSection) {
        set({ currentSection })
    },
    getCurrentSectionName(currentSection) {
        return Sections[currentSection]
    }
}))

export default useCurrentSection