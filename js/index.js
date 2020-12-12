let emailCollectorForm = document.getElementById("Email-Collector");

// console.log(emailCollectorForm);

emailCollectorForm.addEventListener("submit", event => {

    event.preventDefault();

   
    let ourFormData = new FormData(event.target)
    
    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")
    
    // console.log(userFirstName, userEmailAddress)
        
    let updatedHtmlContent = `
        <h2>Félicitations, ${userFirstName}!</h2>

        <p>Tu es bien abonné à ma Newsletter</p>
        
        <p class="fine-print">Je t'enverrai régulièrement des infos sur :  ${userEmailAddress}</p>
    `

    let updatedContentContainer = document.getElementById("Main-Content")
    updatedContentContainer.innerHTML = updatedHtmlContent
})