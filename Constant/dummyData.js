const dummyData = [
    {
        "id": 1,
        "name": "item-1",
        "children": [
            {
                "id": 2,
                "name": "inner item-1 of item-1"
            },
            {
                "id": 3,
                "name": "inner item-2 of item-1"
            }
        ]
    },
    {
        "id": 2,
        "name": "item-2",
        "children": [
            {
                "id": 4,
                "name": "inner item-1 of item-2",
                "children": [
                    {
                        "id": 5,
                        "name": "inner item-1,inner item-1 of item-2"
                    },
                    {
                        "id": 6,
                        "name": "inner item-2,inner item-1 of item-2"
                    },
                    {
                        "id": 7,
                        "name": "inner item-3,inner item-1 of item-2"
                    }
                ]
            },
            {
                "id": 5,
                "name": "inner item-2 of item-2"
            },
            {
                "id": 7,
                "name": "inner item-3 of item-2"
            },
            {
                "id": 8,
                "name": "inner item-4 of item-2"
            }
        ]
    }
]