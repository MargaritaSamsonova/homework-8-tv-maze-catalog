import { createStore, compose, applyMiddleware  } from 'redux';
import rootReducer from './reducers';
import { searchMiddleware } from "./middlewares/searchMiddleware";
import { showMiddleware } from "./middlewares/showMiddleware";

const getStore = () => {
    return createStore(rootReducer, compose(
        applyMiddleware(searchMiddleware),
        applyMiddleware(showMiddleware)
    ))
}

export default getStore;
