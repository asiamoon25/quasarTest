<template>
  <div class="row justify-center q-ma-md">
    <q-card
      class="col-4"
      flat
      bordered
    >
      <div class="text-center">
        <h6 class="no-margin">Today Visitor</h6>
        <p class="text-subtitle1">10</p>
      </div>
    </q-card>
    <q-card
      class="col-4"
      flat
      bordered
    >
      <div class="text-center">
        <h6 class="no-margin">YesterDay Visitor</h6>
        <p class="text-subtitle1">10</p>
      </div>
    </q-card>
    <q-card
      class="col-4"
      flat
      bordered
    >
      <div class="text-center">
        <h6 class="no-margin">Total Visitor</h6>
        <p class="text-subtitle1">10</p>
      </div>
    </q-card>
  </div>
</template>
<script>
import {computed, reactive, ref, defineComponent} from "vue";

export default defineComponent ({
  name : 'AdminVisitor',
  setup () {

    return {

    }
  }
})
</script>
