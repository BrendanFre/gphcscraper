const button = document.getElementById("submit");
const search_box = document.getElementById("search_bar");
const radio = document.getElementsByClassName("location");
const gp_radio = document.getElementById("gp");
const pharmacy_radio = document.getElementById("pharmacy");
const gmc_search = "https://www.gmc-uk.org/doctors?text=";
const england_radio = document.getElementById("gp_england");
const wales_radio = document.getElementById("gp_wales");
const scotland_radio = document.getElementById("gp_england");
let website;


gp_radio.addEventListener("click", () => {
    search_box.placeholder = "Enter Dr's name.";
});

pharmacy_radio.addEventListener('click', () => {
    search_box.placeholder = 'Enter postcode/town/reg.';
}
)

england_radio.addEventListener("click", gp_postcode);

wales_radio.addEventListener("click", gp_postcode);

scotland_radio.addEventListener("click", gp_postcode);


function gp_postcode() {
    search_box.placeholder = "Enter GP's Postcode";
};


button.addEventListener("click", () => {
    let location_type;
    for (i = 0; i < radio.length; i++) {
        if (radio[i].type = "radio") {
            if (radio[i].checked) {
                location_type = radio[i].value
            }
        }
    };
    const search_input = String(document.getElementById("search_bar").value);

    if (location_type == "pharmacy") {
        console.log("length of location", search_input.length);
        if (!isNaN(search_input)) {
            website = "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/" + search_input;

        } else {
            website = "https://www.pharmacyregulation.org/registers/pharmacy/nameortown/" + search_input;
        }

        console.log("pharmacy")
    } else {
        website = gmc_search + search_input;
    }
    chrome.tabs.create({
        url: website
    });

});
