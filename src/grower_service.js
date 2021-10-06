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
                
            })
        })
    }
}