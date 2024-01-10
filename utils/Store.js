'use client'
import { useReducer, createContext } from 'react'

export const Store = createContext()

const initialState = {
	cart: {
		cartItems: []
	}
}
//Funcion reductora

function reducer(state, action) {}

export function StoreProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState)
	const value = {
		state,
		dispatch
	}
	return <Store.Provider value={value}></Store.Provider>
}
