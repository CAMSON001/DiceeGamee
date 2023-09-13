let point1 = document.querySelector('.point1')
let point2 = document.querySelector('.point2')
let point3 = document.querySelector('.point3')
let whiteDod1 = document.querySelector('.forThree1')
let whiteDod2 = document.querySelector('.forOne')
let whiteDod3 = document.querySelector('.forThree2')



let point11 = document.querySelector('.point11')
let point22= document.querySelector('.point22')
let point33 = document.querySelector('.point33')
let whiteDod11 = document.querySelector('.forThreeB')
let whiteDod22 = document.querySelector('.forOneB')
let whiteDod33 = document.querySelector('.forThreeBB')





let number1 = Math.floor(Math.random()*6 + 1)
let number2 = Math.floor(Math.random()*6 + 1)



function randomNumber1(){
    if(number1===2){
        point1.style.opacity = "0"
        point3.style.opacity = "0"
    }
    else if(number1===4){
        point2.style.opacity = "0"
    }
    else if(number1===1){
        point1.style.opacity = "0"
        point3.style.opacity = "0"
        whiteDod2.style.display = "none"
       
    }
    else if(number1===5){
        whiteDod2.style.display = "none"
       
    }

    else if(number1===3){
        whiteDod1.style.display = "none"
        whiteDod2.style.display = "none"
        whiteDod3.style.display = "none"
       
    }
    
}



function randomNumber2(){
    if(number2===2){
        point11.style.opacity = "0"
        point33.style.opacity = "0"
    }
    else if(number2===4){
        point22.style.opacity = "0"
    }
    else if(number2===1){
        point11.style.opacity = "0"
        point33.style.opacity = "0"
        whiteDod22.style.display = "none"
       
    }
    else if(number2===5){
        whiteDod22.style.display = "none"
       
    }

    else if(number2===3){
        whiteDod11.style.display = "none"
        whiteDod22.style.display = "none"
        whiteDod33.style.display = "none"
       
    }
    
}


randomNumber1()
randomNumber2()

