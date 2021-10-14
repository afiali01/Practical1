
const dataFetcher = async function(){
    const dataStore = [];
    const response  = await fetch('https://raw.githubusercontent.com/afiali01/Practical1/main/todos.json')
    const data = await response.json();
    for(i=0; i<5; i++){
        dataStore[i] = data[i]
    }
    return dataStore
}

export default dataFetcher