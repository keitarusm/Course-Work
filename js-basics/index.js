// street
// city
// zipCode
// showAddress(address)

const address = {
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

class Address {
    constructor(street, city, zipCode) {
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }
    
    areEqual(address2) {
        return this.street === address2.street && 
            this.city === address2.city && 
            this.zipCode === address2.zipCode;
    };
    
    areSame(address2) {
        return this === address2;
    };
}

showAddress(address);
const address2 = createAddress('1331 Braintree Hill Rd', 'Braintree VT', '05060');
showAddress(address2);
const address3 = new Address('115 Etna Rd', 'Leabnon NH', '03766');
showAddress(address3);
const address4 = new Address('115 Etna Rd', 'Leabnon NH', '03766');
console.log(address3.areEqual(address4));
console.log(address3.areSame(address4));
