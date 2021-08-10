<template>
    <m-card>
        <h4>Sample Panel</h4>
    </m-card>
</template>

<script>

export default {
    name: 'SamplePanel',
    data() {
        return {
        }
    },
    methods: {
        OnEnter(e) {
            console.log(e);
        }
    }
}
</script>