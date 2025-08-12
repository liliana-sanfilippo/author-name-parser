import {LastnameContext, PrenameContext} from "../base/Authors";

/**
 * Class to extract the first and the last names out of the parse trees made by ANTLR4ts.
 *
 * @author Liliana Sanfilippo
 */
export class ExtractVisitor {

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

}




