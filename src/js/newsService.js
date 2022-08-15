import axios from 'axios';

export class NewsApiService {
  #KEY_API = '29293272-560d8063734c87150746e958a';
  #BASE_URL = 'https://pixabay.com/api/';

  #searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 40;
  }

  async getSearchQuery() {
    try {
      const url = `${this.#BASE_URL}?key=${this.#KEY_API}&q=${
        this.searchQuery
      }&${this.#searchParams}&page=${this.page}&per_page=${this.per_page}`;
      this.page += 1;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
