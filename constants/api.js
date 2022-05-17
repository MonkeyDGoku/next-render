export const MockApi = (data) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data)
        }, 3000)
    })
}