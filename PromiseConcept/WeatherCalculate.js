const getWeatherDetails = (temperatureiInCelsius) => {
    return new Promise((resolve, reject) => {
        if (typeof temperatureiInCelsius != 'number') {
            reject('Invalid input')
        }
        else if (temperatureiInCelsius > 30) {
            resolve('Hot')
        }
        else if (temperatureiInCelsius < 30) {
            resolve('Sunny')
        }
        else {
            resolve('Weather condition is not good.')
        }
    })
}

getWeatherDetails(1220).then((result) => { console.log("Result is :", result) }).catch((error) => { console.log('Error is : ', error) })
