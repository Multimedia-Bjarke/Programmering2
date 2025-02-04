
  //Create an object
let mousepad = {
    id: 4,
    form: "rektangulaer",
    farve: "soelv",
    tekstur: "glat",
    }
    
    resultat.innerHTML = mousepad.form + "<br>"
    
    resultat.innerHTML += mousepad.farve + "<br>"
    
    resultat.innerHTML 

  //Skriv til DOM - via backtick
    resultat.innerHTML = `
    <h2> ${mousepad.farve} </h2> ${mousepad.form}
    `
    