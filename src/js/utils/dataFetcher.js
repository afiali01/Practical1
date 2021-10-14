const dataFetcher = function(){
    let dataStore = [""];

    fetch('https://raw.githubusercontent.com/afiali01/Practical1/main/todos.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
    
    return dataStore[0]
}

export default dataFetcher