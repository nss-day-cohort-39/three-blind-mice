let locations = []

export const useLocations = () => {
    return locations.slice()
}

export const getLocations = () => {
    return fetch("http://localhost:8088/locations")
        .then(response => response.json())
        .then(
            (parsedlocations) => {
                locations = parsedlocations
            }
        )
}
