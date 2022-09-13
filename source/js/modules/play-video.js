const videos = document.querySelectorAll('.video');
const link = document.querySelector('.video__link');
const button = document.querySelector('.video__button');
const images = document.querySelectorAll('.video svg');

const findVideos = () => {
  if (videos) {
    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }
};

function setupVideo(video) {
  if (link) {
    let id = parseMediaURL(link);

    video.addEventListener('click', () => {
      let iframe = createIframe(id);

      link.removeAttribute('href');
      if (images) {
        for (let image of images) {
          image.remove();
        }
      }
      if (button) {
        button.remove();
      }
      video.appendChild(iframe);
    });

    link.setAttribute('href', '#');
    link.setAttribute('tabindex', '-1');
    video.classList.add('video--enabled');
  }
}

function parseMediaURL(item) {
  let regexp = /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/;
  let url = item.href;
  let match = url.match(regexp);
  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__frame');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

export {findVideos};
