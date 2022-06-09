<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";
const count = ref(0);
const inc = () => ++count.value;
const dec = () => --count.value;
const reset = () => {
  count.value = 0;
};

watch(count, (newValue: number, oldValue: number) => {
  console.log("The old counter value is: " + oldValue);
  console.log("The new counter value is: " + newValue); // 或：console.log("The new counter value is: " + count.value);
});

/*     watchEffect(() => {
      // 这个副作用在 DOM 更新之前运行，因此，模板引用还没有持有对元素的引用。
      console.log("The new counter value is: " + count.value);
    }); */
</script>

<template>
  <main class="Counter">
    <h1>Days Since Last Incident</h1>
    <p class="count">{{ count }}</p>
    <section class="controls">
      <button @click="inc">Increment</button>
      <button @click="reset">Reset</button>
      <button @click="dec">Decrement</button>
    </section>
    <section class="controls">
      <form @submit.prevent="() => {}">
        <label htmlFor="set-to">Set Count</label>
        <input id="set-to" type="number" v-model="count" />
      </form>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/App.scss";
</style>
