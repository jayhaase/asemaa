document.addEventListener('alpine:init', () => {
    Alpine.store('locations', {
        // State
        hoveredLocationId: null,
        selectedLocation: null,
        locations: [],
        lastHoverChangeTime: 0,
        hoverCooldown: 100, // milliseconds between allowed hover changes
        isDescriptionModalOpen: false,
        // Default YouTube video IDs to use when available
        defaultYoutubeVideos: [
            'fhr9sy7ZgnY', // Ojibwe Asemaa - Tobacco First 
        ],

        // Actions
        init(locations) {
            this.locations = locations;
        },

        setHoveredLocation(id) {
            if (!id) {
                // When mouse leaves a marker, clear the hover state
                this.hoveredLocationId = null;
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
        },

        // Clear all selection states (both hover and selection)
        clearSelection() {
            this.hoveredLocationId = null;
            this.selectedLocation = null;
            this.isDescriptionModalOpen = false;
        },

        selectLocation(id) {
            if (!id) {
                this.selectedLocation = null;
                this.hoveredLocationId = null; // Clear hover state when selection is cleared
                this.isDescriptionModalOpen = false;
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
            
            // Close any open description modal when changing locations
            this.isDescriptionModalOpen = false;
        },

        // Toggle description modal
        toggleDescriptionModal() {
            this.isDescriptionModalOpen = !this.isDescriptionModalOpen;
            
            // When closing the modal, stop any videos from playing
            if (!this.isDescriptionModalOpen) {
                setTimeout(() => {
                    // Find all iframes in the modal and reload them to stop videos
                    const videoIframes = document.querySelectorAll('.modal-video-iframe');
                    videoIframes.forEach(iframe => {
                        const src = iframe.src;
                        iframe.src = '';
                        iframe.src = src;
                    });
                }, 100); // Short delay to ensure this happens after the modal starts closing
            }
        },
        
        // Get YouTube embed URL for the current location
        // This is a placeholder until we have actual YouTube URLs from Contentful
        getYoutubeEmbedUrl() {
            // In the future, this would use the actual YouTube ID from the location data
            // Currently using a consistent video based on location ID
            
            if (!this.selectedLocation) return '';
            
            // Get a deterministic index based on the location ID
            const idSum = this.selectedLocation.id.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
            const index = idSum % this.defaultYoutubeVideos.length;
            
            // Return the YouTube embed URL with the selected video ID
            return `https://www.youtube.com/embed/${this.defaultYoutubeVideos[index]}?rel=0`;
        },

        // Getters
        shouldPulse(id) {
            // Always pulse for the selected location, and also pulse for hovered locations
            return this.selectedLocation?.id === id || this.hoveredLocationId === id;
        }
    });
}); 