<template>
  <v-card
    class="mt-3 mx-auto">
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)">
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>
    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">Income</div>
      <div class="subheading font-weight-light grey--text">Income of Last 24hours</div>
    </v-card-text>
  </v-card>
</template>
<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>
<script>
  export default {
    data: () => ({
      labels: [
        '$ 200',
        '$ 675',
        '$ 410',
        '$ 390',
        '$ 310',
        '$ 460',
        '$ 250',
        '$ 240'
      ],
      value: [
        200,
        675,
        410,
        190,
        110,
        360,
        250,
        240
      ]
    })
  }
</script>