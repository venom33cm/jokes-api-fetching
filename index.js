const span = document.querySelector('.jokes')
const btn = document.querySelector('.btn');
const getjokes = async()=>{
    try{
        span.innerHTML="loading....";
        setTimeout(async()=>{
        const setheader = {
        headers: {
            Accept : "application/json"
        }
    }
    const res = await fetch( "https://icanhazdadjoke.com",setheader)
    const data = await res.json();
    span.innerHTML=data.joke;
    console.log(data)
},500)
    }
    catch(err){
        console.log(err);

    }
  

}
btn.addEventListener('click',getjokes)
getjokes();