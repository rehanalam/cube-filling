const fs = require('fs');
const path = require('path');

interface ICube {
    quantity: number;
    size: number;
}

// Calculates cubes data with qunatity and size
function computeCubeData(cubes: number[]): ICube[] {
    return cubes.map((cube, index) => {
        return { 
            quantity: cube, 
            size: 2 ** index 
        }
    });
}

// Calculates the minimum number of cubes needed to fill a given box.
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

    return boxVolume > 0 ? -1 : cubesUsed;

}

function computeInput(input: number[][]): number[] {
    const results: number[] = [];
    for(let row of input) {
        const box = row.slice(0,3); // extract box dimensions
        const cubes = row.slice(3); // extract available cubes

        const result = minCubeFilling(box, cubes);
        results.push(result);
    }

    return results;
}

// Reads problem.txt and returns its content as a 2D array.
function readDataFromFile(filename: string): number[][] {
    const filePath = path.resolve(__dirname, filename);
    const data = fs.readFileSync(filePath, 'utf8');
    const lines: string[] = data.split('\n').map((line: string) => line.trim()).filter((line: string) => line !== '');
    const parsedData: number[][] = lines.map((line: string) => {
        return line.split(' ').map(Number);
    });
    return parsedData;
}


const data = readDataFromFile('problem.txt');
const results = computeInput(data);
console.log(results);
