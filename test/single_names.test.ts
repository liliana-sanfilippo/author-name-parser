import { CharStreams, CommonTokenStream } from "antlr4ts";
import {AuthorsLexer} from "../src/parser/AuthorsLexer";
import { Authors} from "../src/parser/Authors";
import {expect} from "chai";
import {extractFullname, extractLastName, extractPrenames} from "../src/utils";



describe('test name parsing', function () {
    describe('Schmitt, Jonas', function () {
        it('should return a correct JSON object', function () {
            const input = "Schmitt, Jonas";
            expect(extractLastName(input)).to.equal("Schmitt");
            expect(extractPrenames(input)).to.equal("Jonas");
        });

    });
 describe('Schmitt, J.2', function () {
        it('should return a correct JSON object', function () {
            const input = "Schmitt, J.";
            const stream = CharStreams.fromString(input);
            const lexer = new AuthorsLexer(stream);
            const tokens = new CommonTokenStream(lexer);
            const parser = new Authors(tokens);
            const tree = parser.fullname();
            const name = tree.toStringTree(parser);
            expect(name).to.equal("(name (lastName Schmitt) , (firstAndMiddle (firstName J.)))");
        });

    });
    describe('Schmitt, J.', function () {
        it('should return a correct JSON object', function () {
            const input = "Schmitt, J.";
            expect(extractLastName(input)).to.equal("Schmitt");
            expect(extractPrenames(input)).to.equal("J.");
        });
    });
    describe('Jonas Schmitt', function () {
        it('should return a correct JSON object', function () {
            const input = "Jonas Schmitt";
            expect(extractLastName(input)).to.equal("Schmitt");
            expect(extractPrenames(input)).to.equal("Jonas");
        });
    });
    describe('Jonas H. Schmitt', function () {
        it('should return a correct JSON object', function () {
            const input = "Jonas H. Schmitt";
            console.log(extractFullname(input));
            expect(extractLastName(input)).to.equal("Schmitt");
            expect(extractPrenames(input)).to.equal("Jonas H.");
        });
    });
    describe('J. H. Schmitt', function () {
        it('should return a correct JSON object', function () {
            const input = "J. H. Schmitt";
            expect(extractLastName(input)).to.equal("Schmitt");
            expect(extractPrenames(input)).to.equal("J. H.");
        });
    });
    describe('Schmitt, J. H.', function () {
        it('should return a correct JSON object', function () {
            const input = "Schmitt, J. H.";
            expect(extractLastName(input)).to.equal("Schmitt");
            expect(extractPrenames(input)).to.equal("J. H.");
        });
    });
    describe('Schmitt, J.-H.', function () {
        it('should return a correct JSON object', function () {
            const input = "Schmitt, J.-H.";
            expect(extractLastName(input)).to.equal("Schmitt");
            expect(extractPrenames(input)).to.equal("J.-H.");
        });
    });
    describe('Anzalone, Andrew V.', function () {
        it('should return a correct JSON object', function () {
            const input = "Anzalone, Andrew V.";
            const stream = CharStreams.fromString(input);
            const lexer = new AuthorsLexer(stream);
            const tokens = new CommonTokenStream(lexer);
            const parser = new Authors(tokens);
            const tree = parser.fullname();
            const name = tree.toStringTree(parser);
            expect(name).to.equal("(name (lastName Anzalone) , (firstAndMiddle (firstName Andrew) V))");
        });
    });
    describe('Cadernos de Saúde Pública', function () {
        it('should return a correct JSON object', function () {
            const input = "Cadernos de Saúde Pública";
            const stream = CharStreams.fromString(input);
            const lexer = new AuthorsLexer(stream);
            const tokens = new CommonTokenStream(lexer);
            const parser = new Authors(tokens);
            const tree = parser.fullname();
            const name = tree.toStringTree(parser);
            expect(name).to.equal("(name (lastName de Saúde Pública) , (firstAndMiddle (firstName Cadernos) ))");
        });
    });
    describe('De Lisle, R. C.', function () {
        it('should return a correct JSON object', function () {
            const input = "De Lisle, R. C.";
            const stream = CharStreams.fromString(input);
            const lexer = new AuthorsLexer(stream);
            const tokens = new CommonTokenStream(lexer);
            const parser = new Authors(tokens);
            const tree = parser.fullname();
            const name = tree.toStringTree(parser);
            expect(name).to.equal("(name (lastName De Lisle) , (firstAndMiddle (firstName R)C))");
        });
    });
    describe('Geller, David E', function () {
        it('should return a correct JSON object', function () {
            const input = " Geller, David E";
            const stream = CharStreams.fromString(input);
            const lexer = new AuthorsLexer(stream);
            const tokens = new CommonTokenStream(lexer);
            const parser = new Authors(tokens);
            const tree = parser.fullname();
            const name = tree.toStringTree(parser);
            expect(name).to.equal("(name (lastName Geller) , (firstAndMiddle (firstName David)E))");
        });
    });


    // Mukoviszidose e.V.
    // National Center for Biotechnology Information (NCBI)

});



