document.addEventListener('alpine:init', () => {
    Alpine.store('locations', {
        // State
        hoveredLocationId: null,
        selectedLocation: null,

        // Actions
        setHoveredLocation(id) {
            if (this.selectedLocation) return;
            this.hoveredLocationId = id;
        },

        selectLocation(location) {
            this.hoveredLocationId = null;
            this.selectedLocation = location;
            
            // Scroll the sidebar location into view using location ID
            const sidebarItem = document.getElementById(`location-${location.id}`);
            if (sidebarItem) {
                sidebarItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        },

        clearSelection() {
            this.selectedLocation = null;
            this.hoveredLocationId = null;
        },

        // Getters
        shouldPulse(id) {
            return this.selectedLocation?.id === id || 
                   (!this.selectedLocation && this.hoveredLocationId === id);
        }
    });
}); 