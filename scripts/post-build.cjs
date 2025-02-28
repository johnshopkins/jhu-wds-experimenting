const fs = require('fs');
const path = require('path');

// Changes the generated index.html document title to "Johns Hopkins University Web Design System"
try {

  console.log('Rewriting index.html document title.');

  const filePath = path.resolve(__dirname, '../storybook-static/index.html');

  const document = fs.readFileSync(filePath, 'utf8');
  const output = document.replace(/<title>.*<\/title>/, '<title>Johns Hopkins University Web Design System</title>');
  fs.writeFileSync(filePath, output);

  console.log('Title rewrite complete.');

} catch (error) {

  console.log('Title rewrite failed.');
  console.error(error);
  process.exit(1);

}
