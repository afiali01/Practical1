//'https://raw.githubusercontent.com/afiali01/Practical1/main/todos.json'
const dataFetcher = async function(){
    const url = 'todos.json'
    
    const response = await fetch(url);
    const data = await response.json();

    return data
}

export default dataFetcher