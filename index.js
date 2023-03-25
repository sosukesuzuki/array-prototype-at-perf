const fs = require("node:fs");
const path = require("node:path");
const child_process = require("node:child_process");

const outputForNode16 = child_process
  .execSync("volta run --node=16 node ./index.js", {
    cwd: path.join(process.cwd(), "node16"),
  })
  .toString();

const outputForNode18 = child_process
  .execSync("volta run --node=18 node ./index.js", {
    cwd: path.join(process.cwd(), "node18"),
  })
  .toString();

const outputForNode19 = child_process
  .execSync(`volta run --node=19 node ./index.js`, {
    cwd: path.join(process.cwd(), "node19"),
  })
  .toString();

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
