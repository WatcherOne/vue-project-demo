<template>
  <div class="index-page">
    {{ name }}
    <div v-on:click="addCount()">增加1</div>
    <div v-on:click="delCount()">减少1</div>
    {{ number }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';  // 作用自己体会吧！

export default {
  data() {
    return {
      number: 0
    }
  },
  // 视图渲染后的回调函数
  mounted() {},
  // 得到state里面的数据,是将store中的"getters"映射到局部计算属性中
  // 也可以改名字(newName: 'name')，然后直接可以得到值
  computed: mapGetters([
    'name',
    'sex',
    'birthday',
    'address',
    'count'
  ]),
  // 更改state中的状态唯一方法是提交mutation
  // 然后通过store.commit来唤醒相同类型的mutation
  // 因为mutation与commit已经封装好了，需要用直接调用函数
  // mutation: this.$store.mutation.changeCount();
  // commit：  this.$store.actions.changeCount()
  methods: {
    addCount() {
      console.log(this.count, this.number);
      this.$store.commit('addCount', this.count);
      this.number++;
    },
    delCount() {
      this.$store.commit('delCount', this.count)
    }
  }
}
</script>

<style scoped></style>
