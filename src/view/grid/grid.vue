<template>
  <div id="current-area">
    <svg :width="w" :height="h" ref="view-canvas" class="view-canvas" @mousewheel="onMwheel($event)">
      <!--中心线-->
      <g transform="translate(0.5 0.5)" style="opacity: 0.5;">
        <line x1="0" :x2="w" :y1="h/2" :y2="h/2" stroke="#ccc" fill="transparent" stroke-width="1"/>
        <line :x1="w/2" :x2="w/2" y1="0" :y2="h" stroke="#ccc" fill="transparent" stroke-width="1"/>
      </g>

      <g transform="translate(0.5 0.5)" style="opacity: 0.4;">
        <!--其他线 横线-->
        <line :x1="el.x1" :x2="el.x2" :y1="el.y1" :y2="el.y2" stroke="#ddd" fill="transparent" stroke-width="1" v-for="(el,index) in hlines" :key="index+'2'"/>
        <line :x1="el.x1" :x2="el.x2" :y1="el.y1" :y2="el.y2" stroke="#ddd" fill="transparent" stroke-width="1" v-for="(el,index) in vlines" :key="index+'3'"/>
      </g>

      <g transform="translate(0.5 0.5)" style="opacity: 0.5;">
        <!--10个单位线-->
        <line :x1="el.x1" :x2="el.x2" :y1="el.y1" :y2="el.y2" stroke="#ccc" fill="transparent" stroke-width="1" v-for="(el,index) in hlinesTen" :key="index+'4'"/>
        <line :x1="el.x1" :x2="el.x2" :y1="el.y1" :y2="el.y2" stroke="#ccc" fill="transparent" stroke-width="1" v-for="(el,index) in vlinesTen" :key="index+'5'"/>
      </g>

    </svg>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "grid",
  props:{
    // w: {
    //   type: Number,
    //   default: 200
    // },
    // h: {
    //   type: Number,
    //   default: 200
    // },
    view: {
      type: String,
      default:function(){
        return 'PlanA'
      }
    },
  },
  data: function () {
    return {
      down: true,
      hlines: [],
      vlines: [],
      hlinesTen: [],
      vlinesTen: [],
      decadd: 0.05, //增减百分比 4.8%
      w: 110,
      h: 110
      // initCellW:10,
      // myValue:10,
    }
  },
  computed: {
    ...mapState({
      name: state => state.name
    }),
    initCellW: {
      get() {
        return 10
      },
      set(newValue) {
        return newValue;
      },
    }
  },
  watch: {
    w: {
      handler: function () {
        this.initCellW = this.w * 0.008;
        this.genHline();
        this.genVline();
        this.genHline('ten');
        this.genVline('ten');
      },
      immediate: true
    },
    h: {
      handler: function () {
        this.initCellW = this.w * 0.008;
        this.genHline();
        this.genVline();
        this.genHline('ten');
        this.genVline('ten');
      },
    },
    initCellW () {
      this.onMwheel();
    }
  },
  created: function () {
    this.onMwheel(this.initCellW)
  },
  mounted() {
    this.w=document.getElementById('current-area').clientWidth
    this.h=document.getElementById('current-area').clientHeight
    // let _this=this
    let keyArr={}
    document.onkeydown = function(e) {
      keyArr[e.keyCode] = true
      if (keyArr[66] && keyArr[187])
      {
        // _this.myValue ++
      }
    }
    document.onkeyup = function(e) {
      keyArr[e.keyCode] = false
    }
  },
  updated() {
    this.w=document.getElementById('current-area').clientWidth
    this.h=document.getElementById('current-area').clientHeight
  },
  methods: {
    // 鼠标事件
    onMwheel: function (evt) {
      var event = evt ? evt : window.event || event;
      if (event.detail) {
        this.down = event.detail > 0;
      } else {
        this.down = event.wheelDelta < 0
      }
      if (this.down) {
        this.initCellW = this.initCellW * (1 - this.decadd);
      } else {
        this.initCellW = this.initCellW * (1 + this.decadd);
      }

      if (this.initCellW < 5) {
        this.initCellW = 50;
      }
      if (this.initCellW > 50) {
        this.initCellW = 10;
      }
      this.genHline();
      this.genVline();

      this.genHline('ten');
      this.genVline('ten');

    },
    // 生成横线
    genHline: function (ten) {
      var starty
      let _this=this
      if (ten) {
        _this.hlinesTen = [];
        starty = _this.h / 2 - _this.initCellW * 10;
        while (starty > 5) {
          _this.hlinesTen.push({ x1: 0, y1: starty, x2: _this.w, y2: starty });
          starty = starty - _this.initCellW * 10;
        }
        starty = _this.h / 2 + _this.initCellW * 10;
        while (starty < _this.h) {
          _this.hlinesTen.push({ x1: 0, y1: starty, x2: _this.w, y2: starty });
          starty = starty + _this.initCellW * 10;
        }
      } else {
        _this.hlines = [];
        starty = _this.h / 2 - _this.initCellW;
        while (starty > 5) {
          _this.hlines.push({ x1: 0, y1: starty, x2: _this.w, y2: starty });
          starty = starty - _this.initCellW;
        }
        starty = _this.h / 2 + _this.initCellW;
        while (starty < _this.h) {
          _this.hlines.push({ x1: 0, y1: starty, x2: _this.w, y2: starty });
          starty = starty + _this.initCellW;
        }
      }
    },
    //生成竖线
    genVline: function (ten) {
      var startx
      let _this=this
      if (ten) {
        _this.vlinesTen = [];
        startx = _this.w / 2 - _this.initCellW * 10;
        while (startx > 5) {
          _this.vlines.push({ x1: startx, y1: 0, x2: startx, y2: _this.h });
          startx = startx - _this.initCellW * 10;
        }
        startx = _this.w / 2 + _this.initCellW * 10;
        while (startx < _this.w) {
          _this.vlines.push({ x1: startx, y1: 0, x2: startx, y2: _this.h });
          startx = startx + _this.initCellW * 10;
        }
      } else {
        _this.vlines = [];
        startx = _this.w / 2 - _this.initCellW;
        while (startx > 5) {
          _this.vlines.push({ x1: startx, y1: 0, x2: startx, y2: _this.h });
          startx = startx - _this.initCellW;
        }
        startx = _this.w / 2 + _this.initCellW;
        while (startx < _this.w) {
          _this.vlines.push({ x1: startx, y1: 0, x2: startx, y2: _this.h });
          startx = startx + _this.initCellW;
        }
      }
    }
  }
}
</script>

<style scoped>
#current-area{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
