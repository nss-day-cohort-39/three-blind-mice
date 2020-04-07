export const Employee = (employeeObject, computerObject) => {
    return `
        <section class="employee">
            <h2>${employeeObject.firstName} ${employeeObject.lastName}</h2>
            <div>${employeeObject.age}</div>
            <div>Current computer: ${computerObject.year} ${computerObject.model}</div>
        </section>
    `
}