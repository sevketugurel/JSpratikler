let counter = 0
let counterDOM =  document.getElementById("counter");
let increaseDOM =  document.getElementById("increase");
let decreaseDOM =  document.getElementById("decrease");

counterDOM.innerHTML = counter
increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)

function clickEvent(){
    console.log(this.id)
    // aşağıdaki satırda eğer bu id increase eşit ise soru işareti sağındakini uygula fakat değil ise : sağınadakini uygula anlamına geliyor
    this.id == "increase" ? counter +=1 : counter -=1
    counterDOM.innerHTML = counter
}