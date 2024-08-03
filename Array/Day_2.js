const arrayData = [
    {
        "id": 1,
        "title": "hello",
        "discription": 'hii How are you'
    },
    {
        "id": 2,
        "title": "hello baby",
        "discription": 'hii How are you baby'
    }
]

//toggle true or false in a particular item
const findSomething = (selectedItem) => {
    let localArrayData = [...arrayData]
    let finalArrayData = []
    // console.log("localArrayData=======", localArrayData);
    for (let [index, value] of localArrayData.entries()) {
        // console.log("index,value=======before", index, value);
        if (selectedItem?.id === localArrayData[index].id) {
            console.log("Hello====1");
            value.toggle = !value.toggle
        }
        else if (selectedItem?.id === localArrayData[index].id) {
            console.log("Hello====2");
            value.toggle = !value.toggle
        }
        if (!selectedItem) {
            console.log("Hello====3");
        }
        finalArrayData.push(value)
        // console.log("index,value=======after", index, value);
    }
    console.log("finalArrayData=====", finalArrayData);
}
// findSomething(arrayData[0])
// findSomething(arrayData[1])
findSomething()