const fs = require('fs');
const path = require('path');

// Parse the contents of the gallery directory and make the file info available for display.
module.exports = function() {
    const galleryDir = 'src/assets/images/gallery';
    const galleryGroups = {};
    
    // Read the main directory
    const items = fs.readdirSync(galleryDir, { withFileTypes: true });
    
    // Process each item (files and directories)
    items.forEach(item => {
        if (item.isDirectory()) {
            // Handle subdirectory
            const subDirPath = path.join(galleryDir, item.name);
            const files = fs.readdirSync(subDirPath);
            
            const groupImages = files
                .filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i))
                .map(file => ({
                    url: `/images/gallery/${item.name}/${file}`,
                    title: path.parse(file).name,
                    group: item.name
                }));
                
            if (groupImages.length > 0) {
                galleryGroups[item.name] = groupImages;
            }
        } else if (item.isFile() && item.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
            // Handle root-level images
            if (!galleryGroups['ungrouped']) {
                galleryGroups['ungrouped'] = [];
            }
            
            galleryGroups['ungrouped'].push({
                url: `/images/gallery/${item.name}`,
                title: path.parse(item.name).name,
                group: 'ungrouped'
            });
        }
    });
    
    return {
        groups: galleryGroups
    };
}; 