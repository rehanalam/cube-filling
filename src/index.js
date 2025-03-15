
const inputMockData = [
    [10, 10, 10, 2000],
    [10, 10, 10, 900],
    [4, 4, 8, 10, 10, 1],
    [5, 5, 5, 61, 7, 1],
    [5, 5, 6, 61, 4, 1],
    [1000, 1000, 1000, 0, 0, 0, 46501, 0, 2791, 631, 127, 19, 1],
    [1, 1, 9, 9, 1]
];

function generateCubesWithDim(cubes) {
    return cubes.map((cube, index) => {
        return { 
            quantity: cube, 
            size: 2 ** index 
        }
    });
}

function minCubeFilling(box, cubes) {
    const [boxL, boxW, boxH] = box;
    const cubesData = generateCubesWithDim(cubes);
    console.log(cubesData);


}

function computeInput(input) {
    const results = [];
    for(let row of input) {
        const box = row.slice(0,3);
        const cubes = row.slice(3);

        const result = minCubeFilling(box, cubes);
        result.push(result);
    }

    return results;
}

console.log(computeInput(inputMockData));