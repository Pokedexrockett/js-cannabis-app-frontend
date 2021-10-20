class Strain {
    static all = [];
    static cont = document.getElementById("strains-cont")
    constructor({id, name, category, thc, cbd, grower_id, grower}){
        this.id = id
        this.name = name
        this.category = category
        this.thc = thc
        this.cbd = cbd
        this.grower_id = grower_id
        this.grower = grower
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `strain-${id}`;
        Strain.all.push(this)
        

    }

    static findById(id){
        return Strain.all.find(strain => strain.id === parseInt(id))
    }


    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}" id="strain-container-${this.id}">
        <h2 class="name">Name: ${this.name}</h2>
        <p class="category">Category: ${this.category}</p>
        <p class="thc">THC: ${this.thc}</p>
        <p class="cbd">CBD: ${this.cbd}</p>
        <p class="grower">Grower: ${this.grower.name}</p>
        </div>
        <button class="edit" data-id=${this.id}>Edit Strain</button>
        <button class="delete" data-id=${this.id}>Delete Strain</button>

        
        `
        this.element.querySelector(".edit").addEventListener("click", this.createEditForm)
        this.element.querySelector(".delete").addEventListener("click", function(e){
            strainCall.deleteStrain(e)
        })
        return this.element
    }

    createEditForm(){
        // debugger
        const div =document.getElementById(`strain-container-${this.dataset.id}`);
        const strain = Strain.findById(this.dataset.id)
        const editForm = document.createElement("form")
        editForm.innerHTML = `
        <input type="text" class="edit-name" value="${strain.name}">
        <input type="text" class="edit-category" value="${strain.category}">
        <input type="text" class="edit-thc" value="${strain.thc}">
        <input type="text" class="edit-cbd" value="${strain.cbd}">
        <input type="text" class="edit-grower" value="${strain.grower.name}">
        <input type="submit" value="save">
        `
        div.appendChild(editForm)

        editForm.addEventListener("submit", function(e){
            e.preventDefault()
            strainCall.updateStrain(strain)
        })
    }

 


    

    attachToDom(){
        
        Strain.cont.appendChild(this.render())
    }


}