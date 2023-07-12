console.log('THis is a popup!');

const button = document.getElementById("submit")
const search_box = document.getElementById("search_bar")
const radio = document.getElementsByClassName("location")
const gp_radio = document.getElementById("gp")
const pharmacy_radio = document.getElementById("pharmacy")
const gmc_search = "https://www.gmc-uk.org/doctors?text="


gp_radio.addEventListener("click", () => {
    search_box.placeholder = "Enter Dr's name."
})

pharmacy_radio.addEventListener("click", () => {
    search_box.placeholder = "Enter postcode/ town/ reg."
})

button.addEventListener("click", () => {
    for (i = 0; i < radio.length; i++) {
        if (radio[i].type = "radio") {
            if (radio[i].checked) {
                let location_type = radio[i].value
            }
        }
    }
    const search_input = String(document.getElementById("search_bar").value)
    //console.log("button pressed " + location_type)
    //console.log("search query: " + search_input)

    if (location_type == "pharmacy") {
        console.log("length of location", search_input.length)
        if (!isNaN(search_input)) {
            const website = "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/" + search_input

        } else {
            const website = "https://www.pharmacyregulation.org/registers/pharmacy/nameortown/" + search_input
        }
        console.log(website)

        console.log("pharmacy")
    } else {
        const website = gmc_search + search_input
        console.log("gp")
    }
    chrome.tabs.create({
        url: website
    })

});
