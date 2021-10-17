

const dataFetcher = async function(){
    const url = 'https://raw.githubusercontent.com/afiali01/Practical1/main/todos.json'
    console.log(url)
    const response = await fetch(url);
    console.log(response)
    const data = await response.json();
    console.log(data)
    return data
}

export default dataFetcher