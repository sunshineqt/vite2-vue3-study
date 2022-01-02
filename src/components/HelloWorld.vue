<script setup>
import { ref, defineEmits, defineProps} from 'vue';
// 现在defineEmits, defineProps都不需要主动导入了

import request from 'utils/request';

// 1. 直接导入组件
import Comp from '@/components/Comp.vue'

// 2. 输入：属性定义
defineProps({
  msg: String
})


// 3. 输出：定义事件
const emit = defineEmits(['myclick'])

const onClick = () => {
  emit('myclick');
}

const count = ref(0)

try { 
  const users = await request('/users');
  console.log(users);
} catch(error) {
  console.log(error);
}

// 请求mock api
// fetch('/api/users').then((res) => res.json()).then((data)=>{
//   console.log(data);
// })

</script>

<template>
  <div>
    <Comp />
    <h1>{{ msg }}</h1>
    <p @click="$store.commit('add')">counter: {{$store.state.counter}}</p>
    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentation
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <!-- <button @click="emit('myclick')">emit</button> -->
    <el-button type="primary" @click="onClick">emit</el-button>
    <el-input v-model="count" placeholder="input"></el-input>
  </div>
</template>


