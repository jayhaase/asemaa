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
            
            if (!id) {
                // Make no changes since we are not hovering over a new location
                return;
            }

            // Only change the seleceted location if we are hovering over a new location
            if (this.hoveredLocationId !== id) {
                this.hoveredLocationId = id;
                this.selectLocation(id);
            }
        },

        selectLocation(id) {
            if (!id) {
                this.selectedLocation = null;
                return;
            }
            const location = this.locations.find(l => l.id === id);
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