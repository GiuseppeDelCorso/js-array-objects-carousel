
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

let immagineAttiva = 0;







document.getElementById("avanti").addEventListener("click",function(){
    
    immagineAttiva++
    let container = document.getElementById("Container")
    console.log(slide[immagineAttiva].immagine)
    console.log(slide[immagineAttiva].titolo)
    console.log(slide[immagineAttiva].sottotitolo)
    container.innerHTML = "<img src="+slide[immagineAttiva].immagine+" width='600' height='400'/>"
    titolo.innerHTML = slide[immagineAttiva].titolo
    sottotitolo.innerHTML = slide[immagineAttiva].sottotitolo
    
    
});
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
    
});***/