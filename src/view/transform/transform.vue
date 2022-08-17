<template>
  <div id="app">
    <el-input type="number" step="100" v-model="counter"/>
    <h2 class="operate-number">当前计数：{{ showCounter }}</h2>
    <div class="operate-number">
      <el-button plain @click="addNum" type="success">添加数字</el-button>
      <el-button plain @click="removeNum" type="warning">删除数字</el-button>
      <el-button plain @click="shuffleNum" type="primary">数字洗牌</el-button>
      <transition-group tag="div" name="why" class="operate-number">
        <span v-for="item in numbers" :key="item" class="item">{{ item }}</span>
      </transition-group>
    </div>
    <div class="operate-number">
      <el-input class="reset-input-btn" type="text" v-model="keyword"
                :style="showName.length===0 ? 'border-radius:4px;border: 2px solid #3a77f6;overflow:hidden;' : ''"/>
      <transition-group
          tag="ul" name="why"
          v-show="showName.length!==0"
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave">
        <li v-for="(item, index) in showName" :key="item" :data-index="index">{{ item }}</li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import _ from 'lodash'
export default {
  data () {
    return {
      counter: 0,
      showNumber:0,
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numCounter: 10,
      names: ['罗亦菲', '方晨璐', '廖凌晶', '蔡萌', '沈佳欣', '文嘉怡'],
      keyword: ''
    }
  },
  computed: {
    showCounter() {
      return this.showNumber.toFixed(0)
    },
    showName() {
      return this.names.filter(item => item.includes(this.keyword))
    }
  },
  watch: {
    counter(newValue) {
      gsap.to(this, {duration: 1, showNumber: newValue})
    }
  },
  methods: {
    addNum() {
      this.numbers.splice(this.randomIndex(), 0, this.numCounter++)
    },
    removeNum() {
      this.numbers.splice(this.randomIndex(), 1)
    },
    shuffleNum() {
      this.numbers = _.shuffle(this.numbers)
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length)
    },
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: '1.5em',
        delay: el.dataset.index * 0.5,
        onComplete: done
      })
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.5,
        onComplete: done
      })
    }
  },
}
</script>
<style scoped>
  .item {
    margin-right: 10px;
    display: inline-block;
  }
  .why-enter-from,
  .why-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .why-enter-active,
  .why-leave-active {
    transition: all 1s ease;
  }

  .why-leave-active {
    position: absolute;
  }

  .why-move {
    transition: transform 1s ease;
  }
  .operate-number{
    width: 100%;
    padding: 20px 0;
  }
  ul{
    border: 2px solid #3a77f6;
    border-top: transparent;
    border-radius: 0 0 4px 4px;
    padding: 5px;
    background: #ffffff;
  }
  li{
    list-style: none;
  }
  .reset-input-btn{
    border-radius: 4px 4px 0 0;
    border: 2px solid #3a77f6;
    border-bottom: transparent;
  }
  ::v-deep .reset-input-btn input{
    border-radius: 4px 4px 0 0;
  }
</style>