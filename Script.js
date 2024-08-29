    const searchForm = document.getElementById("search-form");
    const searchBox = document.getElementById("search-box");
    const searchResult = document.getElementById("search-result");
    const searchMore = document.getElementById("show-more");
    let keyword = "";
    let page = 1;
    const accessKey = "DXkxk8Q6rGaE9E-gREanuR_BeyETVZcGMYuPoz-tHtA";

    async function searchImage() {
      keyword = searchBox.value;
      const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
      const response = await fetch(url);
      const data = await response.json();
      const results = data.results;

      results.forEach((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
      });

      searchMore.style.display = "block";
    }

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      page = 1;
      searchResult.innerHTML = ""; // Clear previous results
      searchImage();
    });

    searchMore.addEventListener('click', () => {
      page++;
      searchImage();
    });