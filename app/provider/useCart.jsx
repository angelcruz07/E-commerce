'use client'
import { create } from 'zustand'

const useCart = create((set) => ({
	products: [],
	cartItem: [],
	totalPrice: 0,
	addToCart(productId) {
		set((state) => {
			const product = state.products.find((item) => item.id === productId)

			if (product) {
				const cartItem = state.cartItem.find(
					(cartItem) => cartItem.id === productId
				)
				return {
					cartItem: state.cartItem.map((cartItem) =>
						cartItem.id === productId
							? { ...cartItem, quantity: cartItem.quantity + 1 }
							: cartItem
					),
					totalPrice: state.totalPrice + product.precio
				}
			} else {
				return {
					cartItem: [...state.cartItem, { ...product, quantity: 1 }],
					totalPrice: state.totalPrice + product.precio
				}
			}
		})
	},
	removeFromCart(productId) {
		set((state) => {
			const itemIndex = state.cartItem.findIndex(
				(cartItem) => cartItem.id === productId
			)

			if (itemIndex !== -1) {
				const updatedCartItems = [...state.cartItem]
				const itemToRemove = updatedCartItems[itemIndex]

				if (itemToRemove.quantity > 1) {
					updatedCartItems[itemIndex] = {
						...itemToRemove,
						quantity: itemToRemove.quantity - 1
					}

					return {
						cartItem: updatedCartItems,
						totalPrice: state.totalPrice - itemToRemove.precio
					}
				} else {
					updatedCartItems.splice(itemIndex, 1)

					return {
						cartItem: updatedCartItems,
						totalPrice: state.totalPrice - itemToRemove.precio
					}
				}
			}

			return state
		})
	}
}))

export default useCart
