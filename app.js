
/*Input*/

const input = document.querySelector("#date")
const dayEle = document.querySelector(".day")
const hourEle = document.querySelector(".hour")
const minuteEle = document.querySelector(".minute")
const secondEle = document.querySelector(".second")

let click = 0;
input.addEventListener("change",(e)=>{
    let [year ,month , day ] = input.value.split("-");
    const countDown = new Date(`${month} ${day} , ${year} , 00:00:00`).getTime();
    getDate(countDown)
    console.log(click);
})


function getDate(countDown){
    click++;
    let handler = setInterval(function(){
        //First Click
        if(click === 1){
            let newDate = new Date().getTime();
            let dateDiff = countDown - newDate;
            let days = Math.floor(dateDiff / (1000 * 60 *60 *24));
            let hours = Math.floor(dateDiff % (1000 * 60 *60 *24) / (1000 * 60 * 60))
            let minutes = Math.floor(dateDiff % (1000 * 60 *60) / (1000 * 60))
            let seconds = Math.floor(dateDiff % (1000 * 60) / (1000));

            dayEle.innerHTML = days < 0 ? "D" : days < 10 ? `0${days}`: days ;
            hourEle.innerHTML = hours < 0 ? "O" : hours < 10 ? `0${hours}`: hours  ;
            minuteEle.innerHTML = minutes < 0 ? "N" : minutes < 10 ? `0${minutes}`: minutes ;
            secondEle.innerHTML = seconds < 0 ? "E" : seconds < 10 ? `0${seconds}`: seconds ;

            if(dateDiff < 0){
                click = 0; 
                clearInterval(handler)
            }
        }else{
            // Second Click
            click = 1;
            clearInterval(handler)
        }
    },1000);
};



