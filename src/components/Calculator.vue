<template>
  <div class="calculator">
    <div class="display-count">
      <span>{{ count || 0 }}</span>
    </div>
    <div class="display-sum row">
      <b-col md="2">
        <h1>=</h1>
      </b-col>
      <b-col md="10">
        <h1>{{ sum || 0 }}</h1>
      </b-col>      
    </div>
    <hr>
    <div class="content-button">
      <span @click="doClear" class="clear">Clear</span>
      <span @click="doTimes('*')" class="operator4">X</span>
      <span @click="append(1)" class="angka1">1</span>
      <span @click="append(2)" class="angka2">2</span>
      <span @click="append(3)" class="angka3">3</span>
      <span @click="doPlus('+')" class="operator4">+</span>
      <span @click="append(4)" class="angka1">4</span>
      <span @click="append(5)" class="angka2">5</span>
      <span @click="append(6)" class="angka3">6</span>
      <span @click="doMinus('-')" class="operator4">-</span>
      <span @click="append(7)" class="angka1">7</span>
      <span @click="append(8)" class="angka2">8</span>
      <span @click="append(9)" class="angka3">9</span>
      <span @click="doPercentage" class="operator4">%</span>
      <span @click="doPlusMinus" class="operator1">+/-</span>
      <span @click="append(0)" class="angka2">0</span>
      <span @click="doDot" class="operator3">.</span>
      <span @click="doSum" class="operator4">=</span>
    </div>
  </div>
</template>

<script>
import { parse } from 'path';
import { constants } from 'crypto';
export default {
  data () {
    return {
      count: '',
      sum: '',
      operator: '',
    }
  },
  methods: {
    doClear(){
      this.count = ''
      this.sum = ''
    },
    append(number){
      if(this.operatorClick){
        this.operatorClick = false
      }
      this.count = `${this.count}${number}`;
    },
    doPercentage(){
      this.sum = `${parseFloat(this.count) / 100}`
    },
    doPlusMinus(){
      this.count = this.count.charAt(0) === '-' ? this.count.slice(1) : `-${this.count}`;
    },
    doPlus(operat){
      this.count = `${this.count}${operat}`;
      this.operator = (a, b) => a + b;
      this.setPrev()
    }, 
    doMinus(operat){
      this.count = `${this.count}${operat}`;
      this.operator = (a, b) => a - b;
      this.setPrev()
    },
    doTimes(operat){
      this.count = `${this.count}${operat}`;
      this.operator = (a, b) => a * b;
      this.setPrev()
    },
    setPrev(){
      this.prev = this.count;
      this.operatorClick = true;
    },
    doSum() {
      // this.sum = this.count
      const answer = eval(this.count).toString();
      this.sum = answer
    },
    doDot(){
      if(this.count.indexOf('-') === -1){
        this.append('.');
      }
    }
  }
}
</script>