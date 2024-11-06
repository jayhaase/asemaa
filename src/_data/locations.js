module.exports = function () {
    const locations = [
        {
            "id": "loc-1",
            "name": "Bois Forte Reservation",
            "coordinates": {
                "x": 50,
                "y": 50
            },
            "imageUrl": "/images/locations/bois-forte.png"
        },
        {
            "id": "loc-2",
            "name": "Dolor Sit",
            "coordinates": {
                "x": 60,
                "y": 50
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-5",
            "name": "Tempor Incididunt",
            "coordinates": {
                "x": 45,
                "y": 45
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-6",
            "name": "Labore Dolore",
            "coordinates": {
                "x": 35,
                "y": 35
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-7",
            "name": "Magna Aliqua",
            "coordinates": {
                "x": 40,
                "y": 60
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-8",
            "name": "Enim Minim",
            "coordinates": {
                "x": 65,
                "y": 45
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-9",
            "name": "Veniam Quis",
            "coordinates": {
                "x": 35,
                "y": 55
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-10",
            "name": "Nostrud Exercitation",
            "coordinates": {
                "x": 70,
                "y": 40
            },
            "imageUrl": "/images/default-landscape.png"
        },
        {
            "id": "loc-11",
            "name": "Ullamco Laboris",
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