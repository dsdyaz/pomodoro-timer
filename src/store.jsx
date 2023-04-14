import React from "react"
import { Provider } from "react-redux"
import propTypes from "prop-types"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { reducer as timerReducer } from "./modules/timer"

export const rootReducer = combineReducers({
  timer: timerReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export function Store(props) {
  const { children } = props
  return <Provider store={store}>{children}</Provider>
}

Store.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
}
