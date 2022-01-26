//pegar dados do site e fazer o calculo

//aparecer resultado no site






 //usar if e else para mostrar que faixa a pessoa esta

 //pegar dados do site e fazer o calculo

//aparecer resultado no site




//height = height.slice(0,1) + ',' + height.slice(1,3)

const calculateBtn = document.getElementById('calculate')
const clearAll = document.getElementById('clear')
const body = document.querySelector('body')

const table = document.querySelector('table')

calculateBtn.addEventListener('click', () => {
    let weight = document.getElementById('weight').value    
    let height = document.getElementById('height').value  

    weight = parseInt(weight)
    height = height.slice(0,1) + '.' + height.slice(1,3)
    height = parseFloat(height)

    let imc = weight/(height * height)

    imc= imc.toFixed(2)
    console.log(imc)


    let result = document.getElementById('showResult')
    document.getElementById('showResult').innerHTML = imc


    if (imc <= 18,5) {

        document.getElementById('magreza').style.backgroundColor = 'grey';
    
    }else if(imc >18,5 && imc <25){
        document.getElementById('normal').style.backgroundColor = 'grey';
    
    }else if(imc >24,9 && imc <30){
        document.getElementById('sobrepeso').style.backgroundColor = 'grey';
    
    }else if(imc > 29,5 && imc < 40){
        document.getElementById('obesidade').style.backgroundColor = 'grey';
    
    }else{
        document.getElementById('grave').style.backgroundColor = 'grey';
    }

    
})





