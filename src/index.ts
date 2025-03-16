const fs = require('fs');
const path = require('path');

interface ICube {
    quantity: number;
    size: number;
}

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

    return boxVolume > 0 ? -1 : cubesUsed;

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
