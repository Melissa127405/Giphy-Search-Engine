document.addEventListener('DOMContentLoaded', () => {Element.getElementById('search-form').addEventListener('submit', handleSearch);}) 
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





