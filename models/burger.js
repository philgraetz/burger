let orm = require("../config/orm");

let burger = {
    // Get all burgers 
    getBurgers: function(callback) {
        // Call the orm method
        orm.selectAll('burgers', function(allBurgers) {
            callback(allBurgers);
        });
    },

    // Add a new burger to the list
    addBurger: function(burgerName, callback) {
        orm.insertOne('burgers', 'burger_name', burgerName, callback);
    },

    // Update a burger to 'devoured'
    devourBurger: function(burgerId, callback) {
        orm.updateOne('burgers', burgerId, 'devoured', true, callback);
    }
}; 

module.exports = burger;

// // TEST
// burger.addBurger("Yummy Succulent Zuchini Burger", function() {
//     console.log("Added new burger, check it out in mySQL Workbench");
// });

// burger.devourBurger(4, function() {
//     console.log("Devoured a burger");
// });

// burger.getBurgers(true, function(results) {
//     console.log("Devoured burgers " + JSON.stringify(results, null, 2));
// });

// burger.getBurgers(false, function(results) {
//     console.log("NOT Devoured burgers " + JSON.stringify(results, null, 2));
// });

