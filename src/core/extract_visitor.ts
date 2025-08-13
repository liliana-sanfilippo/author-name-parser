import {AllnamesContext, FullnameContext, LastnameContext, PrenameContext} from "../base/Authors";
import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import {AuthorsVisitor} from "../base/AuthorsVisitor";
import {FullName} from "./type";

/**
 * Class to extract the first and the last names out of the parse trees made by ANTLR4ts.
 *
 * @author Liliana Sanfilippo
 */
export class ExtractVisitor extends  AbstractParseTreeVisitor<any> implements AuthorsVisitor<any>{
    /**
     * Default result required by AbstractParseTreeVisitor.
     * This is returned when no specific visit method applies.
     *
     * @protected
     * @returns An empty object by default
     */
    protected defaultResult() {
        return {};
    }
    /**
     * Extracting and parsing the full last name(s) including particles.
     * @param ctx the name parse tree
     */
    visitLastname(ctx: LastnameContext): string {
        let res = "";
        if (ctx.particles()){
            res += ctx.particles()?.text.toString();
        }
        res += ctx.WORD().map(w => w.text).join(" ");
        return res;
    }

    /**
     * Extracting and parsing the full first and middle name(s).
     * @param ctx the name parse tree
     */
    visitPrename(ctx: PrenameContext): string {
        return ctx.onename().map(w => w.text).join(" ");
    }

    visitFullname(ctx: FullnameContext): FullName {
        let firstnames: string = this.visitPrename(ctx.prename()!);
        let lastnames: string = this.visitLastname(ctx.lastname()!)
        return {firstnames: firstnames, lastname: lastnames}
    }

    visitAllnames(ctx: AllnamesContext): Array<FullName> {
        let res: Array<FullName> = [];
        ctx.fullname().forEach(
            (elem) => {
                res.push(this.visitFullname(elem))
            }
        )
        return res;
    }
}




