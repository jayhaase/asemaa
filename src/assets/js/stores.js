document.addEventListener('alpine:init', () => {
    Alpine.store('locations', {
        // State
        hoveredLocationId: null,
        selectedLocation: null,
        showDialog: false,
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
            this.showDialog = true;

            setTimeout(() => {
                const closeButton = document.querySelector('[aria-label="Close dialog"]');
                if (closeButton) closeButton.focus();
            }, 50);
        },

        closeDialog() {
            this.showDialog = false;
            
            if (this.lastFocusedElement) {
                setTimeout(() => {
                    this.lastFocusedElement.focus();
                    this.lastFocusedElement = null;
                }, 50);
            }
        },

        clearSelection() {
            this.selectedLocation = null;
            this.hoveredLocationId = null;
            this.showDialog = false;
            
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