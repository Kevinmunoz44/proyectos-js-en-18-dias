const employeeArray = [];

function Employees(id, name, lastname, birthday, occupation) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.birthday = birthday;
    this.occupation = occupation;
}

const addEmployee = () => {
    let id = document.getElementById('identification').value;
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let birthday = document.getElementById('birthday').value;
    let occupation = document.getElementById('occupation').value;

    let employee = new Employees(id, name, lastname, birthday, occupation);
    employeeArray.push(employee);

    console.log(employee);

    clear();
}

const showEmployees = () => {
    let list = '<div id="employeeList">';
    list += '<div class="employee-list-header">Employee List:</div>';

    for (let employee of employeeArray) {
        list += '<div class="employee-item">';
        for (let prop in employee) {
            list += '<span class="employee-data"><strong>' + prop.toUpperCase() + ':</strong> ' + employee[prop] + '</span>';
        }
        list += '</div>';
    }
    
    list += '</div>';

    document.getElementById('employeeList').innerHTML = list;
}

const clear = () => {
    document.getElementById('identification').value = '';
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('birthday').value = '';
    document.getElementById('occupation').value = ''; 
}