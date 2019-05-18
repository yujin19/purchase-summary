const pricingData = {
  pricing: {
    subtotal: 102.96,
    savings: 3.85,
    tax: 8.92,
    total: 108.03,
    zip: 85050
  },
  itemDetails: {
    item_name:
      "Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red",
    quantity: 1,
    img:
      "https://i5.walmartimages.com/asr/3e2b5dff-afc4-4085-a2d5-6f3aa658e490_1.11ab96630285b84d37758ed8af0569bd.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
    price: 102.96,
    new_price: 99.11
  }
};

export const getPricingData = (delay = 1000) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(pricingData);
    }, delay);
  });
};
