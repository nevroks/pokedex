<template>
    <input :value="modelValue" @input="updateValue" class="input">
</template>

<script>
export default {
    name:"Input",
    props:{
        modelValue:String | Number
    },
    methods:{
        updateValue(event){
        this.$emit('update:modelValue',event.target.value)
        }
    }}
</script>

<style scoped>
.input{
    border: 1px solid black;
    background-color: var(--main-font-color);
    border-radius: 10px;
    padding: 5px 10px;
    color: white;
}
</style>