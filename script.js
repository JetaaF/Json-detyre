let jsonDATA = {
    "employeess": [
        {
            "id": 1,
            "name":"Jeta",
            "position":"Designer"
        },
        {
            "id": 2,
            "name":"Jona",
            "position":"Programer"
        },
        {
            "id": 3,
            "name":"Aulona",
            "position":"Manager"
        }
    ]
};
let tabelBody = document.querySelector('#employeeTabel tbody');
for(let i = 0; i < jsonDATA.employeess.length; i++ ){
    const employee = jsonDATA.employeess[i];
    // keijon rresht te ri
    const row = tabelBody.insertRow()
    row.insertCell(0).innerHTML = employee.id
    row.insertCell(1).innerHTML = employee.name
    row.insertCell(2).innerHTML = employee.position
}