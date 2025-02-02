export const products = [
  
  {
    "category": "Vegetables",
    "items": [
      {
        "name": "Tomato",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIlG7EJOjyTKK4UfXL7chM2y1cJsNIvHmdA&usqp=CAU",
        "id": 4,
        "price": 2.99,
        "total": 2.99,
        "quantity": 1,
        "unit": 'kg', "reviews": 4.6,
        "reviewCount": 22
      },
      {
        "name": "Carrot",
        "img": "https://img.freepik.com/premium-photo/carrot-vegetable-with-leaves-isolated-white-background-cutout_272595-2793.jpg",
        "id": 5,
        "price": 1.99,
        "total": 1.99,
        "quantity": 1,
        "unit": 'kg', 
        "reviews": 4.3,
        "reviewCount": 17
      },
      {
        "name": "Spinach",
        "img": "data:image/jpeg;base64,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9IRO0OEwucPqlweREM1cBxtbhNvRR8Jj8FSuyi/MNCW5nf8AZ7jHmqbalOsx59qYe64ce8COPd93hoopFR2rc/Njs0comQsLJx1oy2mtIrPvjr+rzmevZ1o7W0N7Kg8G/wD0peH7RYZ/+qB/uBb8xC88fWotMOkH15aaIXUyO64TxLiTy4KaeK8RHfllHO9Uo12vEscHDiCCPMLYvKsPVqU3ftvh39Li2R1Nj5q9w/aTEU//ACZXciL+bNPEFd+HxWkx/UiY+sLReHcIqvZW3KVfQ5XfCTr0O/58laLTpet45qzuFxERXBERAREQEREBERAREQEREBERAREQEREBERAREQEREBF8X1BV7e2WK7LWqNuw/Q8ivO6geDeQ4GDeCItv6L1hU22dgsrnMDkfvMTPXmsnxDw/8afxMf5vP3/9UtXfZwrsS90ggPI1zNDh5ka+ijONMk5qQB35TH1I9Fd7Q7O4iicze83eWidNJYd3oqYUYk+9IvO48eqwb4b451fcT73nO/NiMKyf26jhO52nmPstjKj2DvAkT7zYNvBZUmc+vL7re0jUbrn7pStt+hpnhMrrsjrf1urbBbcrUjBOdo3ONx0dqPGypswJtlBN5NvIi6zrVABe50t9V01y2xxus6WiXe7N2rTre6YcNWmJ/uOYU9eb7PZUzNcwEumWxrblwXo1MmBNjAkc963OA4q2ekzaOsfV6RO2SIi70iIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAqvH7Bo1TmLcrjqW2nqNCrRFS+Ot41aNkxty1bsmf4VB0LY9Qfoop7M1wbZOub+y7NFyzwGGe0aV5YcZT7M1zrkHMn7BTqHZJur6hPJoj1MrpUUR4dg3uY38U8sI+DwVOkIY0N48T1OpUhEXbWsVjUdEiIikEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z",
        "id": 6,
        "price": 3.99,
        "total": 3.99,
        "quantity": 1,
        "unit": 'kg',
         "reviews": 4.7,
        "reviewCount": 28
      },
      {
        "name": "Broccoli",
        "img": "https://thumbs.dreamstime.com/b/broccoli-isolated-white-shadow-113429341.jpg",
        "id": 7,
        "price": 2.49,
        "total": 2.49,
        "quantity": 1,
        "unit": 'kg', "reviews": 4.4,
        "reviewCount": 20
      }
    ]
  },
  {
    "category": "Fruits",
    "items": [
      {
        "name": "Apple",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa2PTfEc2Vw-5cnT8pAzy5jv-qEuxi5LUd0g&usqp=CAU",
        "id": 8,
        "price": 1.49,
        "total": 1.49,
        "quantity": 1,
        "unit": 'kg',
        "reviews": 4.2,
        "reviewCount": 16
      },
      {
        "name": "Banana",
        "img": "https://upload.wikimedia.org/wikipedia/commons/4/44/Bananas_white_background_DS.jpg",
        "id": 9,
        "price": 0.99,
        "total": 0.99,
        "quantity": 1,
        "unit": 'kg',
        "reviews": 4.1,
        "reviewCount": 14
      },
      {
        "name": "Orange",
        "img": "https://media.istockphoto.com/id/1194662606/photo/orange-isolated-on-white-background-clipping-path-full-depth-of-field.jpg?s=170667a&w=0&k=20&c=3wrFCrSos9Oi04090iEm-cUM8cUMBlJ4AqqvCS0EwM0=",
        "id": 10,
        "price": 1.79,
        "total": 1.79,
        "quantity": 1,
        "unit": 'kg',
         "reviews": 4.3,
        "reviewCount": 18
      },
      {
        "name": "Grapes",
        "img": "https://img.freepik.com/premium-photo/grapes-white-background_181303-4423.jpg",
        "id": 11,
        "price": 3.99,
        "total": 3.99,
        "quantity": 1,
        "unit": 'kg',
        "reviews": 4.5,
        "reviewCount": 24
      }
    ]
  },
  {
    "category": "Dairy",
    "items": [
      {
        "name": "Milk",
        "img": "https://media.istockphoto.com/id/1271035466/vector/illustration-of-the-milk-cold-drink.jpg?s=612x612&w=0&k=20&c=ntRLDVh2RaDt-BuWszDfNAG--YpqG1ReXuWMxtyHv3Q=",
        "id": 12,
        "price": 2.99,
        "total": 2.99,
        "quantity": 1,
        "unit": 'ltr',
        "reviews": 4.4,
        "reviewCount": 19
      },
      {
        "name": "Cheese",
        "img": "https://static.vecteezy.com/system/resources/previews/002/009/138/large_2x/three-wedges-of-yellow-cheese-with-holes-on-white-background-photo.jpg",
        "id": 13,
        "price": 4.99,
        "total": 4.99,
        "quantity": 1,
        "unit": 'kg',
        "reviews": 4.8,
        "reviewCount": 32
      },
      {
        "name": "Yogurt",
        "img": "https://img.freepik.com/premium-photo/fresh-greek-yogurt-isolated-white-background_88281-4071.jpg",
        "id": 14,
        "price": 1.99,
        "total": 1.99,
        "quantity": 1,
        "unit": 'kg',
        "reviews": 4.2,
        "reviewCount": 15
      },
      {
        "name": "Butter",
        "img": "https://img.freepik.com/premium-photo/butter-butterdish-isolated-white-background-with-clipping-path_625448-1364.jpg?w=2000",
        "id": 15,
        "price": 3.49,
        "total": 3.49,
        "quantity": 1,
        "unit": 'kg',
        "reviews": 4.6,
        "reviewCount": 27
      }
    ]
  },
  {
    "category": "Grains",
    "items": [
      {
        "name": "Rice",
        "img": "https://media.istockphoto.com/id/1401261369/photo/white-raw-rice.webp?b=1&s=170667a&w=0&k=20&c=DjAwcuhRnSypv1nvsONghNKQnKfZ4ybiznzea-IKp_g=",
        "id": 16,
        "price": 4.99,
        "quantity": 1,
        "unit": 'kg',
        "reviews": 4.7,
        "reviewCount": 23
      },
      {
        "name": "Wheat",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjtmU1s_ffVdZgs1Slz1BI8-1-g-uN1jjtV9C-isIuch_zJ2_ledVjgG9ad6HobkHZzk4&usqp=CAU",
        "id": 17,
        "price": 3.99,

        "quantity": 1,
        "unit": 'kg', "reviews": 4.5,
        "reviewCount": 21
      },
      {
        "name": "Oats",
        "img": "https://media.istockphoto.com/id/599793642/photo/pile-of-oatmeal.jpg?s=612x612&w=0&k=20&c=Lcb4GDaGj1TYSm842C47wn2eW9h27gBKZiDEtGwE4q0=",
        "id": 18,
        "price": 2.99,

        "quantity": 1,
        "unit": 'kg', "reviews": 4.3,
        "reviewCount": 17
      },
      {
        "name": "Barley",
        "img": "https://thumbs.dreamstime.com/b/pearled-barley-white-background-16848134.jpg",
        "id": 19,
        "price": 3.49,

        "quantity": 1,
        "unit": 'kg', "reviews": 4.4,
        "reviewCount": 19
      }
    ]
  }
]