<template>
  <form>
      <h2 class="font-weight-black">Add Store</h2>
    <v-text-field
      v-model="title"
      v-validate="'required'"
      :error-messages="errors.collect('title')"
      label="Store Name"
      data-vv-name="title"
      required
    ></v-text-field>
    <v-text-field
      v-model="description"
      :error-messages="errors.collect('description')"
      label="Description"
      data-vv-name="description"
      required
    ></v-text-field>
    <v-text-field
      v-model="phone"
      v-validate="'required|max:11'"
      :counter="11"
      :error-messages="errors.collect('phone')"
      label="Phone"
      data-vv-name="phone"
      required
    ></v-text-field>
    <v-textarea
      v-model="address"
      v-validate="'required'"
      :error-messages="errors.collect('address')"
      label="Address"
      data-vv-name="address"
      required
    ></v-textarea>
    <v-btn @click="submit" class="success">Submit</v-btn>
  </form>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },
    data: () => ({
      name: '',
      description: '',
      phone: '',
      address: ''
    }),
    methods: {
      submit () {
        this.$validator.validateAll()
      }
    }
  }
</script>