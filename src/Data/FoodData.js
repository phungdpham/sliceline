export function formatPrice(price){
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

export const foodItems = [
  {
    name: 'Cheese Pizza',
    img: '/img/pizza.png',
    section: 'pizza',
    price: 1
  },
  {
    name: 'Pepperoni Pizza',
    img: '/img/pizza2.jpeg',
    section: 'pizza',
    price: 1.5
  },
  {
    name: 'Chicken Pizza',
    img: '/img/chicken-pizza.jpeg',
    section: 'pizza',
    price: 2
  },
  {
    name: 'Veggie Pizza',
    img: '/img/healthy-pizza.jpeg',
    section: 'pizza',
    price: 2
  },
  {
    name: 'Burger',
    img: '/img/burger.jpeg',
    section: 'sandwich',
    price: 3
  },
  {
    name: 'Gyro',
    img: '/img/gyro.jpeg',
    section: 'sandwich',
    price: 4.5
  },
  {
    name: 'Shrimp PoBoy',
    img: '/img/sandWich.jpeg',
    section: 'sandwich',
    price: 6
  },
  {
    name: 'Fries',
    img: '/img/fries.jpeg',
    section: 'sides',
    price: 1
  },
  {
    price: 1,
    name: 'Soda',
    section: 'Drinks',
    choices: ['Coke', 'Sprite', 'Root Beer']
  }
]

export const foods = foodItems.reduce((res, food) => {
  if(!res[food.section]){
    res[food.section] = []
  }
  res[food.section].push(food)
  console.log(food)
  return res;
}, {})