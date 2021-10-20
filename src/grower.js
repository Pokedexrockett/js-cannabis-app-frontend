class Grower {
    constructor({name, id, strains}){
        
        this.name = name
        this.id = id
        this.strains = strains
    }

    addToDropDown(){
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        dropDown.appendChild(option)
        const optionTwo = option.cloneNode(true)
        filterDropdown.appendChild(optionTwo)
    }
}