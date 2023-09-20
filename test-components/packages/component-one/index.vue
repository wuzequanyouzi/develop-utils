<template>
    <div @click="handleClick">
        ComponentOne
    </div>
</template>

<script>
export default {
    name: 'ComponentOne',
    methods: {
        handleClick() {
            alert('xixi1111')
        }
    }
}
</script>

<style lang="scss" scoped></style>