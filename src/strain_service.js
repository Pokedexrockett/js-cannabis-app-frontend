class StrainService {
    constructor(port){
        this.port = port
    }

    getStrains(){
        fetch(this.port + `/strains`)
        .then(response => response.json())
        .then(data => {
            for(const strain of data){
               let s = new Strain(strain) 
               s.attachToDom()
            }
        })
        .catch()
    }
    
    createStrains(){
        // debugger
        const strainInfo = {
            strain: {
                name: nameValue.value,
                category: categoryValue.value,
                thc: thcValue.value,
                cbd: cbdValue.value,
                grower_id: dropDown.value,

            }
            
        }

        // debugger
        const configObject = {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(strainInfo)
        }

        
        fetch(this.port + `/strains`, configObject)
        .then(response => response.json())
        .then(data => {
            const s = new Strain(data)
            s.attachToDom()
        })
    }
    updateStrain(strain){
        
        const {name, category, thc, cbd, id} = strain
        const strainContainer = document.getElementById(`strain-container-${id}`)
        const strainInfo = {
            name: strainContainer.querySelector(".edit-name").value,
            category: strainContainer.querySelector(".edit-category").value,
            thc: strainContainer.querySelector(".edit-thc").value,
            cbd: strainContainer.querySelector(".edit-cbd").value
        }
        // this.name = this.element.querySelector(".edit-name").value;
        // this.category = this.element.querySelector(".edit-category").value;
        // this.thc = this.element.querySelector(".edit-thc").value;
        // this.cbd = this.element.querySelector(".edit-cbd").value;

        const configObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(strainInfo)
        }
        
        fetch(`${this.port}/strains/${id}`, configObject)
        .then(res => res.json())
        .then(strainObject => {
     
         strain.name = strainObject.name  
         strain.category = strainObject.category
         strain.thc = strainObject.thc
         strain.cbd = strainObject.cbd
         strain.render() 
        } )
        // .then(data => {
        //     // const s = new Strain(data)
        //     strain.render()
        // })
        
    }

    deleteStrain(e){
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        fetch(`${this.port}/strains/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(json => alert(json.message))
    }
   

}