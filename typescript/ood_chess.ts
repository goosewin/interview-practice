class ChessGame {
  board: Board;
  players: Player[];
  currentPlayer: Player;
  movesList: Move[];
  status: GameStatus;

  playerMove(fromPosition: CellPosition, toPosition: CellPosition, piece: Piece): boolean {
    return false;
  }
  endGame(): boolean {
    return false;
  }

  private changeTurn() {
    // switches currentPlayer
  }
}

enum Color {
  BLACK,
  WHITE,
}

class Player {
  account: Account;
  color: Color;
  timeLeft: Time;
}

// @ts-ignore
class Account {
  username: string;
  password: string;

  name: string;
  email: string;
  phone: string;
}

class Time {
  minutes: number;
  seconds: number;
}

enum GameStatus {
  PAUSED,
  ACTIVE,
  TIE,
  BLACK_WIN,
  WHITE_WIN,
}

class Board {
  private board: Cell[][];

  resetBoard() { }
  updateBoard(move: Move) { }
}

class Cell {
  position: CellPosition;
  color: Color;
  piece: Piece;
}

class CellPosition {
  coordinateX: number;
  coordinateY: number;
}


class Move {
  player: Player;
  piece: Piece;
  killedPieces: Piece[];
  startPosition: CellPosition;
  endPosition: CellPosition;
}

abstract class Piece {
  color: Color;

  abstract move(from: CellPosition, to: CellPosition): boolean;
  abstract getPossibleMoves(from: CellPosition, to: CellPosition): Move[];
}

class Pawn extends Piece {
  move(from: CellPosition, to: CellPosition) { return false; }
  getPossibleMoves(from: CellPosition, to: CellPosition) { return []; }
}

// and other Piece extensions for different piece types...
