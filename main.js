let immagineCorrente = 0;
const immagini = document.querySelectorAll("#container img");
immagini[immagineCorrente].classList.add("active")



const slide = [
    {
        immagine: "01.webp",
        titolo: "spiderman",
        sottotitolo: "questoespiderman",


    },


]

slide.forEach((element,index,array )=> {
    
    console.log(element,index,array);

});
