<template>
  <div class="view__random page5">
    <h2 class="background-title mb-0">random</h2>
    <v-container>
      <v-row justify="space-between" align="center">
        <v-col cols="4"> 
          Forms
        </v-col>

        <v-col cols="8" class="text-right">
          <v-card color="red">
            results
          </v-card>
        </v-col>        
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Landing',
}
</script>

<style lang="scss" scoped>
.view__random {
  background-color: #F6F5EF;
  height: 100vh;
  position: relative;

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    padding-top: 65px;
  }    

  .landing__button {
    background-color: #D5C0D2 !important;
    border-radius: unset;
  }

  .landing__vertical {
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    position: absolute;
    right: 0; 
    bottom: 16px;
  }  
}

.page5 {
  background: #F6F5EF url("data:image/svg+xml,%3Csvg width='1280' height='233' xmlns='http://www.w3.org/2000/svg'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath d='M1280 0c-167.463 0-449.312 114.933-639.815 114.933C449.68 114.933 173.4 0 0 0v233h1280V0z' fill='%237F7BFB'/%3E %3Cpath d='M1280 140.13C1112.537 140.13 830.503 42 640 42S173.4 140.13 0 140.13v93h1280v-93z' fill='%23ece7c7'/%3E %3C/g%3E %3C/svg%3E ") bottom/100% no-repeat fixed;
}
</style>