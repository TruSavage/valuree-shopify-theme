import fs from 'node:fs';
import path from 'node:path';

const root = new URL('../', import.meta.url).pathname;
const errors = [];

for (const directory of ['templates', 'config', 'locales']) {
  for (const file of fs.readdirSync(path.join(root, directory))) {
    if (!file.endsWith('.json')) continue;
    try { JSON.parse(fs.readFileSync(path.join(root, directory, file), 'utf8')); }
    catch (error) { errors.push(`${directory}/${file}: ${error.message}`); }
  }
}

for (const file of fs.readdirSync(path.join(root, 'sections'))) {
  if (!file.endsWith('.liquid')) continue;
  const source = fs.readFileSync(path.join(root, 'sections', file), 'utf8');
  const schema = source.match(/{% schema %}([\s\S]*?){% endschema %}/);
  if (!schema) errors.push(`sections/${file}: missing schema`);
  else {
    try { JSON.parse(schema[1]); }
    catch (error) { errors.push(`sections/${file}: ${error.message}`); }
  }
  if (/{%\s*section\s+/.test(source)) errors.push(`sections/${file}: nested section tag`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('Theme JSON and section schemas are valid.');
