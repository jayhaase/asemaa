const fs = require('fs');
const path = require('path');

// Parse the contents of the gallery directory and make the file info avaible for display.
module.exports = function() {
    const galleryDir = 'src/assets/images/gallery';
    const images = [];
    
    // Read the directory
    const files = fs.readdirSync(galleryDir);
    
    // Process each file
    files.forEach(file => {
        // Only include image files
        if (file.match(/\.(jpg|jpeg|png|gif)$/i)) {
            images.push({
                url: `/images/gallery/${file}`,
                title: path.parse(file).name // Uses filename without extension as title
            });
        }
    });
    
    return {
        images: images
    };
}; 