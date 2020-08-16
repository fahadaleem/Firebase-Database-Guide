let id = 0;
const takeInput = ()=>{
    let firstName = prompt("Enter first Name: ");
    let lastName=prompt("Enter Last Name: ");
    let age = prompt("Enter Age: ");
    return {
        firstName:firstName,
        lastName:lastName,
        age:age,
    };
}

const saveData = ()=>{
    // Get inputs
    const data =  takeInput(); 

    console.log(data);
    
    // Create Database reference
    const database = firebase.database().ref("records");

    // Add Data into the database
    const ref = database.child(id).set(data);
    id++;
}


const getData = (id)=>{
    // Reference of the object from which you taken values
    const database = firebase.database().ref("records"); 
    database.on("value", snap=>{
        console.log(snap.val()[id]); // Print the data of the specified ID
    })
    
}

const deleteData=(id)=>{
    // Create reference from which the database get the values;
    const database = firebase.database().ref("records");
    
    // Get the values of the specified ID
    const childDb = database.child(id);

    // Remove Value
    childDb().remove();
}

const updateData =(id)=>{
    firebase.database().ref("records").child(id).update({
        firstName:"Muhammad Fahad Aleem",
        lastName:"Aleem",
        task:"12412",
    });
}