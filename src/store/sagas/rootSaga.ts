import {takeLatest} from 'redux-saga/effects';
import {handleCreateGame, watchGame} from '../actions/gameActions';
import {
  createGame,
  init,
} from '../reducers/gameReducers';

export function* watcherSaga() {
  yield takeLatest(init.type, watchGame);
  yield takeLatest(createGame.type, handleCreateGame);
}
