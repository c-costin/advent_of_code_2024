
async function main() {
    const input: String = await fetch(`https://adventofcode.com/2024/day/2/input`, {
        headers: { cookie: `session=${process.env.SESSION_TOKEN}` }
    }).then((response: Response): Promise<string> => response.text())
    console.log(input)
}

await main()