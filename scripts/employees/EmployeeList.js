import { useEmployees } from "./EmployeeProvider.js"
import { Employee } from "./Employee.js"
import { useComputers } from "../computers/ComputerProvider.js"
import { useDepartments } from "../departments/DepartmentProvider.js"
import { useLocations } from "../locations/LocationProvider.js"

const contentTarget = document.querySelector(".employeesContainer")

const render = employeesToRender => {
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()

    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            // Find the related computer for the current employee
            const foundComputer = computers.find( computer => computer.id === employeeObject.computerId )

            // Find the related department for the current employee
            const foundDepartment = departments.find( department => department.id === employeeObject.departmentId )

            // Find the related location for the current employee
            const foundLocation = locations.find( location => location.id === employeeObject.locationId )


            // antidebuggability bugbear bugaloo
            return Employee(employeeObject, foundComputer, foundDepartment, foundLocation)
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}
