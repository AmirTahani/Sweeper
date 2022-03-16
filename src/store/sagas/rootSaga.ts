import {takeLatest} from 'redux-saga/effects';
import {handleCreateGame, watchGame} from '../../game/redux/actions/gameActions';
import {
  createGame,
  init,
} from '../../game/redux/reducers/gameReducers';

export function* watcherSaga() {
  yield takeLatest(init.type, watchGame);
  yield takeLatest(createGame.type, handleCreateGame);
}
