class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;

    this._getJSON = function (res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };
  
  translateText(text) {
    return fetch(`${this._baseUrl}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
      },
      body: {
        "text": text,
        "to": "en",
        "from": "ru"
      }
    })
    .then(res => this._getJSON(res))
  };
}

export const api = new Api({
  baseUrl: 'https://nlp-translation.p.rapidapi.com/v1/translate',
});