# Cube Filling Problem

This project solves the "Cube Filling Problem," where the goal is to determine the smallest number of cubes needed to completely fill a given box. The cubes come in different sizes, and the challenge is to pack them optimally.

## Problem Description

You are given a box with fixed dimensions and several types of cubes with different sizes and quantities. The task is to calculate the minimum number of cubes required to fill the box completely. If it is not possible to fill the box, the function will return -1.

The input consists of the box dimensions and the available cubes, and the output will be the smallest number of cubes that can fill the box.

## Installation

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/rehanalam/cube-filling.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd cube-filling
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

## Usage

To run the project:

1. **Prepare the input file** `problem.txt` with the box dimensions and cube quantities. The format should be:

   ```
   <box_length> <box_width> <box_height> <cube1_quantity> <cube2_quantity> ...
   ```

   For example:

   ```
   10 10 10 2000 1000 500
   5 5 5 100 200 150
   ```

2. **Run the project** with the following command:

   ```bash
   npm start
   ```

   This will read the data from the `problem.txt` file, compute the results for each box and cube set, and print the results to the console.


## Example

Given an input file `problem.txt`:

```
10 10 10 2000 1000 500
5 5 5 100 200 150
```

The output will be something like:

```
[2500, 450]
```

Where:
- 2500 cubes are used to fill the first box,
- 450 cubes are used to fill the second box.

