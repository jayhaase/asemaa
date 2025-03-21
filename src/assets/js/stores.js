document.addEventListener('alpine:init', () => {
    console.log('Registering locations store...');
    Alpine.store('locations', {
        // State
        hoveredLocationId: null,
        selectedLocation: null,
        locations: [],
        lastHoverChangeTime: 0,
        hoverCooldown: 100, // milliseconds between allowed hover changes

        // Actions
        init(locations) {
            console.log('Initializing store with data:', locations);
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

            if ( timeSinceLastChange < this.hoverCooldown) {
                return;
            }
            
            // Only allow hover changes after the cooldown period
            // This prevents all rapid changes between locations
            this.hoveredLocationId = id;
            this.lastHoverChangeTime = now;
            this.selectLocation(id);
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