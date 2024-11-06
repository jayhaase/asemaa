document.addEventListener('alpine:init', () => {
    Alpine.store('locations', {
        // State
        hoveredLocationId: null,
        selectedLocation: null,
        showDialog: false,

        // Actions
        setHoveredLocation(id) {
            if (id) {
                this.selectedLocation = null;
            }
            this.hoveredLocationId = id;
        },

        selectLocation(location) {
            this.hoveredLocationId = null;
            this.selectedLocation = location;
            
            const sidebarItem = document.getElementById(`location-${location.id}`);
            if (sidebarItem) {
                sidebarItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        },

        showLocationInfo(location) {
            this.selectLocation(location);
            this.showDialog = true;
        },

        clearSelection() {
            this.selectedLocation = null;
            this.hoveredLocationId = null;
            this.showDialog = false;
        },

        // Getters
        shouldPulse(id) {
            return this.hoveredLocationId === id || this.selectedLocation?.id === id;
        }
    });
}); 