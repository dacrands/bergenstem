const video = document.querySelector('.video-wrapper');
const source = 'https://img.youtube.com/vi/' + video.dataset.embed + '/sddefault.jpg';
const image = new Image();

image.src = source;
image.addEventListener('load', () => {
    video.appendChild(image);
});

video.addEventListener('click', () => {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/'+ video.dataset.embed + '?rel=0&showinfo=0&autoplay=1');
    
    video.innerHTML = '';
    video.appendChild(iframe);
});