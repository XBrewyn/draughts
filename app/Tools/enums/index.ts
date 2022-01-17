enum Color { 
  BLACK = 'BLACK', 
  WHITE = 'WHITE'
}

enum ColumnPosition { 
  a = 1, 
  b, 
  c, 
  d, 
  e, 
  f, 
  g, 
  h, 
  i, 
  j
}

enum Icon {
  BLACK = '⚫', 
  WHITE = '⚪'
}

enum Message {
  SUCCESS,
  INVALID_TURN,
  INVALID_POSITION,
  INVALID_MOVE
}

enum Option {
  PLAY_GAME = 'PLAY GAME',
  AUTHOR = 'AUTHOR',
  EXIT = 'EXIT'
}

export {
  Color,
  ColumnPosition,
  Icon,
  Message,
  Option,
}
