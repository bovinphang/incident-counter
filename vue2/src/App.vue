<!-- App.vue -->

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    components: {},
    watch: {
        count(val: number) {
            console.log('The new counter value is: ' + val);
        }
    }
})
export default class Counter extends Vue {
    count = 0;

    private computed(): void {}

    // 生命周期钩子 (按照它们被调用的顺序):

    // 1. 在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用。
    private beforeCreate(): void {
        console.log('1. beforeCreate');
    }

    // 2. 在实例创建完成后被立即同步调用。
    private created(): void {
        console.log('2. created');
    }

    // 3. 在挂载开始之前被调用：相关的 render 函数首次被调用。
    private beforeMount(): void {
        console.log('3. beforeMount');
    }

    // 4. 实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。
    private mounted(): void {
        console.log('4. mounted');
    }

    // 5. 在数据发生改变后，DOM 被更新之前被调用。
    private beforeUpdate(): void {
        console.log('5. beforeUpdate');
    }

    // 6. 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。
    private updated(): void {
        console.log('6. updated');
    }

    // 7. 被 keep-alive 缓存的组件激活时调用。
    private activated(): void {
        console.log('7. activated');
    }

    // 8. 被 keep-alive 缓存的组件失活时调用。
    private deactivated(): void {
        console.log('8. deactivated');
    }

    // 9. 实例销毁之前调用。
    private beforeDestroy(): void {
        console.log('9. beforeDestroy');
    }

    // 10. 实例销毁后调用。
    private destroyed(): void {
        console.log('10. destroyed');
    }

    // method
    public inc(): number {
        return this.count++; // 递增
    }
    public dec(): number {
        return this.count--; // 递减
    }
    public reset(): void {
        this.count = 0; // 重置
    }
}
</script>

<template>
    <div class="Counter">
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
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/App.scss';
</style>
