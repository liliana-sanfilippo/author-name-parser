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
            expect(extractLastName(input)).to.equal("Anzalone");
            expect(extractPrenames(input)).to.equal("Andrew V");
        });
    });
    describe('Cadernos de Saúde Pública', function () {
        it('should return a correct JSON object', function () {
            const input = "Cadernos de Saúde Pública";
            expect(extractLastName(input)).to.equal("de Saúde Pública");
            expect(extractPrenames(input)).to.equal("Cadernos");
        });
    });
    describe('De Lisle, R. C.', function () {
        it('should return a correct JSON object', function () {
            const input = "De Lisle, R. C.";
            expect(extractLastName(input)).to.equal("De Lisle");
            expect(extractPrenames(input)).to.equal("R. C.");
        });
    });
    describe('Geller, David E', function () {
        it('should return a correct JSON object', function () {
            const input = " Geller, David E";
            expect(extractLastName(input)).to.equal("Geller");
            expect(extractPrenames(input)).to.equal("David E");
        });
    });


    // Mukoviszidose e.V.
    // National Center for Biotechnology Information (NCBI)

});



