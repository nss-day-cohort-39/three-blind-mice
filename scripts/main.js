import { EmployeeList } from "./employees/EmployeeList.js"
import { getEmployees } from "./employees/EmployeeProvider.js"
import { getComputers } from "./computers/ComputerProvider.js"
import { getDepartments } from "./departments/DepartmentProvider.js"
import { getLocations } from "./locations/LocationProvider.js"
import { getCustomers } from "./customers/CustomerProvider.js"
import { getCustomerEmployees } from "./customers/CustomerEmployeeProvider.js"

getEmployees()
    .then(getComputers)
    .then(getLocations)
    .then(getDepartments)
    .then(getCustomers)
    .then(getCustomerEmployees)
    .then(EmployeeList)

