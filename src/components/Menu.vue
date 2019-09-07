<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="" flat dark v-on="on">Menu &nbsp; <v-icon>dehaze</v-icon></v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="success">
          <!-- <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn> -->
          <v-layout row justify-end>
              <v-flex xs10>
                <v-toolbar-title class="text-xs-center">Menu</v-toolbar-title>
              </v-flex>
              <v-flex xs1>
              </v-flex>
          </v-layout>
                <v-toolbar-items>
                    <v-btn icon dark @click="dialog = false" class="right">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <!-- <v-btn dark flat @click="dialog = false">Save</v-btn> -->
                </v-toolbar-items>
          <!-- <v-spacer></v-spacer> -->
        </v-toolbar>
            <v-layout align-center justify-center row fill-heigh>
                <v-flex xs12>
                        <v-list>
                            <router-link v-for="(menu, i) in menus" :key="i" Router :to="{ name: menu.route, params: {  }}" style="text-decoration:none;" class="black--text">
                                <v-list-tile @click="dialog=false">
                                    <v-list-tile-content>
                                        <v-list-tile-title class="text-xs-center">
                                            {{ menu.title }}
                                            </v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </router-link> 
                        </v-list>
                </v-flex>
            </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        menus:[
            {title:  'View Site Coupon', route:'site_coupon'},
            {title:  'Store', route:'site_stores'},
            {title:  'Categories', route:'coupon_categories'},
            {title:  'Blog', route:'blog'}
        ]
      }
    }
  }
</script>