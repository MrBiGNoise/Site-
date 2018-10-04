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
        items: [],
        search: '',
        searchResult: []
    },
    mounted: function(){
        this.items = products;
    },
    methods: {
        onSubmit: function(){
            this.items.forEach(element => {
                if (element.item.toUpperCase().includes(this.search.toUpperCase())) {
                    this.searchResult.push(element);
                }
            });
            this.items = this.searchResult;
        },
    },
    computed: {
        filteredItems: function() {
            if (!this.search) {
                return this.items;
            }
            return this.items.filter(element => {
                return element.item.toUpperCase().includes(this.search.toUpperCase());
            });
        },
    }
});
