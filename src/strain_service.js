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
        const strainInfo = {
            
            strain: {
                name: nameValue.value,
                category: categoryValue.value,
                thc: thcValue.value,
                cbd: cbdValue.value,
                grower_id: dropDown.value

            }
        }
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
        const strainInfo = {
            name,
            category,
            thc,
            cbd
        }

        const configObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(strainInfo)
        }
        
        fetch(`${this.port}/strains/${id}`, configObject)
        .then( strain.render() )
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