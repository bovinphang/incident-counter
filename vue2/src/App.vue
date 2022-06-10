<script>
export default {
    name: 'app',
    components: {},
    // 数据
    data() {
        return {
            count: 0
        };
    },
    computed: {},

    watch: {
        count: function (val) {
            console.log('The new counter value is: ' + val);
        }
    },
    //生命周期钩子 (按照它们被调用的顺序):
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    activated() {},
    deactivated() {},
    beforeDestroy() {},
    destroyed() {},
    // 方法
    methods: {
        inc: function () {
            ++this.count;
        },
        dec: function () {
            --this.count;
        },
        reset: function () {
            this.count = 0;
        }
    }
};
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
