 const port = `http://localhost:3000`;
 const strainCall = new StrainService(port);

 strainCall.getStrains()