document.addEventListener('alpine:init', () => {
    console.log('Registering locations store...');
    Alpine.store('locations', {
        // State
        hoveredLocationId: null,
        selectedLocation: null,
        locations: [],

        // Actions
        init(locationData) {
            console.log('Initializing store with data:', locationData);
            // If locationData is undefined or not an array, try to get it from the global scope
            if (!locationData || !Array.isArray(locationData)) {
                console.log('Attempting to get locationData from window.locationData');
                locationData = window.locationData;
            }
            
            // Ensure we have an array of locations
            if (Array.isArray(locationData)) {
                console.log('Setting locations array with length:', locationData.length);
                this.locations = locationData;
            } else if (locationData && typeof locationData === 'object') {
                // If we have an object with locations property (from x-data binding)
                console.log('Extracting locations from object');
                this.locations = locationData.locations || [];
            } else {
                console.warn('No valid location data found');
                this.locations = [];
            }
            
            console.log('Final locations array:', this.locations);
        },

        setHoveredLocation(id) {
            console.log('Setting hovered location:', id);
            this.hoveredLocationId = id;
        },

        selectLocation(id) {
            console.log('Selecting location:', id);
            console.log('Available locations:', this.locations);
            if (!id) {
                console.log('No ID provided, clearing selection');
                this.selectedLocation = null;
                return;
            }
            const location = this.locations.find(l => l.id === id);
            console.log('Found location:', location);
            if (!location) {
                console.warn('Location not found for ID:', id);
                this.selectedLocation = null;
                return;
            }
            this.selectedLocation = location;
        },

        // Getters
        shouldPulse(id) {
            return this.hoveredLocationId === id || 
                   (this.selectedLocation?.id === id && !this.hoveredLocationId);
        }
    });
    console.log('Store registered successfully');
}); 