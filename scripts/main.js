import { EmployeeList } from "./employees/EmployeeList.js"
import { getEmployees } from "./employees/EmployeeProvider.js"
import { getComputers } from "./computers/ComputerProvider.js"
import { getDepartments } from "./departments/DepartmentProvider.js"
import { getLocations } from "./locations/LocationProvider.js"

getEmployees()
    .then(getComputers)
    .then(getLocations)
    .then(getDepartments)
    .then(EmployeeList)

