import { useEmployees } from "./EmployeeProvider.js";
import { Employee } from "./Employee.js";
import { useComputers } from "../computers/ComputerProvider.js";

const contentTarget = document.querySelector(".employeesContainer")

const render = employeesToRender => {
    const computers = useComputers()

    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            // Find the related computer for the current employee
            const foundComputer = computers.find(
                (computer) => {
                    return computer.id === employeeObject.computerId
                }
            )
            return Employee(employeeObject, foundComputer)
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}
