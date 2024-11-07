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
            "name": "Grand Portage Reservation",
            "coordinates": {
                "x": 60,
                "y": 50
            },
            "imageUrl": "/images/locations/grand-portage.png"
        },
        {
            "id": "loc-5",
            "name": "White Earth Reservation",
            "coordinates": {
                "x": 45,
                "y": 45
            },
            "imageUrl": "/images/locations/white-earth.png"
        },
        {
            "id": "loc-6",
            "name": "Red Lake Reservation",
            "coordinates": {
                "x": 35,
                "y": 35
            },
            "imageUrl": "/images/locations/red-lake.png"
        },
        {
            "id": "loc-7",
            "name": "Leech Lake Reservation",
            "coordinates": {
                "x": 40,
                "y": 60
            },
            "imageUrl": "/images/locations/leech-lake.png"
        },
        {
            "id": "loc-8",
            "name": "Fond du Lac Reservation",
            "coordinates": {
                "x": 65,
                "y": 45
            },
            "imageUrl": "/images/locations/fond-du-lac.png"
        },
        {
            "id": "loc-9",
            "name": "Mille Lacs Reservation",
            "coordinates": {
                "x": 35,
                "y": 55
            },
            "imageUrl": "/images/locations/mille-lacs.png"
        },
        {
            "id": "loc-10",
            "name": "Upper Sioux Indian Community",
            "coordinates": {
                "x": 70,
                "y": 40
            },
            "imageUrl": "/images/locations/upper-sioux.png"
        },
        {
            "id": "loc-11",
            "name": "Lower Sioux Indian Community",
            "coordinates": {
                "x": 45,
                "y": 65
            },
            "imageUrl": "/images/locations/lower-sioux.png"
        }
    ];

    // Sort locations alphabetically by name
    const sortedLocations = locations.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    return sortedLocations;
}; 