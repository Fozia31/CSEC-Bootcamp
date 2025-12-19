let toggleButton = document.querySelector('.toggle-button');
let toggleText = document.querySelector('.toggle-text');
let isOn = false;

toggleButton.addEventListener("click", () =>{
    if (!isOn){
        toggleText.innerText = "Turn OFF 🔴";
    }else{
        toggleText.innerText = "Turn ON 🟢";
    }
    isOn = ! isOn;  
});