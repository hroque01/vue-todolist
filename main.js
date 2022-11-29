const { createApp } = Vue

createApp({
  data() {
    return {
        error: false,
        newTask: '',
        tasks: [
            {
                text: 'Fare i compiti', 
                done: false
            },
            {
                text: 'Fare la spesa', 
                done: true
            },
            {
                text: 'Fare il bucato', 
                done: false
            }
        ]
    }
  },
  methods: {
    addTask(){
        if (this.newTask.length < 5 || this.newTask === ''){

        } else {
            this.tasks.push({ text: this.newTask }); 
        }

        this.newTask = ''
    },
    removeTask(indexArgument){
        this.tasks.splice(indexArgument, 1);
    }
    
  }
}).mount('#app')

