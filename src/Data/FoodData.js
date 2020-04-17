export const foodItems = [
  {
    name: 'Cheese Pizza',
    img: '/img/pizza.png',
    section: 'pizza'
  },
  {
    name: 'Pepperoni Pizza',
    img: '/img/pizza2.jpeg',
    section: 'pizza'
  },
  {
    name: 'Chicken Pizza',
    img: '/img/chicken-pizza.jpeg',
    section: 'pizza'
  },
  {
    name: 'Veggie Pizza',
    img: '/img/healthy-pizza.jpeg',
    section: 'pizza'
  },
  {
    name: 'Burger',
    img: '/img/burger.jpeg',
    section: 'sandwich'
  },
  {
    name: 'Gyro',
    img: '/img/gyro.jpeg',
    section: 'sandwich'
  },
  {
    name: 'Shrimp PoBoy',
    img: '/img/sandWich.jpeg',
    section: 'sandwich'
  },
  {
    name: 'Fries',
    img: '/img/fries.jpeg',
    section: 'sides'
  },
]

export const foods = foodItems.reduce((res, food) => {
  if(!res[food.section]){
    res[food.section] = []
  }
  res[food.section].push(food)
  console.log(food)
  return res;
}, {})