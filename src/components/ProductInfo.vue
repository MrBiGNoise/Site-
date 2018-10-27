<template>
    <div>
        <h2 v-if="product">
            This is page for product #{{ product.id }}: {{ product.item }}
        </h2>
        <h2 v-else>
            Product not found
        </h2>
    </div>
</template>

<script>
    import products from '../data/products.js'

    export default {
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
</script>
