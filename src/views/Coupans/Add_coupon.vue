
<template>
  <form>
      <h2 class="font-weight-black">Add Coupon</h2>
    <v-text-field
      v-model="title"
      v-validate="'required'"
      :error-messages="errors.collect('sku')"
      label="Coupon Name"
      data-vv-name="title"
      required
    ></v-text-field>
    <v-text-field
      v-model="description"
       v-validate="'required'"
      :error-messages="errors.collect('short description')"
      label="Short Description"
      data-vv-name="short description"
      required
    ></v-text-field>
    <v-text-field
      v-model="sku"
      v-validate="'required'"
      :error-messages="errors.collect('sku')"
      label="Stock Keeping Unit (SKU)"
      data-vv-name="sku"
    ></v-text-field>

    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Add start date"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
       <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Add end date"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    <v-text-field
      v-model="max_redemption_per_consumer"
      v-validate="'required'"
      :error-messages="errors.collect('sku')"
      label="Max Redemption Per Consumer"
      data-vv-name="Max Redemption Per Consumer"
    ></v-text-field>

    <v-select
      v-model="select"
       v-validate="'required'"
      :items="product_type"
      label="Select product"
      required
    ></v-select>
    
    
     <v-select
      v-model="select1"
      v-validate="'required'"
      :items="product_category"
      label="Select any product category"
      required
    ></v-select>
     <v-select
      v-model="select2"
      v-validate="'required'"
      :items="store"
      label="Select any store"
      required
    ></v-select>
    <v-text-field
      v-model="max_allowed_total_redemptions_per_store"
      v-validate="'required'"
      :error-messages="errors.collect('sku')"
      label="Max Allowed Total Redemptions Per Store"
      data-vv-name="Max Allowed Total Redemptions Per Store"
    ></v-text-field>
    <v-text-field
      v-model="max_allowed_campaign_total_redemptions"
      v-validate="'required'"
      :error-messages="errors.collect('sku')"
      label="Max Allowed Campaign Total Redemptions"
      data-vv-name="Max Allowed Campaign Total Redemptions"
    ></v-text-field>
    <v-text-field
      v-model="max_allowed_total_redemptions"
      v-validate="'required'"
      :error-messages="errors.collect('sku')"
      label="Max Allowed Total Redemptions"
      data-vv-name="Max Allowed Total Redemptions"
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
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      title: '',
      sku: '',
      max_allowed_total_redemptions_per_store: null,
      max_allowed_campaign_total_redemptions:null,
      max_allowed_total_redemptions:null,
      product_type: [
        'Product  1',
        'Product  2',
        'Product  3',
        'Product  4'
      ],
      description: '',
      long_description: '',
      product_category: [
        'Product Category 1',
        'Product Category 2',
        'Product Category 3',
        'Product Category 4'
      ],
      store: [
        'Store 1',
        'Store 2',
        'Store 3',
        'Store 4'
      ],
      
      
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