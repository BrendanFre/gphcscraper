#Imports
import webbrowser


location_name = input("Input town or post code or pharmacy reg of pharmacy")
if location_name.isnumeric:
    webbrowser.open("https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/" + location_name)
else:
    webbrowser.open("https://www.pharmacyregulation.org/registers/pharmacy/nameortown/" + location_name)
