// street
// city
// zipCode
// showAddress(address)

let address = {
    street: '5228 VT-14',
    city: 'Sharon VT',
    zipCode: '05065'
}

function showAddress(address) {
    console.log(address['street'] + '\n' + address['city'] + ', ' + address['zipCode']);
}

function createAddress(street, city, zipCode) {
    return {
        street, 
        city, 
        zipCode
    }
}

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

showAddress(address);
const address2 = createAddress('1331 Braintree Hill Rd', 'Braintree VT', '05060');
showAddress(address2);
const address3 = new Address('115 Etna Rd', 'Leabnon NH', '03766');
showAddress(address3);