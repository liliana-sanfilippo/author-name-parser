import {ANTLRInputStream, CommonTokenStream} from "antlr4ts";
import {AuthorsLexer} from "./parser/AuthorsLexer";
import {Authors} from "./parser/Authors";
import {ExtractVisitor} from "./extractor";

export function extractFullname(input: string): string {
    const inputStream = new ANTLRInputStream(input);
    const lexer = new AuthorsLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const tokens = tokenStream.getTokens();
    for (const t of tokens) {
        const tokenName = AuthorsLexer._SYMBOLIC_NAMES[t.type];
        console.log(`Token: '${t.text}' Type: ${tokenName}`);
    }
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
