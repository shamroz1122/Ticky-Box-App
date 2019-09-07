<template>
  <div>
    <app-header></app-header>
    <app-drawer></app-drawer>
    <v-container>
      <h1>Product Details</h1>
      <v-tabs
        v-model="active"
        color="white"
        light
        slider-color="yellow"
      >
        <v-tab ripple>
          General

        </v-tab>
        <v-tab-item>
          <v-card>
            <v-card-text> <span class="font-weight-bold">Product Name:</span> Product XYZ</v-card-text>
          </v-card>
          <v-card>
            <v-card-text> <span class="font-weight-bold">Product type:</span> Product type xyz</v-card-text>
          </v-card>
          <v-card>
            <v-card-text> <span class="font-weight-bold">Short Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti reiciendis aliquam ad </v-card-text>
          </v-card>
          <v-card>
            <v-card-text> <span class="font-weight-bold">Long Description:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam cupiditate distinctio quod voluptatibus hic vero illo rem consequuntur dolorum, velit doloremque explicabo molestias dignissimos perspiciatis optio porro amet molestiae similique!</v-card-text>
          </v-card>
          <v-card>
            <v-card-text> <span class="font-weight-bold">Product Brand:</span> Product Brand XYZ</v-card-text>
          </v-card>
          <v-card>
          <img src="../../assets/logos.png" alt="" class="ml-3">
          </v-card>
        </v-tab-item>
        <!-- 2nd -->
        <v-tab ripple>
          Product SKU
        </v-tab>
        <v-tab-item>
          <v-card>
            <v-card-text> <span class="font-weight-bold">Product SKU:</span> Ti-854</v-card-text>
          </v-card>
          <v-card>
            <v-card-text> <span class="font-weight-bold">Product Price:</span> $5</v-card-text>
          </v-card>
          <v-card>
            <v-card-text> <span class="font-weight-bold">Product UPC:</span> Tic-4658-Z</v-card-text>
          </v-card>
        </v-tab-item>
        <!-- 3rd -->
        <v-tab ripple>
          Product Category
        </v-tab>
        <v-tab-item>
          <v-card>
            <v-card-text> <span class="font-weight-bold">Product Category:</span> Category XYZ</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut aliquip ex ea commodo consequat.'
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      }
    }
  }
</script>