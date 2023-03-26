const fs = require("node:fs");
const path = require("node:path");
const child_process = require("node:child_process");
const util = require("node:util");

const exec = util.promisify(child_process.exec);

(async () => {
  const [outputForNode16, outputForNode18, outputForNode19] = await Promise.all(
    [
      exec("volta run --node=16 node ./bench.js").then(({ stdout }) => stdout),
      exec("volta run --node=18 node ./bench.js").then(({ stdout }) => stdout),
      exec("volta run --node=19 node ./bench.js").then(({ stdout }) => stdout),
    ]
  );
  const body = `# \`arr[arr.length - 1]\` VS \`arr.at(-1)\` performance

## Node.js v16

\`\`\`
${outputForNode16}
\`\`\`

## Node.js v18

\`\`\`
${outputForNode18}
\`\`\`

## Node.js v19

\`\`\`
${outputForNode19}
\`\`\`
`;

  fs.writeFileSync(path.join(process.cwd(), "README.md"), body);
})();
