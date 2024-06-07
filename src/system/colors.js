import { colors, palettes } from '@johnshopkins/brand-colors';

const compiledPalettes = {
  primary: {},
  secondary: {},
  tertiary: {},
  grayscale: {},
  expanded: {},
};

// sort brand colors
const brandColors = colors.get();
brandColors.forEach(color => {
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
