class GrowerService {
    constructor(port){
        this.port = port
    }

    getGrowers(){
        fetch(`${this.port}/growers`)
        .then(response => response.json())
        .then( json => {
            json.forEach(element => {
                
                const g = new Grower(element)
                g.addToDropDown()
            })
            filterDropdown.addEventListener("change", function(e){
                document.getElementById("strains-cont").innerHTML = ""
                Strain.all.forEach(strain => {
                    
                    if (strain.grower.id === parseInt(e.target.value)){
                        strain.attachToDom()
                    }
            
                    else if (parseInt(e.target.value) === 0 ){
                        strain.attachToDom()
                    } 
            
                })
            })
        })
    }
}
