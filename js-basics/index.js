// street
// city
// zipCode
// showAddress(address)

let address = {
    street: '5228 VT-14',
    city: 'Sharon VT',
    zipCode: '05065'
}

showAddress(address);

function showAddress(address) {
    console.log(address['street'] + '\n' + address['city'] + ', ' + address['zipCode']);
}