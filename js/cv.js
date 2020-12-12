
var datacv = [
    {
        "id": 1,
        "contentTitle": "Contact",
        "phoneNumber": "0479506841",
        "email": "julien.rahier@gmail.com",
        "addess": "8/002 Rue Constantin Meunier 1348 Louvain-La-Neuve Belgique",
        "linkedin": "@julien-rahier"
        
    },
    {
        "id": 2,
        "contentTitle": "Expérience",
        "actualJobs": [
            {
                "id": "1",
                "title": "Cook4Me",
                "data": "",
                "post": "Fondateur / Dev",
                "details": "Conception d'une application mobile & site web pour une startup étudiante"
              }
          ],
        "doneJobs": [
            {
                "id": "1",
                "title": "ESN Louvain-La-Neuve (Erasmus Student Network)",
                "data": "",
                "post": "IT Manager",
                "details": "Maintenante du site internet www.esnlln.org, Gestion du site en étroite collaboration avec les teams events et le communication manager"
            },
            {
                "id": "2",
                "title": "Oxfam",
                "data": "",
                "post": "Bénévole",
                "details": "Arrangement des rayons, Caisse"
            },
            {
                "id": "3",
                "title": "H&M",
                "data": "",
                "post": "Intérimaire",
                "details": "Arrangement des rayons,Mise en place"
            },
            {
                "id": "4",
                "title": "Traiteur Léonard",
                "data": "",
                "post": "Job étudiant, serveur",
                "details": "Service, Montage"
            },
            {
                "id": "5",
                "title": "Upper Organic",
                "data": "",
                "post": "Job étudiant",
                "details": "Production de jus detox & vegetal mix"
            }
            
        ]
      }
]
  





const cvHTML = `
    <div class="cv-main-title">
        <h2>Julien Rahier</h2>
        <p>Etudiant en informatique</p>
    </div>
    <div>
        <div class="cv-contact">
            <h3>CONTACT</h3>
            <p>GSM : ${datacv[0].phoneNumber}</p>
            <p>EMAIL : ${datacv[0].email}</p>
            <p>ADRESSE : ${datacv[0].addess}</p>
            <p>LINKEDIN : ${datacv[0].linkedin}</p>
        </div>
        <div class="cv-experience">
            <h3>EXPERIENCE</h3>
            <div class="cv-experience-now">
                <h4>En ce moment</h4>
                ${datacv[1].actualJobs.map(job => (
                    `
                    <div>
                        <h5>${job.title}</h5> 
                        <p>${job.post}</p>
                        <p>${job.details}</p>
                    </div>
                    `
                ))}
            </div>
            <div class="cv-experience-previous">
                <h4>Années passées</h4>
                ${datacv[1].doneJobs.map(job => (
                    `
                    <div>
                        <h5>${job.title}</h5> 
                        <p>${job.post}</p>
                        <p>${job.details}</p>
                    </div>
                    `
                ))}
            </div>
        </div>
    </div>
`


document.getElementById("cvButton").addEventListener("click", () => {
    document.getElementById("mainContent").innerHTML = cvHTML;
})




