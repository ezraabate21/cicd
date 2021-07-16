export const state = () =>({
    tasks: [
        {
            id:1,
            name:'task1',
            day:'02/02/2020',
            reminder: true
        },
        {
            id:2,
            name:'task2',
            day:'03/03/2020',
            reminder: true
        },
        {
            id:3,
            name:'task3',
            day:'04/04/2020',
            reminder: false
        },
        {
            id:4,
            name:'task4',
            day:'18/04/2020',
            reminder: true
        }

    ]
})


export const getters = {

}




export const actions = {
    update({commit}, id){
        commit("updatereminder", id)
    }, 

    add({commit}, newdata){
        commit("addTask", newdata)
    },
    delete({commit},id){
        commit("deleteTask",id)
    }
}



export const mutations = {
    updatereminder(state,id){
        state.tasks = state.tasks.map((task) => {
            task.id === id ? {...task , reminder: !task.reminder}: task
        })
    },

    addTask(state, newdata){
       state.tasks.push(newdata)
       alert('Successfully added' + ' '+ newdata.name)
        this.$router.push('/tasks')
    },

    deleteTask(state,id){
        state.tasks = state.tasks.filter(task => task.id !== id)
        alert('Successfully removed')
    }
}