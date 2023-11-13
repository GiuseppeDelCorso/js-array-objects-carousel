let immagineCorrente = 0;
const immagini = document.querySelectorAll("#container img");
/**immagini[immagineCorrente].classList.add("active")**/



const slide = [
    {
        immagine: "01.webp",
        titolo: "spiderman",
        sottotitolo: "questoespiderman",


    },


]

slide.forEach((element,index,array )=> {
    
    let container = document.getElementById("imgContainer")

    container.innerHTML += element.immagine
    
    console.log(element.immagine);
    console.log(element.titolo);
    console.log(element.sottotitolo);

});
