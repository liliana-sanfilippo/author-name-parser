import { CharStreams, CommonTokenStream } from "antlr4ts";
import {AuthorsLexer} from "../src/parser/AuthorsLexer";
import { Authors} from "../src/parser/Authors";
import {expect} from "chai";
import {extractFullname, extractLastName, extractPrenames} from "../src/utils";



describe('test name parsing', function () {
    describe('Schmitt, Jonas', function () {
        it('should return correctly seperated name', function () {
            const input = "Schmitt, Jonas";
            expect(extractLastName(input)).to.equal("Schmitt");
            expect(extractPrenames(input)).to.equal("Jonas");
        });

    });
    describe('Schmitt, J.', function () {
        it('should return correctly seperated name', function () {
            const input = "Schmitt, J.";
            expect(extractLastName(input)).to.equal("Schmitt");
            expect(extractPrenames(input)).to.equal("J.");
        });
    });
    describe('Jonas Schmitt', function () {
        it('should return correctly seperated name', function () {
            const input = "Jonas Schmitt";
            expect(extractLastName(input)).to.equal("Schmitt");
            expect(extractPrenames(input)).to.equal("Jonas");
        });
    });
    describe('Jonas H. Schmitt', function () {
        it('should return correctly seperated name', function () {
            const input = "Jonas H. Schmitt";
            console.log(extractFullname(input));
            expect(extractLastName(input)).to.equal("Schmitt");
            expect(extractPrenames(input)).to.equal("Jonas H.");
        });
    });
    describe('J. H. Schmitt', function () {
        it('should return correctly seperated name', function () {
            const input = "J. H. Schmitt";
            expect(extractLastName(input)).to.equal("Schmitt");
            expect(extractPrenames(input)).to.equal("J. H.");
        });
    });
    describe('Jonas-Hans Schmitt', function () {
        it('should return correctly seperated name', function () {
            const input = "Jonas-Hans Schmitt";
            expect(extractLastName(input)).to.equal("Schmitt");
            expect(extractPrenames(input)).to.equal("Jonas-Hans");
        });
    });
    describe('Schmitt, J. H.', function () {
        it('should return correctly seperated name', function () {
            const input = "Schmitt, J. H.";
            expect(extractLastName(input)).to.equal("Schmitt");
            expect(extractPrenames(input)).to.equal("J. H.");
        });
    });
    describe('Schmitt, J.-H.', function () {
        it('should return correctly seperated name', function () {
            const input = "Schmitt, J.-H.";
            expect(extractLastName(input)).to.equal("Schmitt");
            expect(extractPrenames(input)).to.equal("J.-H.");
        });
    });
    describe('Anzalone, Andrew V.', function () {
        it('should return correctly seperated name', function () {
            const input = "Anzalone, Andrew V.";
            expect(extractLastName(input)).to.equal("Anzalone");
            expect(extractPrenames(input)).to.equal("Andrew V.");
        });
    });
    describe('Cadernos de Saúde Pública', function () {
        it('should return correctly seperated name', function () {
            const input = "Cadernos de Saúde Pública";
            expect(extractLastName(input)).to.equal("de Saúde Pública");
            expect(extractPrenames(input)).to.equal("Cadernos");
        });
    });
    describe('De Lisle, R. C.', function () {
        it('should return correctly seperated name', function () {
            const input = "De Lisle, R. C.";
            expect(extractLastName(input)).to.equal("De Lisle");
            expect(extractPrenames(input)).to.equal("R. C.");
        });
    });
    describe('Geller, David E', function () {
        it('should return correctly seperated name', function () {
            const input = " Geller, David E";
            expect(extractLastName(input)).to.equal("Geller");
            expect(extractPrenames(input)).to.equal("David E");
        });
    });
    describe('Juan Carlos Fernández de la Vega', function () {
        it('should return correctly seperated name', function () {
            const input = "Juan Carlos Fernández de la Vega";
            expect(extractLastName(input)).to.equal("de la Vega");
            expect(extractPrenames(input)).to.equal("Juan Carlos Fernández");
        });
    });
    // Maria João dos Santos e Silva
    describe('Maria João dos Santos e Silva', function () {
        it('should return correctly seperated name', function () {
            const input = "Maria João dos Santos e Silva";
            expect(extractLastName(input)).to.equal("dos Santos e Silva");
            expect(extractPrenames(input)).to.equal("Maria João");
        });
    });
    // Anna-Maria Müller-Schmidt
    describe('Anna-Maria Müller-Schmidt', function () {
        it('should return correctly seperated name', function () {
            const input = "Anna-Maria Müller-Schmidt";
            expect(extractLastName(input)).to.equal("Müller-Schmidt");
            expect(extractPrenames(input)).to.equal("Anna-Maria");
        });
    });
    describe('Ludwig van Beethoven', function () {
        it('should return correctly seperated name', function () {
            const input = "Ludwig van Beethoven";
            expect(extractLastName(input)).to.equal("van Beethoven");
            expect(extractPrenames(input)).to.equal("Ludwig");
        });
    });
    describe('Abdullah Ibn al-Muqaffa', function () {
        it('should return correctly seperated name', function () {
            const input = "Abdullah Ibn al-Muqaffa";
            expect(extractLastName(input)).to.equal("al-Muqaffa");
            expect(extractPrenames(input)).to.equal("Abdullah Ibn");
        });
    });
    describe('François D’Harcourt', function () {
        it('should return correctly seperated name', function () {
            const input = "François D’Harcourt";
            expect(extractLastName(input)).to.equal("D’Harcourt");
            expect(extractPrenames(input)).to.equal("François");
        });
    });
    describe('D’Harcourt, François', function () {
        it('should return correctly seperated name', function () {
            const input = "D’Harcourt, François";
            expect(extractLastName(input)).to.equal("D’Harcourt");
            expect(extractPrenames(input)).to.equal("François");
        });
    });
    describe('Minh Triết Nguyễn', function () {
        it('should return correctly seperated name', function () {
            const input = "Minh Triết Nguyễn";
            expect(extractLastName(input)).to.equal("Nguyễn");
            expect(extractPrenames(input)).to.equal("Minh Triết");
        });
    });
    describe('Nguyễn, Thi B.', function () {
        it('should return correctly seperated name', function () {
            const input = "Nguyễn, Thi B.";
            expect(extractLastName(input)).to.equal("Nguyễn");
            expect(extractPrenames(input)).to.equal("Thi B.");
        });
    });
    // Zär’a Yaqob
    describe('Zär’a Yaqob', function () {
        it('should return correctly seperated name', function () {
            const input = "Zär’a Yaqob";
            expect(extractLastName(input)).to.equal("Yaqob");
            expect(extractPrenames(input)).to.equal("Zär’a");
        });
    });
    // Abu al-Id Dudu
    describe('Abu al-Id Dudu', function () {
        it('should return correctly seperated name', function () {
            const input = "Abu al-Id Dudu";
            expect(extractLastName(input)).to.equal("Dudu");
            expect(extractPrenames(input)).to.equal("Abu al-Id");
        });
    });
    // Justine M’Poyo Kasa-Vubu
    describe('Justine M’Poyo Kasa-Vubu', function () {
        it('should return correctly seperated name', function () {
            const input = "Justine M’Poyo Kasa-Vubu";
            expect(extractLastName(input)).to.equal("M’Poyo Kasa-Vubu");
            expect(extractPrenames(input)).to.equal("Justine");
        });
    });
    // Tchicaya U Tam’si
    describe('Tchicaya Tam’si', function () {
        it('should return correctly seperated name', function () {
            const input = "Tchicaya Tam’si";
            expect(extractLastName(input)).to.equal("Tam’si");
            expect(extractPrenames(input)).to.equal("Tchicaya");
        });
    });
    // Kavidi Wivine N’Landu
    describe('Kavidi Wivine N’Landu', function () {
        it('should return correctly seperated name', function () {
            const input = "Kavidi Wivine N’Landu";
            expect(extractLastName(input)).to.equal("N’Landu");
            expect(extractPrenames(input)).to.equal("Kavidi Wivine");
        });
    });
    // John MacJohn
    describe('John MacJohn', function () {
        it('should return correctly seperated name', function () {
            const input = "John MacJohn";
            expect(extractLastName(input)).to.equal("MacJohn");
            expect(extractPrenames(input)).to.equal("John");
        });
    });
    // Mukoviszidose e.V.
    // National Center for Biotechnology Information (NCBI)

});



