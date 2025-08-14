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
            const input = "Hoffmann, Stefan A. and Diggans, James, Densmore, Douglas; Dai, Junbiao; Knight, Tom and Leproust, Emily , Boeke, Jef D. ,and Wheeler, Nicole, and Cai, Yizhi";
            const res: FullName[] = [
                {firstnames: "Stefan A.", lastname: "Hoffmann"},
                {firstnames: "James", lastname: "Diggans"},
                {firstnames: "Douglas", lastname: "Densmore"},
                {firstnames: "Junbiao", lastname: "Dai"},
                {firstnames: "Tom", lastname: "Knight"},
                {firstnames: "Emily", lastname: "Leproust"},
                {firstnames: "Jef D.", lastname: "Boeke"},
                {firstnames: "Nicole", lastname: "Wheeler"},
                {firstnames: "Yizhi", lastname: "Cai"}
            ]
            console.log(extractAllNames(input))
            expect(extractAllNames(input)).to.eql(res);

        });
    });
    describe('Test 3. - names and et al', function (){
        it('should return a list of correctly seperated names', function () {
            const input = "Yousef, H., Alhajj, M., Fakoya, AO, et al.";
            const res: FullName[] = [
                {firstnames: "H.", lastname: "Yousef"},
                {firstnames: "M.", lastname: "Alhajj"},
                {firstnames: "AO", lastname: "Fakoya"}
            ]
            console.log(extractAllNames(input))
            expect(extractAllNames(input)).to.eql(res);

        });
    });
    describe('Test 4. - only names with comma seperators', function (){
        it('should return a list of correctly seperated names', function () {
            const input = "Bielecka, Anna, Mohammadi, Ali Akbar";
            const res: FullName[] = [
                {firstnames: "Anna", lastname: "Bielecka"},
                {firstnames: "Ali Akbar", lastname: "Mohammadi"}
            ]
            console.log(extractAllNames(input))
            expect(extractAllNames(input)).to.eql(res);

        });
    });
    describe('Test 5. - only names with and', function (){
        it('should return a list of correctly seperated names', function () {
            const input = "Reisman, John J. and Rivington-Law, Betty and Corey, Mary and Marcotte, Jacques and Wannamaker, Eleanor and Harcourt, Dawn and Levison, Henry";
            const res: FullName[] = [
                {firstnames: "John J.", lastname: "Reisman"},
                {firstnames: "Betty", lastname: "Rivington-Law"},
                {firstnames: "Mary", lastname: "Corey"},
                {firstnames: "Jacques", lastname: "Marcotte"},
                {firstnames: "Eleanor", lastname: "Wannamaker"},
                {firstnames: "Dawn", lastname: "Harcourt"},
                {firstnames: "Henry", lastname: "Levison"}
            ]
            console.log(extractAllNames(input))
            expect(extractAllNames(input)).to.eql(res);

        });
    });
    describe('Test 6. - only names with and seperators', function (){
        it('should return a list of correctly seperated names', function () {
            const input = "Hoffmann, Stefan A. and Diggans, James and Densmore, Douglas and Dai, Junbiao and Knight, Tom and Leproust, Emily and Boeke, Jef D. and Wheeler, Nicole and Cai, Yizhi";
            const res: FullName[] = [
                {firstnames: "Stefan A.", lastname: "Hoffmann"},
                {firstnames: "James", lastname: "Diggans"},
                {firstnames: "Douglas", lastname: "Densmore"},
                {firstnames: "Junbiao", lastname: "Dai"},
                {firstnames: "Tom", lastname: "Knight"},
                {firstnames: "Emily", lastname: "Leproust"},
                {firstnames: "Jef D.", lastname: "Boeke"},
                {firstnames: "Nicole", lastname: "Wheeler"},
                {firstnames: "Yizhi", lastname: "Cai"}
            ]
            console.log(extractAllNames(input))
            expect(extractAllNames(input)).to.eql(res);

        });
    });
});