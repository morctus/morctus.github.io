<template>
  <div class="container">
    <Header title="A GAME OF THRONES"/>
    <Tasks :tasks="tasks"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'

export default {
  name: 'App',
  components: {
    Header,
    Tasks
  },
  data() {
    return {
      tasks: []
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        name: 'Ned Stark',
        land: 'Winterfell',
        status: 'Dead',
        weapon: 'Wolf\'s Bane',
        reminder: true
      },
      {
        id: 2,
        name: 'Tyrion Lannister',
        land: 'Lannister',
        status: 'Alive',
        weapon: 'Axe',
        reminder: false
      },
      {
        id: 3,
        name: 'Theon Greyjoy',
        land: 'Greyjoy',
        status: 'Alive',
        weapon: 'Deep Pain',
        reminder: false
      },
      {
        id: 4,
        name: 'Daenerys Targaryen',
        land: 'Westeros',
        status: 'Dead',
        weapon: 'A Fucking Dragon',
        reminder: true
      }

    ]
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  max-width: 800px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 3px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn{
  display: inline-block;
  background: black;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  transition-duration: 0.5s;
}
.btn:hover{
  transition-duration: 0.5s;
  border: black 3px solid;
}
</style>
