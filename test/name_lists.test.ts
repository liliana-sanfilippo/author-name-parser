import {expect} from "chai";
import {extractAllNames} from "../src/core/name_extractor";
import {FullName} from "../src/core/type";


describe('test for parsing lists of names', function () {
    describe('Test 1. - only names with lastname, firstname', function (){
        it('should return a list of correctly seperated names', function () {
            const input = "Southern, KW, Mérelle, MME, Dankert‐Roelse, JE, and Nagelkerke, A";
            const res: FullName[] = [
                { firstnames: 'KW', lastname: 'Southern' },
                { firstnames: 'MME', lastname: 'Mérelle' },
                { firstnames: 'JE', lastname: 'Dankert‐Roelse' },
                { firstnames: 'A', lastname: 'Nagelkerke' }
            ]
            console.log(extractAllNames(input))
            expect(extractAllNames(input)).to.eql(res);

        });
    });
    describe('Test 2. - only names with mixed seperators', function (){
        it('should return a list of correctly seperated names', function () {
            const input = "";
            const res: FullName[] = [

            ]
            console.log(extractAllNames(input))
            expect(extractAllNames(input)).to.eql(res);

        });
    });
    describe('Test 3. - names and et al', function (){
        it('should return a list of correctly seperated names', function () {
            const input = "";
            const res: FullName[] = [

            ]
            console.log(extractAllNames(input))
            expect(extractAllNames(input)).to.eql(res);

        });
    });
    describe('Test 4. - only names with comma seperators', function (){
        it('should return a list of correctly seperated names', function () {
            const input = "";
            const res: FullName[] = [

            ]
            console.log(extractAllNames(input))
            expect(extractAllNames(input)).to.eql(res);

        });
    });
    describe('Test 5. - only names with and', function (){
        it('should return a list of correctly seperated names', function () {
            const input = "";
            const res: FullName[] = [

            ]
            console.log(extractAllNames(input))
            expect(extractAllNames(input)).to.eql(res);

        });
    });
});