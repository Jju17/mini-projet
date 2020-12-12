
const cvHTML = `

`
var mydata = JSON.parse(datacv);
console.log(mydata)

document.getElementById("cvButton").addEventListener("click", () => {
    document.getElementById("mainContent").innerHTML = cvHTML;
})