//'https://raw.githubusercontent.com/afiali01/Practical1/main/todos.json'
const dataFetcher = async function(){
    let store = null
    const url = './data/todos.json'
    const response = await fetch(url);
    const data = await response.json();
    store = [...data]
    return store
}

export default dataFetcher