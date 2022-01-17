# Draughts

> Draughts is played by two opponents, on opposite sides of the gameboard. One player has the dark pieces; the other has the light pieces. 
> Players alternate turns. A player may not move an opponent's piece. A move consists of moving a piece diagonally to an adjacent unoccupied square. 
> If the adjacent square contains an opponent's piece, and the square immediately beyond it is vacant, the piece may be captured (and removed from the game) by jumping over it.

> Only the dark squares of the checkered board are used. A piece may move only diagonally into an unoccupied square. When presented, capturing is mandatory in most official rules, although some rule variations make capturing optional.[3] In almost all variants, the player without pieces remaining, or who cannot move due to being blocked, loses the game.

 ![Node version](https://img.shields.io/badge/Node%20version->=v17.3.1-green)
 ![npm package version](https://img.shields.io/badge/npm%20package->=v8.3.0-green)

## Menu

                                       ┌────────────────────────────────┐
                                       │ MENU                           │
                                       ├────────────────────────────────┤
                                       │ Select option                  │
                                       │ ┌────────────────────────────┐ │
                                       │ │    ►  1. PLAY GAME         │ │
                                       │ │      2. AUTHOR             │ │
                                       │ │      3. EXIT               │ │
                                       │ └────────────────────────────┘ │
                                       ├────────────────────────────────┤
                                       │    SELECT: ◄ ►     EXIT: ESC   │
                                       └────────────────────────────────┘


## Play game

                               A     B     C     D     E     F     G     H      I     J
                            ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬──────┬──────┐
                         10 │     │ ⬤  │     │ ⬤  │     │ ⬤  │     │ ⬤  │      │  ⬤  │ 10
                            ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼──────┼──────┤
                          7 │  ⬤ │     │  ⬤ │     │  ⬤ │     │  ⬤ │     │  ⬤  │      │ 9
                            ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼──────┼──────┤
                          8 │     │  ⬤ │     │  ⬤ │     │  ⬤ │     │  ⬤ │      │  ⬤  │ 8
                            ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼──────┼──────┤
                          7 │  ⬤ │     │  ⬤ │     │  ⬤ │     │  ⬤ │     │  ⬤  │      │ 7
                            ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼──────┼──────┤
                          6 │     │ b6  │     │ d6  │     │ f6  │     │ h6  │      │  j6  │ 6 
                            ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼──────┼──────┤
                          5 │ a5  │     │  ⬤ │     │ e5  │     │ g5  │     │  i5  │      │ 5
                            ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼──────┼──────┤
                          4 │     │ b4  │     │ ⬤  │     │ ⬤  │     │ ⬤  │      │  ⬤  │ 4
                            ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼──────┼──────┤
                          3 │ ⬤  │     │  ⬤ │     │ ⬤  │     │  ⬤ │     │  ⬤  │      │ 3
                            ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼──────┼──────┤
                          2 │     │  ⬤ │     │  ⬤ │     │  ⬤ │     │  ⬤ │      │  ⬤  │ 2
                            ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼──────┼──────┤
                          1 │  ⬤ │     │  ⬤ │     │  ⬤ │     │  ⬤ │     │  ⬤  │      │ 1
                            └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴──────┴──────┘
                               A     B     C     D     E     F     G     H      I      J

                            Turn: ⚫

                            Status: ⚪ b4 to a5 ✅

                            [piecePos, selectPos]: b4 to c5
                               
 ## Author
                                        
                                                    __ 
                                                   (  )
                                                    ||
                                                  []||  ,----.___
                                                  __||_/___      '.
                                                 / O||    /|       )
                                                /   ""   / /   =._/
                                               /________/ /
                                               |________|/

                                          Name: Brewyn, Espinal
                                          Email: Brewyn@outlook.com

                                          Back: [ESC]
                                          
                                   
 ## How to run it?
⬤ Open terminal: `cd draughts` <br/>
⬤ Install dependencies: `npm install` <br/>
⬤ Run the project: `npm start`

                                       
## Folder Structure

  ```bash
  draughts
  └─── app
       ├── Board
       ├── Graph
       ├── interfaces
       ├── Menu
       ├── Piece
       └── Tools
       └── index.js
   ```
