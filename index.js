 const port = `http://localhost:3000`;
 const strainCall = new StrainService(port);
 const form = document.getElementById("strain-form");
 const dropDown = document.getElementById("grower-dropdown");
 const nameValue = document.getElementById('strain-name')

 strainCall.getStrains('cannabis-app-')

 form.addEventListener('submit', handleSubmit)

 function handleSubmit(e){
     e.preventDefault();
     strainCall.createStrains()
     
 }
 