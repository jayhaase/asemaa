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
            this.hoveredLocationId = id;
            
            // Only update dropdown if there's no selected location
            if (!this.selectedLocation) {
                const dropdown = document.querySelector('select');
                if (dropdown) {
                    dropdown.value = id || '';
                }
            }
        },

        selectLocation(id) {
            const location = this.locations.find(l => l.id === id);
            if (!location) return;
            
            this.hoveredLocationId = null;
            this.selectedLocation = location;
            
            // Update dropdown selection
            const dropdown = document.querySelector('select');
            if (dropdown) {
                dropdown.value = id;
            }
            
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
            
            // Clear dropdown selection
            const dropdown = document.querySelector('select');
            if (dropdown) {
                dropdown.value = '';
            }
        },

        // Getters
        shouldPulse(id) {
            return this.hoveredLocationId === id || 
                   (this.selectedLocation?.id === id && !this.hoveredLocationId);
        }
    });
}); 