console.log('THis is a popup!');

var button = document.getElementById("submit")
var search_box = document.getElementById("search_bar")
var radio = document.getElementsByClassName("location")
var gp_radio = document.getElementById("gp")
var pharmacy_radio = document.getElementById("pharmacy")
var gmc_search = "https://www.gmc-uk.org/doctors?text="


gp_radio.addEventListener("click", ()=>{
    search_box.placeholder = "Input DR's name."
})

pharmacy_radio.addEventListener("click", ()=>{
    search_box.placeholder = "Enter postcode/ town/ reg."
})

button.addEventListener("click", ()=>{
    for(i = 0; i < radio.length; i++){
        if(radio[i].type="radio"){
            if(radio[i].checked){
                var location_type = radio[i].value
            }
        }
    }
    var search_input = document.getElementById("search_bar").value
    //console.log("button pressed " + location_type)
    //console.log("search query: " + search_input)

    if(location_type == "pharmacy"){
        console.log("length of location")
        if(search_input.length == 7){
            var website = "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/" + search_input

        } else{
            var website = "https://www.pharmacyregulation.org/registers/pharmacy/nameortown/" + search_input 
        }
        console.log(website)

        console.log("pharmacy")
    } else{
        var website = gmc_search + search_input
        console.log("gp")
    }
    chrome.tabs.create({
        url: website})
    
});
