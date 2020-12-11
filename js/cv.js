

fetch('../fixtures/data-cv.json')
    .then(response => response.json())
    .then(data => console.log(data))


const cvHTML = ``





document.getElementById("cvButton").addEventListener("click", () => {
    document.getElementById("mainContent").innerHTML = cvHTML;
})