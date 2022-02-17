// verify click action
$("#verify-button").on('click', function() {
    let employeeName = stringUppercase('#verify-name');
    let answer = false;
    for(i = 0; i < employeeList.length; i++) {
        if(employeeList[i].name === employeeName) {
            answer = true;
        }
    }
    if(answer === true) {
        alert(`${employeeName} is an employee.`);
    } else {
        alert(`${employeeName} is not an employee.`);
    }
})
// delete click actions
$('#delete-button').on('click', function() {
    let answer = false,
        index = -1,
        employeeName = stringUppercase('#delete-name');
    for(i = 0; i < employeeList.length; i++) {
        // checks if employee exists
        if(employeeList[i].name === employeeName) {
            answer = true;
            index = i;
        }
    }
    if(answer === false) {
        // notify user of non-existence
        alert(`${employeeName} already does not exist.`);
    } else {
        // remove employee element
        employeeList.splice(index, 1);
        employeeRecycle();
    }
})
// create employees
employeeRecycle();
$('#view').on('click', view);
$('#add').on('click', add);
$('#verify').on('click', verify);
$('#update').on('click', update);
$('#delete').on('click', terminate);
// add click action
$('#add-button').on('click', function() {
    let employeeName = stringUppercase('#add-name');
    let employeeOffice = stringUppercase('#add-office');
    let employeePhone = stringUppercase("#add-phone");
    employeeList.push({
        name: employeeName,
        officeNumber: employeeOffice,
        phoneNumber: employeePhone
    });
    // update employees
    employeeRecycle();
})
// update click actions
$('#update-button').on('click', function() {
let employeeName = stringUppercase('#update-name'),
    employeeOffice = stringUppercase('#update-office'),
    employeePhone = stringUppercase("#update-phone");
// set default false
let answer = false,
    index = -1;
for(i = 0; i < employeeList.length; i++) {
    // checks if employee exists
    if(employeeList[i].name === employeeName) {
        answer = true;
        index = i;
    }
}
if(answer === false) {
    alert(`${employeeName} does not exist.`);
} else {
    if(employeePhone && employeeOffice) {
        employeeList[index] = {
            name: employeeName,
            officeNumber: employeeOffice,
            phoneNumber: employeePhone
        }
    } else if(employeePhone) {
        employeeList[index].phoneNumber = employeePhone;
    } else if(employeeOffice) {
        employeeList[index].officeNumber = employeeOffice;
    }
}
employeeRecycle();
})