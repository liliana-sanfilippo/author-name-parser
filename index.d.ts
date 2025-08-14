export interface FullName {
    firstnames: string,
    lastname: string
}


export declare namespace AuthorNameParser {
    function extractAllNames(input: string): FullName[];
}