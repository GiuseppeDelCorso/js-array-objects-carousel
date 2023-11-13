let immagineCorrente = 0;
const immagini = document.querySelectorAll("#container img");
/**immagini[immagineCorrente].classList.add("active")**/



const slide = [
    {
        immagine: "01.webp",
        titolo: "spiderman",
        sottotitolo: "questoespiderman",
    },
    {
        immagine: "02.webp",
        titolo: "batman",
        sottotitolo: "questoesBatman",
    },
    {
        immagine: "03.webp",
        titolo: "winx",
        sottotitolo: "questoewinx",
    },


]

let container = document.getElementById("Container")
console.log(slide[0].immagine)
console.log(slide[0].titolo)
console.log(slide[0].sottotitolo)

container.innerHTML = "<img src="+slide[0].immagine+" width='600' height='400'/>"
titolo.innerHTML = slide[0].titolo
sottotitolo.innerHTML = slide[0].sottotitolo



/**slide.forEach((element,index,array )=> {
    
    let container = document.getElementById("Container")
    let titolo =  document.getElementById("titolo")
    let sottotitolo = document.getElementById("sottotitolo")
    container.innerHTML = "<img src="+element.immagine+" width='600' height='400'/>"
    titolo.innerHTML = "<p>"+element.titolo+"</p>"
    sottotitolo.innerHTML = element.sottotitolo
   
    
    
    
    console.log(element.immagine);
    console.log(element.titolo);
    console.log(element.sottotitolo);
    
});

document.getElementById("avanti").addEventListener("click",function(){

    

});**/