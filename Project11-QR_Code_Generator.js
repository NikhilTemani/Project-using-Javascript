let qr_code = document.getElementById("qr-code");
let loader = document.getElementById("loading");
let code_img = document.getElementById("code-img");

 qr_code.addEventListener("click", () => {
     loader.style.display = "block";

     code_img.onload = function(){
         loader.style.display = "none";
     }

     let input = document.getElementById("input").ariaValueMax;
     let api = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input}`;

     code_img.src = api;
 })
