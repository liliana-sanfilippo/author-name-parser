require('ts-node').register({
  transpileOnly: true,
  files: true,
  compilerOptions: { module: 'CommonJS' }
});

const Mocha = require('mocha');
const path = require('path');
const fs = require('fs');

function collectTests(dir) {
  const results = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results.push(...collectTests(full));
    } else if (stat.isFile() && full.endsWith('.test.ts')) {
      results.push(full);
    }
  }
  return results;
}

const mocha = new Mocha({
  extension: ['ts'],
});

const testDir = path.resolve(__dirname, 'test');
const files = collectTests(testDir);
files.forEach(f => mocha.addFile(f));

mocha.run(failures => {
  process.exitCode = failures ? 1 : 0;
});
