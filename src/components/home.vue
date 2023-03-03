
<template>
    <div>
      <input type="text" placeholder="search product" v-model="name"><button @click="serchProduct">seach</button>
      Hello title <button @click="addProduct">Add</button>
      <button @click="deleted">Delete</button><br />
  
      <div v-for="item in allProduct" :key="item.id"><br />
        {{ item.id }}
        {{ item.title }} <button @click="update(item.id)">Update</button><br> <br />
      </div>
    </div>
  </template>
  <script>
  import { mapActions } from "vuex";
  
  export default {
    data() {
      return {
        item: null,
        name : '',
  
      }
    },
    methods: {
      ...mapActions(["fetchProduct"]),
      async getData() {
        const res = await fetch("https://dummyjson.com/products");
        const finalRes = await res.json();
        this.products = finalRes.products;
        console.log(this.products)
      },
      addProduct() {
        fetch('https://dummyjson.com/products/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
      
            title: this.name,
            /* other product data */
          })
        })
          .then(res => res.json())
          .then(Response => {
            this.item = Response;
            console.log(Response)
            this.$store.dispatch('addProduct', this.item)
          });
  
  
  
      },
  
      deleted(id) {
        fetch('https://dummyjson.com/products/1', {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(Response => {
            this.item = Response;
            console.log(this.item)
            const deleted = this.products.filter(val => val.id !== this.item.id);
            this.products = deleted;
  
          });
      },
  
      update(id) {
        fetch('https://dummyjson.com/products/1', {
          method: 'PUT', /* or PATCH */
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: 'Iphone 15 pro'
          })
        })
          .then(res => res.json())
          .then(Response => {
            this.item = Response;
            console.log(this.item)
            const edited = this.products.map(val => val.id == this.item.id ? { ...this.item, title: this.item.title } : val);
            console.log(edited, "edite")
            this.products = edited;
          });
      },
  
      serchProduct() {
        fetch('https://dummyjson.com/products/search?q=phone')
          .then(res => res.json())
          .then(Response => {
            this.item = Response;
            console.log(this.item)
            this.products = this.item.products
  
          })
  
      },
    },
    created() {
      this.fetchProduct()
    },
    computed: {
      allProduct() {
        return this.$store.state.products;
      }
    }
  
  
  
  }
  </script>
  
  