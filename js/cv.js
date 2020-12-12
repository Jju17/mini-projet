
const cvHTML = `

`

fetch("../fixtures/datacv.json")
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));


document.getElementById("cvButton").addEventListener("click", () => {
    document.getElementById("mainContent").innerHTML = cvHTML;
})