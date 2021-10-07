 const port = `http://localhost:3000`;
 const strainCall = new StrainService(port);
 const growerCall = new GrowerService(port);
 const form = document.getElementById("strain-form");
 const dropDown = document.getElementById("grower-dropdown");
 const growerInput = document.getElementById('grower-id')
 const nameValue = document.getElementById('strain-name')
 const categoryValue = document.getElementById('strain-category');
 const thcValue = document.getElementById('strain-thc');
 const cbdValue = document.getElementById('strain-cbd');

 strainCall.getStrains()
 growerCall.getGrowers()


 form.addEventListener('submit', handleSubmit)

 function handleSubmit(e){
     e.preventDefault();
     strainCall.createStrains()
     
 }
 