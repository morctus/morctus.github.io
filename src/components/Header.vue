<template>
    <header>
        <h1>{{title}}</h1>
        <Button color = "red" text = "Targaryen"/>
        <Button color = "grey" text = "Stark"/>
        <Button color = "green" text = "Baratheon"/>
        <Button color = "navy" text = "Greyjoy"/>
        <Button color = "red" text = "Lannister"/>
    </header>
</template>

<script>
    import Button from './Button'

    export default {
        name: 'Header',
        props: {
            title: String,
        },
        components: {
            Button
        }
    }
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>