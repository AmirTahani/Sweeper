import React from 'react';
import {GameClient} from '../utils/GameClient';
import {Button} from '@mui/material';
import {gameStyles} from './GameStyles';

interface Props {
  gameMap: string[];
}

export function Game({
                       gameMap,
                     }: Props) {
  const classes = gameStyles();

  const onCellClick = (y: number, x: number) => {
    GameClient.socket.send(`open ${x} ${y}`);
  };

  const getCellColor = (square: string) => {
    if (square === '□') {
      return 'info';
    }
    if (square === '*') {
      return 'error'
    }
    return 'success';
  }

  const renderMap = (gameMap: string[]) => {
    return gameMap.map((game: string, rowIndex: number) => {
      const squares = game.split('');
      const row = squares.map((square: string, columnIndex: number) => {
        const key = `square-${rowIndex}-${columnIndex}`;
        const testId = `square-${rowIndex}-${columnIndex}`;
        return (
          <Button
            variant="outlined"
            color={getCellColor(square)}
            onClick={() => onCellClick(rowIndex, columnIndex)}
            key={key}
            className={classes.cell}
            data-testid={testId}
          >
            <span className={classes.text}>{square !== '□' ? square : ''}</span>
          </Button>
        );
      });
      return (
        <div
          className={classes.row}
          key={`square-row-${rowIndex}`}>
          {row}
        </div>
      );
    });
  };

  if (!gameMap.length) {
    return (
      <p>Choose a level and click on Play</p>
    );
  }

  return (
    <>{renderMap(gameMap)}</>
  );
}
