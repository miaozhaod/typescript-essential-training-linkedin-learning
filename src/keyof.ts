// type ContactName = string;
// type ContactStatus = "active"| "inactive"| "new"
// type ContactBirthdate = Date | number | string

// interface Contact {
//     id: number;
//     name: ContactName;
//     birthDate?: ContactBirthdate;
//     status?: ContactStatus;
// }

// let primaryContact: Contact = {
//     id: 12345,
//     name: "Miao Zhao",
//     status: "active"
// }

// type ContactFields = keyof Contact // defines a type alias containing all properties in the type of Contact

// function getValue<T, U extends keyof T>(source: T, propertyName:keyof T){
//     return source[propertyName]
// }

// const value = getValue({min: 1, max: 200}, "min")