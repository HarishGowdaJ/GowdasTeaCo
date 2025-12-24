# Gowda's Tea Co. - The Heritage Chai Point

A modern, responsive website for Gowda's Tea Co., a premium tea and coffee house with an empire-themed design.

## Features

- **Responsive Design**: Works on all devices from mobile to desktop
- **Modern UI/UX**: Clean, elegant design with smooth animations
- **Interactive Elements**:
  - Image slider showcasing the cafe and products
  - Animated counter statistics
  - Google Reviews integration (requires API key)
  - Smooth scrolling navigation
  - Mobile-friendly hamburger menu
- **Performance Optimized**: Fast loading times and smooth animations

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd Gowda'sTea
   ```

2. **Add your media files**
   - Place your images in the `images/` directory
   - Add your video to the `videos/` directory and update the video source in `index.html`

3. **Set up Google Reviews (Optional)**
   - Get a Google Places API key from the [Google Cloud Console](https://console.cloud.google.com/)
   - Find your place ID using the [Google Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
   - Update the API key and place ID in `js/main.js`

4. **Open in Browser**
   Simply open `index.html` in your preferred web browser to view the website.

## File Structure

```
Gowda'sTea/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── main.js        # JavaScript functionality
├── images/            # Store all images here
│   ├── slide1.jpg
│   ├── slide2.jpg
│   ├── slide3.jpg
│   └── placeholder-avatar.jpg
└── videos/            # Store video files here
    └── tea-video.mp4
```

## Customization

### Colors
You can customize the color scheme by modifying the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #8B4513;    /* SaddleBrown */
    --secondary-color: #DAA520;  /* GoldenRod */
    --accent-color: #A52A2A;     /* Brown */
    --light-color: #F5DEB3;      /* Wheat */
    --dark-color: #2F4F4F;       /* DarkSlateGray */
}
```

### Fonts
This project uses Google Fonts (Cinzel for headings and Montserrat for body text). You can change these in the `<head>` section of `index.html`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 10+)
- Chrome for Android (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Unsplash](https://unsplash.com/) for placeholder images (replace with your own)

---

**Note**: Replace the placeholder content (images, videos, and text) with your actual content before deploying the website.
