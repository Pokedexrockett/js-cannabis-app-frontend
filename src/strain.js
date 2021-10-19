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
        // this.element.addEventListener('click', this.handleClick)
        Strain.all.push(this)
        

    }

    static findById(id){
        return Strain.all.find(strain => strain.id === parseInt(id))
    }


    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}" id="strain-container-${this.id}">
        <h2 class="name">${this.name}</h2>
        <p class="category">${this.category}</p>
        <p class="thc">${this.thc}</p>
        <p class="cbd">${this.cbd}</p>
        <p class="grower">${this.grower.name}</p>
        </div>
        <button class="edit" data-id=${this.id}>Edit Strain</button>
        <button class="delete" data-id=${this.id}>Delete Strain</button>

        
        `
        this.element.querySelector(".edit").addEventListener("click", this.createEditForm)
        return this.element
    }

    createEditForm(){
        // debugger
        const div =document.getElementById(`strain-container-${this.dataset.id}`);
        const strain = Strain.findById(this.dataset.id)
        // for(const element of div.children){
        //     let inputValue = element.innerText;
        //     let name = element.classList[0]
        //     element.outerHTML = `<input type="text"  class="edit-${name}" value="${inputValue}" />`
        // }
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

    updatedStrainInfo(){
        // this.name = this.element.querySelector(".edit-name").value;
        // this.category = this.element.querySelector(".edit-category").value;
        // this.thc = this.element.querySelector(".edit-thc").value;
        // this.cbd = this.element.querySelector(".edit-cbd").value;
        strainCall.updateStrain(this)
        
    }

    handleClick = (e) => {
        if(e.target.innerText === "Edit Strain"){
            console.log(e.target)
            e.target.innerText = "Save Strain"
            this.createEditForm()
        }else if(e.target.innerText === "Delete Strain"){
            console.log(e.target)
            strainCall.deleteStrain(e)
        }else if(e.target.innerText === "Save Strain"){
            console.log("save works")
            e.target.innerText = "Edit Strain"
            this.updatedStrainInfo()
        }
    }

    

    attachToDom(){
        
        Strain.cont.appendChild(this.render())
    }


}