export const Employee = (employeeObject, computerObject, departmentObject, locationObject, customerArray) => {
    return `
        <section class="employee">
            <h2>${employeeObject.firstName} ${employeeObject.lastName}</h2>
            <div>${employeeObject.age}</div>
            <div>Current computer: ${computerObject.year} ${computerObject.model}</div>
            <div class="employee__department">
                Works in the ${departmentObject.name} department
            </div>
            <div class="employee__location">
                Works in the ${locationObject.city} location
            </div>
            <div class="employee__customers">
                <ul>
                    ${
                        customerArray.map(customer => `<li>${customer.business}</li>`).join("")
                    }
                </ul>
            </div>
        </section>
    `
}