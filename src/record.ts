let x: Record<string, string | number | boolean | Function> = {name: "Miao"}
x.number = 1234
x.active = true
x.log = () => console.log("awesome!")




type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
    email: string;
}

interface Query<TProp> {
    sort?: "asc" | "desc";
    matches(val: TProp): boolean;
}

// type ContactQuery = Omit<
//     Partial<
//         Record<keyof Contact, Query>
//     >,
//     "address" | "status"
// >

// type ContactQuery = 
//     Partial<
//         Pick<
//             Record<keyof Contact, Query>,
//             "id" | "name"
//         >
//     >

// type RequiredContactQuery = Required<ContactQuery>

// extract metadata from existing
type ContactQuery = {
    [TProp in keyof Contact]? : Query<Contact[TProp]>
}

function searchContacts(contacts: Contact[], query: ContactQuery){
    return contacts.filter(contact => {
        for (const property of Object.keys(contact)){
            const propertyQuery = query[property]
            if(propertyQuery && propertyQuery.matches(contact[property])){
                return true
            }
        }

        return false
    })
}

const filteredContacts = searchContacts(
    [/* contacts */],
    {
        id: { matches: (id) => id === 123 },
        name: { matches: (name) => name === "Carol Weaver" },
    }
);