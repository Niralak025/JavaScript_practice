const array = [
    {
        "id": 101,
        "title": 'Nirala'
    },
    {
        "id": 102,
        "title": 'Ankit'
    },
    {
        "id": 103,
        "title": 'Car'
    },
    {
        "id": 104,
        "title": 'Tiger'
    },
    {
        "id": 110,
        "title": 'Women'
    },
    {
        "id": 105,
        "title": 'Apple'
    },
    {
        "id": 106,
        "title": 'Hot'
    },
    {
        "id": 107,
        "title": 'Summer'
    },
    {
        "id": 108,
        "title": 'Watch'
    },
    {
        "id": 109,
        "title": 'Man'
    }
]

const sortArray = (array) => {
    console.log("array====", array);
    var sortedArray = array.sort((a, b) => {
        return b - a
    })
    console.log("sortedArray ====", sortedArray);
}

sortArray(array)

const numberArray = [10, 5, 20, 2, 8]

sortArray(numberArray)
