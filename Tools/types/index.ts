type typeFormatPosition = {
  column: number,
  row: number
}

type typeOption = [
  {
    name: string,
    display: (exit: (status: void) => void) => void,
    subMenu: [],
    canBack: boolean
  }
]

type typeEat = {
  canEat: boolean;
  targetPos: string;
}

export {
  typeFormatPosition,
  typeOption,
  typeEat
}
