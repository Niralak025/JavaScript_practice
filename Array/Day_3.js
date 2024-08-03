const responseArray = [
    {
        "id": '101',
        "title": 'Hello Java',
        "status": {
            "id": '1',
            "value": 'Hello Java Child'
        },
        "data": 'Java Questions'
    },
    {
        "id": '102',
        "title": 'Hello Python',
        "status": {
            "id": '2',
            "value": 'Hello Python Child'
        },
        "data": 'Python Questions'
    }
]

//modify particular item

const modifyItemFunction = () => {
    console.log("responseArray======before", responseArray);
    for (let item of responseArray) {
        console.log("responseArray======item:-", item);
        if (item.id === "102") {
            item.status.id = '1002'
        }
    }
    console.log("responseArray======after", responseArray);
}
modifyItemFunction()