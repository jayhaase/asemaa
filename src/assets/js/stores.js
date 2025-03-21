document.addEventListener('alpine:init', () => {
    console.log('Registering locations store...');
    Alpine.store('locations', {
        // State
        hoveredLocationId: null,
        selectedLocation: null,
        locations: [],

        // Actions
        init(locations) {
            console.log('Initializing store with data:', locations);
            this.locations = locations;
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