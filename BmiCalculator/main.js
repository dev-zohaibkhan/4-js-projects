let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let result = document.getElementById("result");
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please give a vaild Height";
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "please give a vaild Weight";
    }else{
        const bmi = (weight / ((height * height) / 1000)).toFixed(2);
        // show the result
        result.innerHTML = `<span>${bmi}</span>`;
        
        if(bmi < 18.6){
           result.innerHTML += `<br> Under Weight`;
        }else if(bmi >=18.6 && bmi < 24.9){
            result.innerHTML += `<br> Normal Range`;
        }else if(bmi >24.9){
            result.innerHTML += `<br> OverWeight`;
        }
    }
})