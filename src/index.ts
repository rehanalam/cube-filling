
interface ICube {
    quantity: number;
    size: number;
}

const inputMockData: (number[])[] = [
    [10, 10, 10, 2000],
    [10, 10, 10, 900],
    [4, 4, 8, 10, 10, 1],
    [5, 5, 5, 61, 7, 1],
    [5, 5, 6, 61, 4, 1],
    [1000, 1000, 1000, 0, 0, 0, 46501, 0, 2791, 631, 127, 19, 1],
    [1, 1, 9, 9, 1]
];

function computeCubeData(cubes: number[]): ICube[] {
    return cubes.map((cube, index) => {
        return { 
            quantity: cube, 
            size: 2 ** index 
        }
    });
}

function minCubeFilling(box: number[], cubes: number[]): number {
    const [boxL, boxW, boxH] = box;
    let boxVolume = boxL * boxH * boxW;
    const cubesData = computeCubeData(cubes).reverse();
    let cubesUsed = 0;

    for(const cube of cubesData) {
        const { quantity, size } = cube;
        const cubeVolume = size ** 3;

        let maxCubesToUse = Math.min(quantity, Math.floor(boxVolume / cubeVolume));
        cubesUsed += maxCubesToUse;
        boxVolume -= maxCubesToUse * cubeVolume;

        if(boxVolume <= 0) break;
    }

    return cubesUsed

}

function computeInput(input: number[][]): number[] {
    const results: number[] = [];
    for(let row of input) {
        const box = row.slice(0,3);
        const cubes = row.slice(3);

        const result = minCubeFilling(box, cubes);
        results.push(result);
    }

    return results;
}

console.log(computeInput(inputMockData));