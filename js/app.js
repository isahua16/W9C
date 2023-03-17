// Create 3 arrays containing 3 items, prices and whether the item is in stock of not respectively
let item_names = [`Glerups Shoe With Rubber Sole`, `Foamtreads Conrad Slip On Slipper`, `Vionic Men's Maverick Gustavo Slipper`,  ];
let item_prices = [130, 100, 100.75];
let in_stock = [true, true, false];

// Assign the first value from the item_names and item_prices to their own variables
let first_item_name = item_names[0];
let first_item_price = item_prices[0];

// Adding a new item to the end of each arrays
item_names.push(`Haflinger Coffee Felt Sole Slipper`);
item_prices.push(110);
in_stock.push(true);

// Removing the last item from each array and assigning the returned values to their own variables
let last_item_name = item_names.pop();
let last_item_price = item_prices.pop();
let last_item_stock = in_stock.pop();

