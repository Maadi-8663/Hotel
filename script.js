function gototopp(){
    window.scrollTo(0, 0);
}

setInterval(() =>{
    let date = new Date();
    document.getElementsByClassName('date')[0].innerHTML = date;
} ,1000)

let a = document.getElementById('CityName')
console.log(a)

                                    