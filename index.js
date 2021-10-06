 const port = `http://localhost:3000`;
 const strainCall = new StrainService(port);
 const form = document.getElementById("strain-form")
 const dropDown = document.getElementById("grower-dropdown")

 strainCall.getStrains('cannabis-app-')