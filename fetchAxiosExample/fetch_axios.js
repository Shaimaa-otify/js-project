/* This is a prctice on how to get data from JSON files using:
fetch
axios

// fetch works in browers but for node,.js, it needs extra libraries like node-fetch
// it is a synchronous function
//It support JSON parsing but needs explicit .JSON conversion
*/


//axios is promise-based. It works with browers and node.js environments
axios.get("./health_article.json")
    .then(response=> {
        console.log("Axios data1", response.data)// axios automatically parses JSON, no need to add JSON.parse
        let axiosData= response.data;
        console.log(axiosData)
        })
    .catch(error=>{
        console.log("Error", error)}) //built in error handeling



fetch("./health_article.json")
    .then(response => {
        if(!response.ok){ //manual error handling
            throw new Error(`http error status: ${response.status}`)
        }
        return response.json() //Must manually parse json
    })
    .then (data=> { 
        console.log("fetch data1", data);
        let fetchData= data;
        console.log(fetchData)
    })
    .catch(error=> console.log("Error", error))

let insideasyncRetrievedArticle;
let thensyncRetrievedArticle;
let outsideasyncRetrievedArticle;



async function fetchData() {
    try {
        const response = await fetch("./health_article.json");
        console.log("await fetch response", response)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }    
        const insideasyncRetrievedArticle = await response.json(); // Assigning data to a variable
        console.log("awaitfetch inside", insideasyncRetrievedArticle)
    } catch (error) {
        console.error("Error:", error);
        return null; // Return null in case of an error
    }
}

// Call fetchData and ensure dependent logic runs afterward
fetchData().then(() => {
    console.log("thensyncRetrievedArticle:", insideasyncRetrievedArticle);
});
    
    
console.log("outsyncRetrievedArticle:",insideasyncRetrievedArticle) // will still get undefined if executed before data is retrieved

//Instead of relying on a global variable, return the data from an async function and use await when needed.
async function fetchData() {
    try {
        const response = await fetch("./health_article.json");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        return await response.json(); // Return the fetched data
    } catch (error) {
        console.error("Error:", error);
        return null; // Handle errors
    }
}

// Use the function and assign the result properly
async function useData() {
    const retrieved_article = await fetchData(); // Wait for data
    console.log("Now I can use the data:", retrieved_article);
}

useData();
