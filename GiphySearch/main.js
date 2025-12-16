
function fetchGifs() {
    const apiKey = '1F6PjTQW3iN1eMsezymO6DPWQVGouYgU';
    let searchTerm = document.getElementById('search-OMG').value;
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => displayGifs(data.data))
        .catch(error => console.error('Error:', error));
}
                               
function displayGifs(gifs) {
    const responseContainer = document.getElementById('response-container');    
    console.log("Array after loop in fetchGifs:", gifs);
    gifs.forEach(gif => {
        const imageElement = document.createElement('img');
        imageElement.src = gif.images.fixed_width_small_still.url;
        responseContainer.appendChild(imageElement);
    });
}