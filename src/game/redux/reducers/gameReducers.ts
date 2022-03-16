import {createSlice} from '@reduxjs/toolkit';

function convertMapPayload(payload: any): string[] {
  const rowList= payload.split('map:')[1].split('\n');
  return rowList.filter((item: string[]) => !!item.length);
}

interface GameState {
  map: string[];
  message: string,
}

const initialState: GameState = {
  map: [],
  message: '',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    init() {
    },
    createGame(state, action) {
    },
    getMap(state) {
    },
    setMap(state, action) {
      state.map = convertMapPayload(action.payload);
    },
    updateMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const {
  init,
  setMap,
  createGame,
  updateMessage,
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
