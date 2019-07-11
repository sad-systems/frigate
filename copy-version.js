/**
 * Sync project version for all child packages.
 * Script to auto change project version in all package.json files under the `dist` folder.
 */
const getProjectVersion = (require('get-project-version')).default;
const replace           = require('replace-in-file');

const currentProjectVersion = getProjectVersion({ template: '{{version}}' });

const options = {
  files: ['dist/**/package.json', 'yuidoc.json'],
  from: /"version":\s*"[^"]*"/,
  to: `"version": "${currentProjectVersion}"`,
};

const results = replace.sync(options);

console.log('current project version: ', currentProjectVersion);
console.log('replacement:', results);

