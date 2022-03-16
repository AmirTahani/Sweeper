import React, {
  useEffect, useMemo,
  useState,
} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import {SelectBox} from '../components';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  SelectChangeEvent,
  Paper,
} from '@mui/material';
import {
  createGame,
  init,
} from '../game/redux/reducers/gameReducers';
import {RootState} from '../store/store';
import {Game} from '../game/Game';
import {
  useAppStyles,
  lightTheme,
} from './appStyles';

function App() {
  const dispatch = useDispatch();
  const classes = useAppStyles();
  const [level, setLevel] = useState(1);
  const gameState = useSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(init());
  }, []);

  const onPlayGame = () => {
    dispatch(createGame(`new ${level}`));
  };

  const handleOnLevelChange = (event: SelectChangeEvent) => {
    const newLevel = Number(event?.target?.value);
    setLevel(newLevel);
  };

  const renderMessage = (message: string) => {
    if (message !== 'OK') {
      return message;
    }
    return '';
  };

  const selectBoxData = useMemo(() => {
    return [
      {value: "1", name: "1"},
      {value: "2", name: "2"},
      {value: "3", name: "3"},
      {value: "4", name: "4"},
    ];
  }, []);

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <div className={classes.layoutContainer}>
          <Paper className={classes.container}>
            <p className={classes.title}>Minesweeper</p>
            <div
              className={gameState.map.length <= 10
                ? `${classes.content} ${classes.smallContent}`
                : classes.content}
            >
              <Game gameMap={gameState.map} />
            </div>
            <div className={classes.footer}>
              <SelectBox
                label="Level"
                onChange={handleOnLevelChange}
                value={level.toString()}
                data={selectBoxData}
              />
              <Button
                onClick={onPlayGame}
                variant="contained"
                color="info"
                className={classes.play}
                data-testid="start-game-btn"
              >
                {gameState.map.length ? 'Play again' : 'Play'}
              </Button>
            </div>
          </Paper>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
