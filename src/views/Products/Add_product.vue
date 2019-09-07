<template>
  <form>
      <h2 class="font-weight-black">Add Product</h2>
    <v-text-field
      v-model="title"
      v-validate="'required'"
      :error-messages="errors.collect('sku')"
      label="Product Name"
      data-vv-name="title"
      required
    ></v-text-field>
    <v-text-field
      v-model="sku"
      v-validate="'required'"
      :error-messages="errors.collect('sku')"
      label="Stock Keeping Unit (SKU)"
      data-vv-name="sku"
      required
    ></v-text-field>
    <v-text-field
      v-model="upc"
      v-validate="'required'"
      :error-messages="errors.collect('upc')"
      label="Universal Product Code (UPC)"
      data-vv-name="upc"
      required
    ></v-text-field>
    <v-select
      v-model="select"
       v-validate="'required'"
      :items="product_type"
      label="Select Product Type"
      required
    ></v-select>
    <v-text-field
      v-model="short_description"
       v-validate="'required'"
      :error-messages="errors.collect('short description')"
      label="Short Description"
      data-vv-name="short description"
      required
    ></v-text-field>
    <v-textarea
      v-model="long_description"
      v-validate="'required'"
      :error-messages="errors.collect('long description')"
      label="Long Description"
      data-vv-name="long description"
      required
    ></v-textarea>
     <v-select
      v-model="select1"
      v-validate="'required'"
      :items="product_category"
      label="Select Product Category"
      required
    ></v-select>
     <v-select
      v-model="select2"
      v-validate="'required'"
      :items="product_brand"
      label="Select Product Brand"
      required
    ></v-select>
     <v-text-field
      v-validate="'required'"
      v-model="price"
      :error-messages="errors.collect('price')"
      label="Price"
      data-vv-name="price"
      required
    ></v-text-field>
    
    <v-btn @click="submit" class="success">Submit</v-btn>
  </form>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },
    data: () => ({
      title: '',
      sku: '',
      upc: '',
      select: null,
      select1:null,
      select2:null,
      product_type: [
        'Product type 1',
        'Product type 2',
        'Product type 3',
        'Product type 4'
      ],
      short_description: '',
      long_description: '',
      product_category: [
        'Product Category 1',
        'Product Category 2',
        'Product Category 3',
        'Product Category 4'
      ],
      product_brand: [
        'Product Brand 1',
        'Product Brand 2',
        'Product Brand 3',
        'Product Brand 4'
      ],
      price:''
      
    }),
    computed:{
      // productTypeErrors () {
      // const errors = []
      // if (!this.$v.select0.$dirty) return errors
      // !this.$v.select0.required && errors.push('Item is required')
      // return errors
      // },
      // productCategoriesErrors () {
      // const errors = []
      // if (!this.$v.select1.$dirty) return errors
      // !this.$v.select1.required && errors.push('Item is required')
      // return errors
      // },
      // productBrandErrors () {
      // const errors = []
      // if (!this.$v.select2.$dirty) return errors
      // !this.$v.select2.required && errors.push('Item is required')
      // return errors
      // }
    },
    methods: {
      submit () {
        this.$validator.validateAll()
      }
    }
  }
</script>