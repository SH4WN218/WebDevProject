const form = document.querySelector('#mainForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    deleteImages();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }; // Params object by Axios
    const res = await axios.get(` https://api.tvmaze.com/search/shows?q=`, config);
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;// .show is coming from the API.
            document.body.append(img);
        }

    }
}

const deleteImages = () => {
    const imgs = document.querySelectorAll('img');
    for (let img of imgs) {
        img.remove();
    }
}