import {extractAllNames} from "./name_extractor";

export interface FullName {
    firstnames: string,
    lastname: string
}

export const allNames = (input: string): FullName[] => {
    return extractAllNames(input);
}