// // Use extends to merge two interfaces into one:
// interface Contact extends Address {
// 	name: string;
// 	id: number;
// 	birthDate?: Date;
// }

// interface Address {
// 	postalCode: string;
// }

// let primaryContact: Contact = {
// 	name: "Miao",
//     id: 1,
// 	postalCode: "12345"
// }

// // Type alias
// type ContactName = string
// // Then can be used into the inteface:
// interface Contact2 {
// 	name: ContactName
// }

// // enums
// enum ContactStatus {
// 	Active = "active",
// 	Inactive = "inactive",
// 	New = "new"
// }

// interface Contact3  {
// 	name: string;
// 	id: number;
// 	birthDate?: Date;
//     status: ContactStatus
// }

// let primaryContact3: Contact3 = {
//     name: "Miao",
// 	id: 2,
// 	status: ContactStatus.Active
// }

// // typing functions
// interface Contact4 {
//     id: number;
//     name: string;
//     // clone(name: string): Contact4
// }
// // , func: (source: Contact4) => Contact4
// function clone(source: Contact4): Contact4 { // the second Contact4 is the return type, otherwise the return type is any
//     // return source
//     return Object.apply({}, source)
// }

// const a: Contact4 = {id: 123, name: "John"}
// const b = clone(a)

// // defining metatype using generics
// interface Contact5 {
//     id: number;
//     name: string;
// }

// function clone5<T>(source: T): T { // T could be any types depending on what is passed in
//     return Object.apply({}, source)
// }

// const a5: Contact5 = {id: 123, name: "John"}
// const b5 = clone5(a5)

// const dateRange = { startDate:  Date.now(), endDate: Date.now() }
// const dateRangeCopy = clone5(dateRange)

// // continue above, can have two generic types,like this:
// interface UserContact<TExeternalId> { // generics is not limited to function, can also be used in interface
//     id: number;
//     name: string;
//     username: string
//     externalId: TExeternalId
// }

// function clone6<T1, T2 extends T1>(source: T1): T2 { // the extends does not neccissarly needs to be extended, just needs to match
//     return Object.apply({}, source)
// }

// const a6: Contact5 = {id: 123, name: "John"}
// // const b6 = clone6<Contact5, UserContact>(a6)
