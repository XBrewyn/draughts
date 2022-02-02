/* eslint-disable no-unused-vars */
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

enum Option {
  PLAY_OFFLINE = 'PLAY OFFLINE',
  ONLINE = 'ONLINE',
  VS_CPU = 'VS CPU',
  AUTHOR = 'AUTHOR',
  EXIT = 'EXIT',
  CREATE_ROOM = 'CREATE ROOM',
  BACK = 'BACK',
  JOIN_ROOM = 'JOIN ROOM'
}

export {
  Color,
  ColumnPosition,
  Icon,
  Option
}
