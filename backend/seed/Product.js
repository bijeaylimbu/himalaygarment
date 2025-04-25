const mongoose = require("mongoose");
const ProductModel = require("../model/ProductModel");

const seedProducts = async () => {
  const sampleProducts = [
    {
      name: "Cotton skirt stonewash",
      description: "Cotton skirt stonewash",
      price: 4.00,
      info: "256GB, Silver",
      category: "Women's Fashion",
      Stock: 10,
      images: [
        {
          product_id: "cotton_skirt_stonewash",
          url: "https://himalaygarment.com/uploads/contents/image240710012527mJGRi6.jpg",
        },
      ],
      user: new mongoose.Types.ObjectId(), 
      reviews: [],
    },
  ];

  await ProductModel.insertMany(sampleProducts);
  console.log("Sample products inserted");
};

module.exports = {
  seedProduct: seedProducts,
};
