const form = document.querySelector('form');
const shortUrl = document.querySelector('#short-url');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const url = document.querySelector('#url').value;
  shortenUrl(url, (shortenedUrl) => {
    shortUrl.textContent = shortenedUrl;
  });
});

function shortenUrl(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(xhr.responseText);
    } else {
      console.error('An error occurred while shortening the URL');
    }
  };
  xhr.send();
}