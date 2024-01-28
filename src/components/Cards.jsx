import React from 'react'
import Card from './Card';

const items = [
    {
        id: 1,
      vegetable: "Potato",
      commonNames: ["Aloo"],
      description: "Potatoes are starchy tubers with a versatile culinary usage. They are used in curries, fries, mashed dishes, and as a thickening agent.",
      characteristics: "Starchy, versatile, easy to store and cook.",
      price: "₹20",
      rating: 4.5,
      otherFeatures: "High in carbohydrates and vitamin C.",
      imgUrl: "https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg"
    },
    {
        id: 2,
      vegetable: "Tomato",
      commonNames: ["Tamatar"],
      description: "Tomatoes are juicy fruits used as vegetables in cooking. They add tanginess and flavor to dishes like curries, salads, and sauces.",
      characteristics: "Juicy, acidic, rich in lycopene, vitamin C, and antioxidants.",
      price: "₹25",
      rating: 4.7,
      otherFeatures: "Available in different colors and sizes.",
      imgUrl: "https://himachaltonite.com/wp-content/uploads/2023/07/tamo.jpg"
    },
    {
        id:3,
      vegetable: "Onion",
      commonNames: ["Pyaz"],
      description: "Onions are pungent bulbs used in various cuisines worldwide. They are essential for flavoring curries, salads, and as a base in cooking.",
      characteristics: "Pungent, versatile, long shelf life.",
      price: "₹20",
      rating: 4.6,
      otherFeatures: "Come in different colors like red, white, and yellow.",
      imgUrl: "https://plantix.net/en/library/assets/custom/crop-images/onion.jpeg"
    },
    {
        id:4,
      vegetable: "Garlic",
      commonNames: ["Lehsun"],
      description: "Garlic cloves are known for their strong flavor and aroma. They are used in almost every Indian dish, either minced, crushed, or sliced.",
      characteristics: "Strong flavor, medicinal properties.",
      price: "₹80",
      rating: 4.8,
      otherFeatures: "Believed to have various health benefits.",
      imgUrl: "https://www.realsimple.com/thmb/zjJYhj0AXTu8Ndio6-Hl2NzSicY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/health-benefits-of-garlic-2000-482c21fd2d154102a9b7a46ccb34e70a.jpg"
    },
    {
        id:5,
      vegetable: "Ginger",
      commonNames: ["Adrak"],
      description: "Ginger is a spicy rhizome used in cooking and for its medicinal properties. It adds warmth and flavor to dishes, teas, and desserts.",
      characteristics: "Spicy, aromatic, aids digestion.",
      price: "₹60",
      rating: 4.7,
      otherFeatures: "Used in both savory and sweet dishes.",
      imgUrl: "https://cdn.shopify.com/s/files/1/2395/7673/files/Ginger_Powder_For_Hair_480x480.jpg?v=1663394458"
    },
    {
        id:6,
      vegetable: "Green Chili",
      commonNames: ["Hari Mirch"],
      description: "Green chilies are fiery peppers used to add heat and flavor to Indian dishes. They are used whole, chopped, or slit in curries and snacks.",
      characteristics: "Fiery, spicy, rich in vitamins and antioxidants.",
      price: "₹40",
      rating: 4.6,
      otherFeatures: "Available in various sizes and heat levels.",
      imgUrl: "https://www.urbangroc.com/wp-content/uploads/2021/04/Green-Chilli-Thick-1-01.jpg"
    },
    {
        id:7,
      vegetable: "Spinach",
      commonNames: ["Palak"],
      description: "Spinach leaves are nutritious greens used in Indian curries, soups, and salads. They are rich in iron, vitamins, and dietary fiber.",
      characteristics: "Nutrient-rich, versatile, tender leaves.",
      price: "₹30",
      rating: 4.5,
      otherFeatures: "Cooks quickly and retains vibrant green color.",
      imgUrl: "https://graciouslynourished.com/wp-content/uploads/2022/05/fresh-spinach.jpg"
    },
    {
        id:8,
      vegetable: "Cauliflower",
      commonNames: ["Phool Gobhi"],
      description: "Cauliflower is a cruciferous vegetable with a dense, crunchy texture. It is used in curries, stir-fries, and can be roasted or mashed.",
      characteristics: "Mild flavor, versatile, low in calories.",
      price: "₹40",
      rating: 4.6,
      otherFeatures: "Comes in different colors like white, purple, etc.",
      imgUrl: "https://www.eatrightbasket.com/wp-content/uploads/2019/02/SS_Veg_32.jpg"
    },
    {
        id:9,
      vegetable: "Cabbage",
      commonNames: ["Patta Gobhi"],
      description: "Cabbage is a leafy vegetable with a dense, round head of leaves. It is used in salads, stir-fries, soups, and pickled preparations.",
      characteristics: "Crunchy, mild flavor, high in fiber and nutrients.",
      price: "₹20",
      rating: 4.5,
      otherFeatures: "Available in green and purple varieties.",
      imgUrl: "https://www.verywellfamily.com/thmb/_oV2_9ZRi2bdP7hy7DMrKKVeb2o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hands-holding-green-cabbage-head-489401165-572cdffc3df78c038e3bd255.jpg"
    },
    {
        id:10,
      vegetable: "Brinjal",
      commonNames: ["Baingan"],
      description: "Brinjal or Eggplant is a versatile vegetable used in Indian cuisine. It can be roasted, grilled, stuffed, or added to curries and stir-fries.",
      characteristics: "Soft texture, absorbs flavors well.",
      price: "₹30",
      rating: 4.6,
      otherFeatures: "Available in various shapes and colors.",
      imgUrl: "https://chennai.gourmetgarden.in/cdn/shop/products/brinjal_1_-Copy_2048x2048.jpg?v=1634493974"
    }
  ];

export default function Cards() {
  return (
    <div className='flex gap-8 flex-wrap justify-center items-center'>
        {
            items.map((item)=>{
                return(
                    <Card item = {item}/>
                )
            })
        }
    </div>
  )
}
