let $set = document.querySelector(".set")
let $siguiente = document.querySelector(".siguiente")
let $input = document.querySelector(".url")
let capitulo = null
const verSerie = async (url)=>{
    const res = await fetch(url)
    console.log(res);
    const resdata = await res.text()
    console.log(resdata);
}
$set.addEventListener("click",()=>{
    let url = $input.value
    if ( url ){
        let a = url.split("/")
        a.forEach((item)=>{
            if(parseInt(item) && capitulo === null){
                capitulo = item
            }
        })
        console.log(capitulo);
        verSerie( url )
    }
})
$siguiente.addEventListener("click",()=>{
    if (capitulo !== null){
        capitulo++
    }
})