const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight`
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show the result
        if(bmi < 18.6){
            results.innerHTML = `<span>${bmi} : You are under weight! Go eat something 😒</span>`
        } else if (bmi > 24.9){
            results.innerHTML = `<span>${bmi} : You are over weight! Go to gym 🏋🏽‍♂️</span>`
        } else {
            results.innerHTML = `<span> ${bmi} : Your BMI is normal. Stay Fit 💪🏽</span>`
        }
    }

})