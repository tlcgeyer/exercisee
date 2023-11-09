//addition button
const btnAdd = document.querySelector('[data-submit]')
const lblOutput = document.querySelector('#output')

function addition () {
    let numb1 = document.getElementById('numb1').value
    let numb2 = document.getElementById('numb2').value
    /*to get the value to the input element*/  
    //to wrap everything together add .value
    let sum =eval(`${numb1}+ ${numb2}`)
    //lblOutput.innerHTML = `<strong>$ {sum}</strong>`
    lblOutput.textContent = sum
}
btnAdd.addEventListener('click', addition)