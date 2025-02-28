const fs = require('fs');

module.exports = (file, lines = []) => {
  fs.writeFile(file, lines.join('\n'), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('SUCCESS!');
  });
}; 
