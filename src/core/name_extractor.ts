import {ANTLRInputStream, CommonTokenStream} from "antlr4ts";
import {AuthorsLexer} from "../base/AuthorsLexer";
import {Authors} from "../base/Authors";
import {ExtractVisitor} from "./extract_visitor";
import {FullName} from "./type";

function createParser(input: string): Authors {
    const inputStream = new ANTLRInputStream(input);
    const lexer = new AuthorsLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    return new Authors(tokenStream);
}

export function extractLastName(input: string): string {
    const parser = createParser(input)
    const tree = parser.fullname();
    const extractor = new ExtractVisitor();
    return extractor.visitLastname(tree.lastname()!);
}

export function extractPrenames(input: string): string {
    const parser = createParser(input)
    const tree = parser.fullname();
    const extractor = new ExtractVisitor();
    return extractor.visitPrename(tree.prename()!);
}

export function extractAllNames(input: string): FullName[] {
    const parser = createParser(input)
    const extractor = new ExtractVisitor();
    return extractor.visitAllnames(parser.allnames()!);
}