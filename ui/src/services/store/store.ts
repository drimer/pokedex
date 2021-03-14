import { configureStore, DeepPartial, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import dashboardReducer from '../ducks/dashboard/dashboard'

const reducer = combineReducers({
    dashboard: dashboardReducer,
})

const middleware = getDefaultMiddleware<AppStoreState>()

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`)
  middleware.push(logger)
}

export type AppStoreState = ReturnType<typeof reducer>

export const createAppStore = (preloadedState?: DeepPartial<AppStoreState>) =>
  configureStore({
    reducer,
    middleware,
    preloadedState
  })

export type AppStore = ReturnType<typeof createAppStore>
export type AppDispatch = ReturnType<typeof createAppStore>['dispatch']