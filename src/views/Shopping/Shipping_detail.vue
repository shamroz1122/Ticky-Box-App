<template>
<div>
  <app-header></app-header>
    <app-nav></app-nav>
    <v-container>
      <h1>Shipping Details</h1>
      <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="address" :rules="addressRules" label="Address" required></v-text-field>
          <v-text-field v-model="other_address" :rules="otherAddressRules" label="Other address" required></v-text-field>
          <v-text-field v-model="city" :rules="cityRules" label="City" required></v-text-field>
          <v-text-field v-model="zip_code" :rules="zipCodeRules" label="Zip  Code" required></v-text-field>
          <v-text-field v-model="country" :rules="countryRules" label="Country" required></v-text-field>
          <v-text-field v-model="phone" :rules="phoneRules" label="Home phone" required></v-text-field>
          <v-text-field v-model="mobile" :rules="mobileRules" label="Mobile" required></v-text-field>
          <router-link to="/product_payment">
              <v-btn :disabled="!valid" color="success" @click="validate" class="right">Save <v-icon>keyboard_arrow_right</v-icon></v-btn>
          </router-link>
      </v-form>
    </v-container>
</div>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      address: '',
      addressRules:[
        v => !!v || 'Name is required'
      ],
      otherAddressRules:[
        v => !!v || 'Name is required'
      ],
      cityRules:[
        v => !!v || 'Name is required'
      ],
      zipCodeRules:[
        v => !!v || 'Name is required'
      ],
      countryRules:[
        v => !!v || 'Name is required'
      ],
      phoneRules:[
        v => !!v || 'Name is required'
      ],
      mobileRules:[
        v => !!v || 'Name is required'
      ]
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      }
    }
  }
</script>