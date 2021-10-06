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

        debugger
        fetch(this.port + `/strains`)
        .then(response => response.json())
        .then(data => console.log(data))
    }
}