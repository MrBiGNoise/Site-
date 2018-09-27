var products = [
	{
		"item": "DELUXE COOKED HAM",
        "price": " $5.15 ",
        "src": "https://robohash.org/1"
	},
	{
		"item": "DELUXE LOW-SODIUM COOKED HAM ",
        "price": " $5.15 ",
        "src": "https://robohash.org/2"
	},
	{
		"item": "DELUXE LOW-SODIUM WHOLE HAM",
        "price": " $5.15 ",
        "src": "https://robohash.org/3"
	}
]

new Vue({
    el: '#app',
    data: {
        items: []
    },
    mounted: function(){
        this.items = products;
    },
});
