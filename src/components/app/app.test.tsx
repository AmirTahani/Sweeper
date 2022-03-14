import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import App from './app';
import {mount} from 'enzyme';
import {cleanup, render} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from '../../store/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('<App />', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it('renders correctly and to match snapshot', () => {
    const initialState = {
      game: {
        map: [],
        message: '',
      },
    };
    const store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Initial render has Title and Play button', () => {
    const initialState = {
      game: {
        map: [],
        message: '',
      },
    };
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(wrapper.text().includes('Minesweeper')).toBe(true);
    expect(wrapper.text().includes('Play')).toBe(true);
  });
  it('Button should change to Play Again when there is a map', async () => {
    const initialState = {
      game: {
        map: [
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
        ],
        message: '',
      },
    };
    const store = mockStore(initialState);
    sagaMiddleware.run(watcherSaga);

    const wrapper = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(wrapper.getByText('Play again')).toBeTruthy();
  });
});
