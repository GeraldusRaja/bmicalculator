function calculateBMI() {
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
  
    if (age === "" || height === "" || weight === "") {
        alert("Please fill out all fields");
        return;
    }
  
    height = height / 100;
  
    var bmi = weight / (height * height);
    var bmiResult = bmi.toFixed(2);
    
    document.getElementById("bmiResult").innerText = "Your BMI is: " + bmiResult;
  
    let message = "";
    if (bmi < 18.5) {
        message = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        message = "Overweight";
    } else {
        message = "Obesity";
    }
  
    document.getElementById("bmiMessage").innerText = message;
  }
  