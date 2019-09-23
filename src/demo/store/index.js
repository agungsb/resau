
import {
  initialState as paragraphInitialState,
  reducer as paragraphReducer,
} from './reducers/paragraph';
import {
  initialState as userInitialState,
  reducer as userReducer,
} from './reducers/user';

export default {
  initialState: {
    user: userInitialState,
    paragraph: paragraphInitialState,
  },
  reducers: {
    user: userReducer,
    paragraph: paragraphReducer,
  },
}