//T
        // let someCoffee = "<ul><li>ESPRESSO</li><li>MACCHIATO</li><li>CAPPUCCINO</li><li>MOCHA</li><li>BLACK EYE</li><li>LATTE</li><li>BREVE</li></ul>";
        // //T
        // let ingredients = "<table><tr><th>Ice</th><th>Brewed Coffee</th><th>low-fat milk</th><th>caramel sauce</th><th>white sugar</th></tr>";
        // ingredients += "<tr><td>2 cups</td><td>1 cup</td><td>1 cup</td><td>1/3 cup</td><td>3 tablespoons</td></tr></table>";
        // //T
        // let nutrition = "<table><tr><th>Protein</th><th>Carbohydrates</th><th>fat</th><th>cholesterol</th><th>sodium</th></tr>";
        // nutrition += "<tr><td>5g 10% DV</td><td>60.2g 19% DV</td><td>2.5g 4% DV</td><td>10.3mg 3% DV</td><td> 241.6mg 10% DV</td></tr></table>";
        // //T
        // let someBreakfast = "<ul><li>Cheddar & Egg Sandwich</li><li>Croissant & Roasted Ham Sandwich</li><li>Turkey Bacon & Cage-Free Egg White Sandwich</li>"
        //     + "<li>Feta & Cage-Free Egg White Wrap</li><li>Swiss & Egg Sandwich</li><li>Croissant & Roasted Ham Sandwich</li></ul>";

let HotTeas = "<table><tr><th>London Fog</th><th>Earl Grey</th><th>Blossoming Rose</th><th>Rev Up Brewed</th><th>Rooibos Tea Latte</th>"
+ "<th>Black Tea Latte</th><th>Peach Tranquility</th><th>Royal English</th><th>Matcha Green</th><th>Honey Citrus Mint Tea</th></tr>";

HotTeas += "<tr><td>$5</td><td>$6</td><td>$8</td><td>$7</td><td>$6</td><td>$5</td><td>$7</td><td>$8</td><td>$5</td><td>$6</td></tr>";
HotTeas += "<tr><td>Large</td><td>Small</td><td>Medium</td><td>Small</td><td>Medium</td><td>Large</td><td>Small</td><td>Medium</td><td>Large</td><td>Medium</td></tr>";

HotTeas += "<tr><td>16mg Caff</td><td>40 mg Caff</td><td>0 mg Caff</td><td>40 mg Caff</td><td> 0 mg Caff</td>"
+ "<td>20mg Caff</td><td>10 mg Caff</td><td>50 mg Caff</td><td>49 mg Caff</td><td> 20 mg Caff</td></tr>";

HotTeas += "<tr><td>160 Cals</td><td>190 Cals</td><td>176 Cals</td><td>156 Cals</td><td>166 Cals</td>"
+"<td>200 Cals</td><td>160 Cals</td><td>176 Cals</td><td>166 Cals</td><td>126 Cals</td></tr>";

HotTeas += "<tr><td>27g Sugars</td><td>30g Sugars</td><td>17g Sugars</td><td>56g Sugars</td><td>30g Sugars</td>"
+"<td>20g Sugars</td><td>40g Sugars</td><td>37g Sugars</td><td>24g Sugars</td><td>43g Sugars</td></tr></table>";    
      //T
        // let flavor = "<ul><li>Vanilla Syrup &nbsp</li><li>Raspberry Syrup</li><li>Hazelnut Syrup</li><li>Gingerbread Syrup</li><li>Irish Cream Syrup</li></ul>";


        // let someLatteJSON = ["Caramel Brule Latte", "Chestnut Praline Latte", "Eggnog Latte", "Pumpkin Spice Latte", "Coconut Cascara Latte"];
       // let someCoJSON = ["Banana Bread", "Classic Coffee Cake", "Gingerbread Loaf", "Chocolate Cake Pop", "Peppermint Brownie Cake Pop"];

let loafJSON = [
    { name: "Name", Calories: "Calories", Fat: "Fat", Cholesterol: "Cholesterol", Sodium: "Sodium", Ingredients: "Ingredients" },
    { name: "Gingerbread Loaf", Calories: "400 Cals", Fat: "12g", Cholesterol: "85 mg", Sodium: "320mg", Ingredients: "Ground Ginger" },
    { name: "Peppermint Brownie Cake Pop", Calories: "170 Cals", Fat: "7g", Cholesterol: "10 mg", Sodium: "70mg", Ingredients: "Cocoa,Peppermint Oil, Carnauba Wax" },
    { name: "Chocolate Cake Pop", Calories: "160 Cals", Fat: "8g", Cholesterol: "15 mg", Sodium: "80mg", Ingredients: "Palm Oil, Butter, Skim Milk Powder, Corn Syrup" },
    { name: "Butter Croissant", Calories: "260 Cals", Fat: "15g", Cholesterol: "40 mg", Sodium: "320mg", Ingredients: "Cultured Butter, Yeast, Liquid Whole Eggs, Whole Milk Powder"  },
    { name: "Chocolate Croissant", Calories: "340 Cals", Fat: "20g", Cholesterol: "50 mg", Sodium: "280mg", Ingredients: "Wheat Gluten, Wheat Sourdough, Cultured Butter"  },
    { name: "Cheese Danish", Calories: "290 Cals", Fat: "14g", Cholesterol: "45 mg", Sodium: "400mg", Ingredients: "Yeast, Sea Salt, Dough"  },
    { name: "Almond Croissant", Calories: "420 Cals", Fat: "25g", Cholesterol: "85 mg", Sodium: "390mg", Ingredients: "Almonds, Water, Powdered Sugar"  },
    { name: "Pumpkin Scone", Calories: "500 Cals", Fat: "23g", Cholesterol: "70 mg", Sodium: "450mg", Ingredients: "Calcium Carbonate, Calcium Sulfate, Cinnamon"  },
    { name: "Blueberry Scone", Calories: "380 Cals", Fat: "17g", Cholesterol: "70 mg", Sodium: "350mg", Ingredients: " Sugar, Liquid Whole Eggs, Blueberries" },
    { name: "Petite Vanilla Bean Scone", Calories: "130 Cals", Fat: "5g", Cholesterol: "16 mg", Sodium: "110mg", Ingredients: "Soybean Oil, Skim Milk Powder, Baking Powder"  }];


module.exports = {
    getHotTeas: function () {
        console.log("called: getHotTeas");
        return HotTeas;
    },

    getloafJSON: function () {
        console.log("called: getloafJSON");
        return loafJSON;
    },
    getpopJSON : function () {
        console.log("called: getpopJSON");
        return popJSON;
    },
   

    getpepperJSON: function () {
        console.log("called: getpepperJSON");
        return pepperJSON;
    }
    // getCoffee : function () {
    //     console.log("called: getCoffee");
    //     return someCoffee;
    // },
    // getIngredients: function () {
    //     console.log("called: getIngredients");
    //     // Note: this could be from a DB, for now it's just hard-coded
    //     return ingredients;
    // },

    // getNutrition: function () {
    //     console.log("called: getNutrition");
    //     return nutrition;
    // },
    // getsomeBreakfast : function () {
    //     console.log("called: getsomeBreakfast");
    //     return someBreakfast;
    // },
    // getflavor: function () {
    //     console.log("called: getFlavor");
    //     return flavor;
    // },
    
 // getsomeCoJSON: function () {
    //     console.log("called: getsomeCoJSON");
    //     return someCoJSON;
    // },
    // getsomeLatteJSON : function () {
    //     console.log("called: getsomeLatteJSON");
    //     return someLatteJSON;
    // },
};




var someOtherFunction = function () {
    console.log("Can't touch this!");
}