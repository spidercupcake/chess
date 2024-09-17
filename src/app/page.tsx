import React from "react";

const ChessBoard: React.FC = () => {
  const boardSize = 8; // 8x8 chessboard

  const createGrid = () => {
    let squares = [];
    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        const isBlack = (row + col) % 2 === 1;
        squares.push(
          <div
            key={`${row}-${col}`}
            className={`w-24 h-24 ${isBlack ? "bg-gray-700" : "bg-gray-200"}`}
          />
        );
      }
    }
    return squares;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <div className="grid grid-cols-8 gap-0 border-4 border-gray-800 shadow-lg">
        {createGrid()}
      </div>
    </div>
  );
};

export default ChessBoard;
