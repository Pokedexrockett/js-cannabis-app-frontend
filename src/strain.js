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

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h2 class="name">${this.name}</h2>
        <p class="category">${this.category}</p>
        </div>
        `
        return this.element
    }

    attachToDom(){
        
        Strain.cont.appendChild(this.render())
    }


}