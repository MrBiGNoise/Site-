var products = [
	{
        "id": 1,
		"item": "DELUXE COOKED HAM",
        "price": " $5.15 ",
        "src": "https://robohash.org/1"
	},
	{
        "id": 2,
		"item": "DELUXE LOW-SODIUM COOKED HAM ",
        "price": " $5.15 ",
        "src": "https://robohash.org/2"
	},
	{
        "id": 3,
		"item": "DELUXE LOW-SODIUM WHOLE HAM",
        "price": " $5.15 ",
        "src": "https://robohash.org/3"
	}
]

const ProductsList = {
    template: `
        <div class="products">
            <form class="searchbar" v-on:submit.prevent="onSubmit">
                <input placeholder="Поиск" v-model="search">
                <input type="submit"  class="btn">
            </form>
            <div class="product" v-for="(item, index) in filteredItems">
                <div class="product-image">            
                    <img v-bind:src="item.src">
                </div>
                <div>
                    <h4 class="product-title">
                        <router-link v-bind:to="'/product/' + item.id">
                            {{ item.item }}
                        </router-link>
                    </h4>
                    <label>{{item.price}}</label>
                    <button class="btn">Add to cart</button>  
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            items: [],
            search: '',
            searchResult: []
        };
    },
    mounted: function(){
        this.items = products;
    },
    methods: {
        // onSubmit: function(){
        //     this.items.forEach(element => {
        //         if (element.item.toUpperCase().includes(this.search.toUpperCase())) {
        //             this.searchResult.push(element);
        //         }
        //     });
        //     this.items = this.searchResult;
        // },
    },
    computed: {
        filteredItems: function() {
            console.log(this);
            if (!this.search) {
                return this.items;
            }
            return this.items.filter(element => {
                return element.item.toUpperCase().includes(this.search.toUpperCase());
            });
        },
    }
}

const ProductInfo = {
    template: `
        <div>
            <h2 v-if="product">
                This is page for product #{{ product.id }}: {{ product.item }}
            </h2>
            <h2 v-else>
                Product not found
            </h2>
        </div>
    `,
    data: function() {
        return {
            product: null
        };
    },
    mounted: function() {
        this.product = products.find((item) => {
            return (item.id === Number(this.$route.params.id));
        });
    }
}

const routes = [
    { path: '/', component: ProductsList },
    { path: '/product/:id', component: ProductInfo }
]

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    // data: {
    //     items: [],
    //     search: '',
    //     searchResult: []
    // },
    // mounted: function(){
    //     this.items = products;
    // },
    // methods: {
    //     onSubmit: function(){
    //         this.items.forEach(element => {
    //             if (element.item.toUpperCase().includes(this.search.toUpperCase())) {
    //                 this.searchResult.push(element);
    //             }
    //         });
    //         this.items = this.searchResult;
    //     },
    // },
    // computed: {
    //     filteredItems: function() {
    //         if (!this.search) {
    //             return this.items;
    //         }
    //         return this.items.filter(element => {
    //             return element.item.toUpperCase().includes(this.search.toUpperCase());
    //         });
    //     },
    // }
});
