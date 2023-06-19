import { describe, it, expect, beforeAll } from '@jest/globals'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

let globalDatabase: any = {}

beforeAll(() => {
  globalDatabase = {}
  const cntReducer = (state = {}, action: any) => {
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
  const reducer = combineReducers({ cntReducer })
  const store = configureStore({
    reducer,
  })
  console.log('store :>> ', store)
  globalDatabase.store = store
  console.log('globalDatabase :>> ', globalDatabase)
})

describe('redux setup', () => {
  it('dispatch add1', () => {
    console.log('store :>> ', globalDatabase.store)
    // globalDatabase.store.dispatch({
    //   type: 'count/add1',
    // })
    // expect(globalDatabase.store.count).toBe(2)
  })

  // it('create store', () => {
  //   const rootReducer = combineReducers({ cntReducer })
  //   console.log('rootReducer :>> ', JSON.stringify(rootReducer))
  // })
})
