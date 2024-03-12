function calculate(){
    const weight = document.getElementById("wei").value
    const height = document.getElementById("hei").value

    if(height==="" || weight===""){
        alert("Please Enter a Valid Data")
    }else{
        const heights = height/100
        const bmiw = weight/(heights*heights).toFixed(1)
        const condition= document.getElementById("condition")
        const bmi = document.getElementById("bmi")
        const notes = document.getElementById("notes")
        if(bmiw < 18.5){
            condition.innerHTML = `Underweight`
            bmi.innerHTML = `${bmiw.toFixed(1)}`
            notes.innerHTML = `You are underweight`
        } else if (bmiw>=18.5 && bmiw <=24.9){
            condition.innerHTML = `Normal`
            bmi.innerHTML = `${bmiw.toFixed(1)}`
            notes.innerHTML = `You have an ideal weight, nice job!`
        } else if (bmiw >= 25 && bmiw <= 29.9){
            condition.innerHTML = `Overweight`
            bmi.innerHTML = `${bmiw.toFixed(1)}`
            notes.innerHTML = `You are overweight`
        } else {
            condition.innerHTML = `Obesity`
            bmi.innerHTML = `${bmiw.toFixed(1)}`
            notes.innerHTML = `You are in obese category`
        }
    }
}   
