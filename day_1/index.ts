
async function main() {
    const input: String = await fetch(`https://adventofcode.com/2024/day/1/input`, {
        headers: { cookie: `session=${process.env.SESSION_TOKEN}` }
    }).then((response: Response): Promise<string> => response.text())

    const { left, right } = input
        .trim()
        .split("\n")
        .reduce(
            (acc, curr) => {
                const [left, right] = curr.trim().split(/\s+/).map(Number);
                acc.left.push(left);
                acc.right.push(right);
                return acc;
         }, {left: [] as number[], right: [] as number[]})

    const leftSorted: number[] = left.sort((a, b) => a - b);
    const rightSorted: number[] = right.sort((a, b) => a - b);

    const distances = leftSorted.reduce((acc, curr, index) => acc + Math.abs(curr - rightSorted[index]), 0);

    console.log(distances);
}

await main();






