document.addEventListener('DOMContentLoaded', () => 
{document.getElementById('featured-gifs').addEventListener('submit', handleSearch);})   
document.getElementsByClassName('giphyImages');
// Fetch gifs from Giphy API and display them
function handleSearch(event) {confirm('Are you sure you want to search for gifs?'); event.preventDefault(); const searchTerm = document.getElementById('search-OMG').value; fetchGifs(searchTerm);}


function fetchGifs(searchTerm) {
    const apiKey = '1F6PjTQW3iN1eMsezymO6DPWQVGouYgU';
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => displayGifs(data.data))
        .catch(error => console.error('Error:', error));
}
                               
function displayGifs(gifs) {
    const responseContainer = document.getElementById('response-container');    
    responseContainer.innerHTML = 'https://api.giphy.com/v1/gifs/search?api_key=1F6PjTQW3iN1eMsezymO6DPWQVGouYgU&q=OMG&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips';
    gifs.forEach(gif => {
        const imageElement = document.createElement('img');
        imageElement.src = gif.images.fixed_width_small_still.url;
        responseContainer.appendChild(imageElement);
    });
}

console.log("Array after loop in fetchGifs:", gifs);

    
// main.js
function processData() {
    const array = []; // Declare and initialize the array
    array.push(1, 2, 3); // Populate the array for the loop

    for (let index = 0; index < array.length; index++) {
        const element = array[index];   
        console.log(`Element at index ${index}: ${element}`);
        

    }
    console.log("Array after loop in processData:", array);
}
processData();


