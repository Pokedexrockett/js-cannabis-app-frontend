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
        this.element.addEventListener('click', this.handleClick)
        Strain.all.push(this)
        

    }

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h2 class="name">${this.name}</h2>
        <p class="category">${this.category}</p>
        <p class="thc">${this.thc}</p>
        <p class="cbd">${this.cbd}</p>
        </div>
        <button class="edit" data-id=${this.id}>Edit Strain</button>
        <button class="delete" data-id=${this.id}>Delete Strain</button>

        
        `
        return this.element
    }

    createEditForm(){
        const div = this.element.querySelector('div');
        for(const element of div.children){
            let inputValue = element.innerText;
            let name = element.classList[0]
            element.outerHTML = `<input type="text"  class="edit-${name}" value="${inputValue}" />`
        }
        
    }

    updatedItemInfo(){
        this.name = this.element.querySelector(".edit-name").value;
        this.category = this.element.querySelector(".edit-category").value;
        this.thc = this.element.querySelector(".edit-thc").value;
        this.cbd = this.element.querySelector(".edit-cbd").value;
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
            this.updatedItemInfo()
        }
    }

    

    attachToDom(){
        
        Strain.cont.appendChild(this.render())
    }


}