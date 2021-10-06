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
        <button class="edit" data-id=${this.id}>Edit Strain</button>
        <button class="delete" data-id=${this.id}>Delete Strain</button>

        </div>
        `
        return this.element
    }

    handleClick(e){
        if(e.target.innerText === "Edit Strain"){
            console.log(e.target)
        }else if(e.target.innerText === "Delete Strain"){
            console.log(e.target)
        }else if(e.target.innerText === "Save Strain"){

        }
    }

    attachToDom(){
        
        Strain.cont.appendChild(this.render())
    }


}