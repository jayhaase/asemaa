document.addEventListener('alpine:init', () => {
    Alpine.store('locations', {
        // State
        hoveredLocationId: null,
        selectedLocation: null,
        locations: [],
        lastFocusedElement: null,

        // Actions
        init(locationData) {
            this.locations = locationData;
        },

        setHoveredLocation(id) {
            this.hoveredLocationId = id;

            const location = this.locations.find(l => l.id === id);
            if (!location) return;

            this.selectedLocation = location;

            const dropdown = document.querySelector('select');
            if (dropdown) {
                dropdown.value = id || '';
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
            this.lastFocusedElement = document.activeElement;

            this.selectLocation(id);
        },

        // Getters
        shouldPulse(id) {
            return this.hoveredLocationId === id ||
                (this.selectedLocation?.id === id && !this.hoveredLocationId);
        }
    });
}); 