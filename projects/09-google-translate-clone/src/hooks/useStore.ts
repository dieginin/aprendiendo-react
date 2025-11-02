import type { Action, FromLanguage, Language, State } from "../types"

import { AUTO_LANGUAGE } from "../consts"
import { useReducer } from "react"

const initialState: State = {
  fromLanguage: AUTO_LANGUAGE,
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
}

function reducer(state: State, action: Action) {
  const { type } = action

  if (type === "SWAP_LANGUAGES") {
    if (state.fromLanguage === AUTO_LANGUAGE) return state

    const loading = state.fromText.trim() !== ""

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
      result: "",
      loading,
    }
  }

  if (type === "SET_FROM_LANGUAGE") {
    if (state.fromLanguage === action.payload) return state

    const loading = state.fromText.trim() !== ""

    return {
      ...state,
      fromLanguage: action.payload,
      result: "",
      loading,
    }
  }

  if (type === "SET_TO_LANGUAGE") {
    if (state.toLanguage === action.payload) return state

    const loading = state.fromText.trim() !== ""

    return {
      ...state,
      toLanguage: action.payload,
      result: "",
      loading,
    }
  }

  if (type === "SET_FROM_TEXT") {
    const loading = action.payload.trim() !== ""

    return {
      ...state,
      fromText: action.payload,
      result: "",
      loading,
    }
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      result: action.payload,
      loading: false,
    }
  }

  return state
}
export default function useStore() {
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState)

  const swapLanguages = () => dispatch({ type: "SWAP_LANGUAGES" })

  const setFromLanguage = (payload: FromLanguage) =>
    dispatch({ type: "SET_FROM_LANGUAGE", payload })

  const setToLanguage = (payload: Language) =>
    dispatch({ type: "SET_TO_LANGUAGE", payload })

  const setFromText = (payload: string) =>
    dispatch({ type: "SET_FROM_TEXT", payload })

  const setResult = (payload: string) =>
    dispatch({ type: "SET_RESULT", payload })

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    swapLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  }
}
