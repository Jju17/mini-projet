let emailCollectorForm = document.getElementById("Email-Collector");

let mainContentHTML = 
`
    <h3 class="mc-h3">En savoir plus sur moi!</h3>
    <p class="mc-register">REGISTER NOW</p>
    <p class="mc-p">Actuellement étudiant en informatique à l’ephec de Louvain-La-Neuve, je cherche tous les jours à m’améliorer et partager mes nouvelles découvertes, si cela vous intéresse, n’hésitez pas à vous abonner à cette newsletter mensuelle!</p>

    <form action="#" class="mc-form" id="Email-Collector" method="POST">
        <input name="firstName" class="mc-button" type="text" placeholder="prénom">
        <input name="emailAddress" class="mc-button" type="email" placeholder="email">
        <button class="mc-button-submit" type="submit">REGISTER</button>
    </form>
    <p class="mc-information">Je ne partage jamais vos informations sans votre permission</p>
`


document.getElementById('intro-title').addEventListener("click", event => {
    document.getElementById('mainContent').innerHTML = mainContentHTML;
})



emailCollectorForm.addEventListener("submit", event => {

    event.preventDefault();

   
    let ourFormData = new FormData(event.target)
    
    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")
    

        
    let updatedHtmlContent = `
        <h2>Félicitations, ${userFirstName}!</h2>

        <p>Tu es bien abonné à ma Newsletter</p>
        
        <p class="fine-print">Je t'enverrai régulièrement des infos sur :  ${userEmailAddress}</p>
    `

    let updatedContentContainer = document.getElementById("mainContent")
    updatedContentContainer.innerHTML = updatedHtmlContent
})