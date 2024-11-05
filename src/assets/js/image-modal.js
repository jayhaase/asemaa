function imageModal() {
    return {
        isOpen: false,
        currentImage: '',
        currentTitle: '',
        open(detail) {
            this.isOpen = true;
            this.currentImage = detail.image;
            this.currentTitle = detail.title;
            document.body.style.overflow = 'hidden';
        },
        close() {
            this.isOpen = false;
            document.body.style.overflow = '';
            this.currentImage = '';
            this.currentTitle = '';
        }
    }
} 