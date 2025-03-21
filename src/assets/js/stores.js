document.addEventListener('alpine:init', () => {
    Alpine.store('locations', {
        // State
        hoveredLocationId: null,
        selectedLocation: null,
        locations: [],
        lastHoverChangeTime: 0,
        hoverCooldown: 100, // milliseconds between allowed hover changes

        // Actions
        init(locations) {
            this.locations = locations;
        },

        setHoveredLocation(id) {
            if (!id) {
                // Make no changes since we are not hovering over a new location
                return;
            }

            if (this.hoveredLocationId == id) {
                return;
            }
  
            const now = Date.now();
            const timeSinceLastChange = now - this.lastHoverChangeTime;

            if (timeSinceLastChange < this.hoverCooldown) {
                return;
            }
            
            // Only allow hover changes after the cooldown period
            // This prevents all rapid changes between locations
            this.hoveredLocationId = id;
            this.lastHoverChangeTime = now;
            this.selectLocation(id);
        },

        // Clear all selection states (both hover and selection)
        clearSelection() {
            this.hoveredLocationId = null;
            this.selectedLocation = null;
        },

        selectLocation(id) {
            if (!id) {
                this.selectedLocation = null;
                this.hoveredLocationId = null; // Clear hover state when selection is cleared
                return;
            }
            const location = this.locations.find(l => l.id === id);
            if (!location) {
                this.selectedLocation = null;
                return;
            }
            this.selectedLocation = location;
            
            // If selected directly (not via hover), also set the hover state
            if (this.hoveredLocationId !== id) {
                this.hoveredLocationId = id;
                this.lastHoverChangeTime = Date.now();
            }
        },

        // Getters
        shouldPulse(id) {
            return this.hoveredLocationId === id || 
                   (this.selectedLocation?.id === id && !this.hoveredLocationId);
        }
    });
}); 