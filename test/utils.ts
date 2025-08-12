import {ANTLRInputStream, CommonTokenStream} from "antlr4ts";
import {AuthorsLexer} from "../src/single_name_parser/base/AuthorsLexer";
import {Authors} from "../src/single_name_parser/base/Authors";
import {ExtractVisitor} from "../src/single_name_parser/core/name_extractor";

export function extractFullname(input: string): string {
    const inputStream = new ANTLRInputStream(input);
    const lexer = new AuthorsLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const tokens = tokenStream.getTokens();
    const parser = new Authors(tokenStream);
    return  parser.fullname().toStringTree(); // 👈 Top-Level-Regel
}

export function extractLastName(input: string): string {
    const inputStream = new ANTLRInputStream(input);
    const lexer = new AuthorsLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new Authors(tokenStream);
    const tree = parser.fullname(); // 👈 Top-Level-Regel
    const extractor = new ExtractVisitor();
    return extractor.visitLastname(tree.lastname()!);
}

export function extractPrenames(input: string): string {
    const inputStream = new ANTLRInputStream(input);
    const lexer = new AuthorsLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new Authors(tokenStream);
    const tree = parser.fullname(); // 👈 Top-Level-Regel
    const extractor = new ExtractVisitor();
    return extractor.visitPrename(tree.prename()!);
}
