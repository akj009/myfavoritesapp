import scoreComparator from "../config/ScoreComparator";

describe("Score Comparator", () => {
    it("should sort on score in descending order", () => {
        let inputArray = [{score: 1}, {score:2}, {score:5}];
        let expectedOutputArray = [{score:5}, {score:2}, {score:1}];
        inputArray.sort(scoreComparator);
        expect(inputArray).toEqual(expectedOutputArray);
    });
});