export default {
  title: 'Components/Heading',
  tags: ['autodocs'],
};

const getExport = (level) => {
  
  return {
    render: (args) => {
      const heading = document.createElement(`h${level}`);
      heading.innerText = args.label;

      return heading;
    },
    args: {
      label: `Heading ${level}`
    },
  }

}

export const LevelOne = getExport(1);
export const LevelTwo = getExport(2);
export const LevelThree = getExport(3);
export const LevelFour = getExport(4);
export const LevelFive = getExport(5);
export const LevelSix = getExport(6);
