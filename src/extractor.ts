import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import {AuthorsLexer} from "./parser/AuthorsLexer";
import {Authors, FullnameContext, LastnameContext, PrenameContext} from "./parser/Authors";
import {AuthorsVisitor} from "./parser/AuthorsVisitor";
import {ErrorNode} from 'antlr4ts/tree/ErrorNode';
import {ParseTree} from 'antlr4ts/tree/ParseTree';
import {RuleNode} from 'antlr4ts/tree/RuleNode';
import {TerminalNode} from 'antlr4ts/tree/TerminalNode';




export class ExtractVisitor implements AuthorsVisitor<string> {
    visitFullname?: ((ctx: FullnameContext) => string) | undefined;
    visit(tree: ParseTree): string {
        throw new Error('Method not implemented.');
    }
    visitChildren(node: RuleNode): string {
        throw new Error('Method not implemented.');
    }
    visitTerminal(node: TerminalNode): string {
        throw new Error('Method not implemented.');
    }
    visitErrorNode(node: ErrorNode): string {
        throw new Error('Method not implemented.');
    }
    visitLastname(ctx: LastnameContext): string {
        let res = "";
        if (ctx.particles()){
            res += ctx.particles()?.PARTICLE().toString() + " ";
        }
        res += ctx.WORD().map(w => w.text).join(" ");
        return res;
    }
    visitPrename(ctx: PrenameContext): string {
        return ctx.onename().map(w => w.text).join(" ");
    }

}




