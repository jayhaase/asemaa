module.exports = function () {
    const locations = [
        {
            "id": "loc-1",
            "name": "Lorem Ipsum",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "coordinates": {
                "x": 50,
                "y": 50
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-2",
            "name": "Dolor Sit",
            "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "coordinates": {
                "x": 60,
                "y": 50
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-3",
            "name": "Amet Consectetur",
            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            "coordinates": {
                "x": 50,
                "y": 40
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-4",
            "name": "Adipiscing Elit",
            "description": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            "coordinates": {
                "x": 30,
                "y": 30
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-5",
            "name": "Tempor Incididunt",
            "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
            "coordinates": {
                "x": 45,
                "y": 45
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-6",
            "name": "Labore Dolore",
            "description": "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            "coordinates": {
                "x": 35,
                "y": 35
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-7",
            "name": "Magna Aliqua",
            "description": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
            "coordinates": {
                "x": 40,
                "y": 60
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-8",
            "name": "Enim Minim",
            "description": "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores.",
            "coordinates": {
                "x": 65,
                "y": 45
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-9",
            "name": "Veniam Quis",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            "coordinates": {
                "x": 35,
                "y": 55
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-10",
            "name": "Nostrud Exercitation",
            "description": "Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.",
            "coordinates": {
                "x": 70,
                "y": 40
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-11",
            "name": "Ullamco Laboris",
            "description": "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            "coordinates": {
                "x": 45,
                "y": 65
            },
            "imageUrl": "/images/default-landscape.png"
        }
    ];

    // Sort locations alphabetically by name
    const sortedLocations = locations.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    return sortedLocations;
}; 