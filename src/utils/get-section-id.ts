import { ISectionID } from "../store/useCurrentSection";

export default function getSectionID(id: ISectionID) {
    return `section-${id}`
}