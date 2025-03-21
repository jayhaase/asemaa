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
            this.locations = locationData;
        },

        setHoveredLocation(id) {
            console.log('Setting hovered location:', id);
            this.hoveredLocationId = id;
        },

        selectLocation(id) {
            console.log('Selecting location:', id);
            const location = this.locations.find(l => l.id === id);
            if (!location) {
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