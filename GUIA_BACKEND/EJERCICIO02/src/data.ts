export interface Producto {
  id: number
  name: string
  price: number
  category: string
}

export const listadoProductos: Producto[] = [
    {
        id: 1,
        name: "Coca Cola",
        price: 1.5,
        category: "Beverages"
    }
    , {
        id: 2,
        name: "Pepsi",
        price: 1.4,
        category: "Beverages"
    }, {
        id: 3,
        name: "Cookies",
        price: 2.0,
        category: "Snacks"
    }, {
        id: 4,
        name: "Chips",
        price: 1.8,
        category: "Snacks"
    }, {
        id: 5,
        name: "Chocolate Bar",
        price: 1.2,
        category: "Snacks"
    }, {
        id: 6,
        name: "Water Bottle",
        price: 0.5,
        category: "Beverages"
    }, {
        id: 7,
        name: "Energy Drink",
        price: 2.5,
        category: "Beverages"
    }, {
        id: 8,
        name: "Sandwich",
        price: 3.0,
        category: "Food"
    }, {
        id: 9,
        name: "Pizza Slice",
        price: 2.0,
        category: "Food"
    }, {
        id: 10,
        name: "Ice Cream",
        price: 2.5,
        category: "Dessert"
    }
]