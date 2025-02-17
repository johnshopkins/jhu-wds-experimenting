import { palettes, webcolors } from '@johnshopkins/brand-colors';

const compiledPalettes = {
  primary: {},
  secondary: {},
  accent: {},
  grayscale: {},
  expanded: {},
};

// sort brand colors
webcolors.forEach(color => {
  const name = color.name.replace(' ', '');
  compiledPalettes[color.type][name] = `#${color.hex}`;
});

// compile expanded palettes
for (const [key, value] of Object.entries(palettes)) {
  const colors = {}
  for (const [grade, color] of Object.entries(value)) {
    colors[grade] = `#${color.hex}`;
  }
  compiledPalettes.expanded[key] = colors;
}

export default compiledPalettes;
