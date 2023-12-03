/*
	Write a function calcTotalPrice(stones, stoneName) that takes an array of objects and a string with the name of the stone.
	The function calculates and returns the total cost of stones with the same name, price and quantity from the object.
*/

const stones = [
	{ name: 'Emerald', price: 1300, quantity: 4 },
	{ name: 'Diamond', price: 2700, quantity: 3 },
	{ name: 'Sapphire', price: 400, quantity: 7 },
	{ name: 'Rubble', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
	// 1. Find in stones array the object with name = stoneName
	// 2. Multiply price with quantity on the object found

	for (const stone of stones) {
		if (stone.name === stoneName) {
			return stone.price * stone.quantity;
		}
	}
}

function calcTotalPriceForAllStones(stones) {
	let total = 0;
	for (const stone of stones) {
		total += stone.price * stone.quantity;
	}
	return total;
}

function addTotalPrice(stones) {
	for (const stone of stones) {
		stone.totalPrice = stone.price * stone.quantity;
	}
}

const totalEmerald = calcTotalPrice(stones, "Emerald");
console.log(totalEmerald);

const totalSapphire = calcTotalPrice(stones, "Sapphire");
console.log(totalSapphire);

const totalStones = calcTotalPriceForAllStones(stones);
console.log(totalStones);

addTotalPrice(stones);
console.log(stones);