import { EmployeeList } from "./employees/EmployeeList.js"
import { getEmployees } from "./employees/EmployeeProvider.js"
import { getComputers } from "./computers/ComputerProvider.js"

getEmployees()
    .then(getComputers)
    .then(EmployeeList)

