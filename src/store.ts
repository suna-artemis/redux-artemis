import {
  configureStore,
  combineReducers,
  applyMiddleware,
  StoreEnhancer,
} from '@reduxjs/toolkit'

const cntReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'count/add1':
      return {
        ...state,
        cnt: (state.cnt ?? 0) + 1,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ cntReducer })
