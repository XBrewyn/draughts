type defaultColor = {
  color: ''
}

type formatPosition = {
  column: number,
  row: number
}

type menuOptions = [
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
    display: () =>void
  },
  {
    name: string,
    display: (exit: any) => void
  }
]

export {
  defaultColor,
  formatPosition,
  menuOptions
}
