document.addEventListener("DOMContentLoaded", function() {
    const videos = [
        { id: "a5DOIvjxiQ0", thumbnail: "https://img.youtube.com/vi/a5DOIvjxiQ0/mqdefault.jpg" },
        { id: "u6s1AiYcLs8", thumbnail: "https://img.youtube.com/vi/u6s1AiYcLs8/mqdefault.jpg" },
        { id: "vMVBzr_rh2g", thumbnail: "https://img.youtube.com/vi/vMVBzr_rh2g/mqdefault.jpg" },
        { id: "anzXUgb6rkU", thumbnail: "https://img.youtube.com/vi/anzXUgb6rkU/mqdefault.jpg" }
        // Añade más videos aquí
    ];

    const thumbnailsContainer = document.getElementById('video-thumbnails');
    const mainVideo = document.getElementById('main-video');

    videos.forEach((video, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = `carousel-item ${index === 0 ? 'active' : ''}`;

        const img = document.createElement('img');
        img.src = video.thumbnail;
        img.alt = `Video ${video.id}`;
        img.className = 'd-block w-100 thumbnail';
        img.setAttribute('data-video-id', video.id);

        itemDiv.appendChild(img);
        thumbnailsContainer.appendChild(itemDiv);
    });

    thumbnailsContainer.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === 'IMG') {
            const videoId = e.target.getAttribute('data-video-id');
            mainVideo.src = `https://www.youtube.com/embed/${videoId}`;
        }
    });
});
