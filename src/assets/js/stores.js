document.addEventListener('alpine:init', () => {
    Alpine.store('locations', {
        // State
        hoveredLocationId: null,
        selectedLocation: null,
        showDialog: false,

        // Actions
        setHoveredLocation(id) {
            if (this.selectedLocation) return;
            this.hoveredLocationId = id;
        },

        selectLocation(location) {
            this.hoveredLocationId = null;
            this.selectedLocation = location;
            this.showDialog = true;
            
            // Scroll the sidebar location into view
            const sidebarItem = document.getElementById(`location-${location.id}`);
            if (sidebarItem) {
                sidebarItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        },

        clearSelection() {
            this.selectedLocation = null;
            this.hoveredLocationId = null;
            this.showDialog = false;
        },

        // Getters
        shouldPulse(id) {
            return this.selectedLocation?.id === id || 
                   (!this.selectedLocation && this.hoveredLocationId === id);
        }
    });
}); 