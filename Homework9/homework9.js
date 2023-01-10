function FetchTodo(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function(data){
        console.log(data)
        return data.json()
    })
    .then(function(data){
        console.log(data)
    })
}