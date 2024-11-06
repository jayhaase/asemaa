document.addEventListener('alpine:init', () => {
    Alpine.store('locations', {
        // State
        hoveredLocationId: null,
        selectedLocation: null,
        showDialog: false,
        locations: [],

        // Actions
        init(locationData) {
            this.locations = locationData;
        },

        setHoveredLocation(id) {
            if (id) {
                this.selectedLocation = null;
            }
            this.hoveredLocationId = id;
        },

        selectLocation(id) {
            const location = this.locations.find(l => l.id === id);
            if (!location) return;
            
            this.hoveredLocationId = null;
            this.selectedLocation = location;
            
            const sidebarItem = document.getElementById(`location-${location.id}`);
            if (sidebarItem) {
                sidebarItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        },

        showLocationInfo(id) {
            this.selectLocation(id);
            this.showDialog = true;
        },

        clearSelection() {
            this.selectedLocation = null;
            this.hoveredLocationId = null;
            this.showDialog = false;
        },

        // Getters
        shouldPulse(id) {
            return this.hoveredLocationId === id || 
                   (this.selectedLocation?.id === id && !this.hoveredLocationId);
        }
    });
}); 