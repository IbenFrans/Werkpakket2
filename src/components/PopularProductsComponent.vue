<script>
export default {
    props: [
        'product'
    ]
}
</script>
<template lang="">
    <li><a href="productdetail.html"><img :src="product.image" :alt="product.alt"/></a></li>
</template>
<style lang="">
    
</style>