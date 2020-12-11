let emailCollectorForm = document.getElementById("Email-Collector");

console.log(emailCollectorForm);

emailCollectorForm.addEventListener("submit", event => {

    event.preventDefault();

   
    let ourFormData = new FormData(event.target)
    
    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")
    
    console.log(userFirstName, userEmailAddress)
        
    let updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>

        <p>You're on your way to becoming a good coder!</p>
        
        <p class="fine-print">You will get monthly coder tips sent to: ${userEmailAddress}</p>
    `

    let updatedContentContainer = document.getElementById("Main-Content")
    updatedContentContainer.innerHTML = updatedHtmlContent
})