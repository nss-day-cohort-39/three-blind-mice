let customerEmployees = []

export const useCustomerEmployees = () => {
    return customerEmployees.slice()
}

export const getCustomerEmployees = () => {
    return fetch("http://localhost:8088/customeremployees")
        .then(response => response.json())
        .then(
            (parsedCustomerEmployees) => {
                customerEmployees = parsedCustomerEmployees
            }
        )
}
