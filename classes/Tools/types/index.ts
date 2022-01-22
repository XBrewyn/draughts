type typeFormatPosition = {
  column: number,
  row: number
}

type typeMenuOption = [
  {
    name: string,
    display: () => void
  },
  {
    name: string,
    display: () => void
  },
  {
    name: string,
    display: () => void
  },
  {
    name: string,
    display: () => void
  },
  {
    name: string,
    display: (exit: any) => void
  }
]

type typeEat = {
  canEat: boolean;
  targetPos: string;
};

export {
  typeFormatPosition,
  typeMenuOption,
  typeEat
}
