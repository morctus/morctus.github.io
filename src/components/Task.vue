<template>
<div :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>{{task.name}}
        <i @click="onDelete(task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.weapon }}</p>
</div>
</template>

<script>
export default {
    name: 'Task',
    props: {
        task: Object
    },
    methods: {
        onDelete(id) {
            this.$emit('delete-task', id)
        }
    }
}
</script>

<style scope>
.fas {
    color: red;
}

.task {
    background: lightgray;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

.task.reminder {
    border-left: 5px solid black;
}

.task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.task p {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>