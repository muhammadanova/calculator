<template>
  <section class="mb-5">
    <b-row>
      <b-col md="12">
        <b-col md="4" offset-md="4">
          <b-card no-body>
            <calculator></calculator>
          </b-card>
        </b-col>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import Calculator from "@/components/Calculator.vue";

export default {
  name: 'home',
  components: {
    Calculator
  }  
}
</script>