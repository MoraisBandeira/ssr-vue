// app.js (shared between server and client)
import { createSSRApp } from 'vue'

export function createApp() {
  return createSSRApp({
    data: () => ({ 
      count: 1 ,
      name:null
    }),
    mounted(){
      axios.get('https://pokeapi.co/api/v2/berry/2/').then(res=>console.log(this.name = res.data.name))
    },
    methods:{
      test(){
        this.count++
      }
    },
    template: `<button type="button" class="btn btn-success" @click="test()">{{ count }}</button>{{ name }}`

  })
}