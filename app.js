const app = Vue.createApp({
    data(){
        return{
            firstName: 'Obi-wan',
            lastName: 'Kenobi',
            faction: 'Jedi',
            gender: 'Male',
            rank: 'Jedi Knight',
            picture: 'https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F792a2e626064e5c4ac1f3b781931ae1b.png'
            
        }
    }, 
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            //console.log(results)

            this.firstName = results[0].name.first,
            this.lastName = 'Grievous',
            this.faction = 'Sith',
            this.gender = 'Undefined',
            this.rank = 'Sith Marauder',
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')