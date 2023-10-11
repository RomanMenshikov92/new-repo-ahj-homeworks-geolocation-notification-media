/* eslint-disable object-curly-newline */
import videoOne from '../video/2Pac - Changes.mp4'; // ссылка на видео
import audioOne from '../audio/Center - Город дорог (ft. Баста).mp3'; // ссылка на аудио

export default class TimelineMemory {
  constructor(storageKey = 'TimelineMemory') {
    this.storageKey = storageKey; // название ключа хранилища
    this.data = this.loadFromStorage(); // сразу подгружает данные из localStorage
  }

  /* метод в основном для примера, изначально добавляет в память три тестовых сообщения */
  init() {
    const posts = [
      { date: '11.10.2023 15:17:22', body: 'Мои посты тут', geo: '[55.964, 37.15351]', type: 'text' },
      { date: '11.10.2023 15:18:26', body: videoOne, geo: '[55.964, 37.15351]', type: 'video' },
      { date: '11.10.2023 15:19:23', body: audioOne, geo: '[55.964, 37.15351]', type: 'audio' },
    ];

    if (this.data.length === 0) {
      for (let i = 0; i < posts.length; i += 1) { this.addItem(posts[i]); }
    }
  }

  /* загружает данные из localStorage, если пусто, то получает [] */
  loadFromStorage() {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  /* сохранение текущих данных под заранее указанным ключом в localStorage */
  saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data));
  }

  /* добавляет данные в массив и сохраняет его в localStorage */
  addItem(item) {
    this.data.push(item);
    this.saveToStorage();
  }

  /* получение массива постов */
  getAllItems() {
    return this.data;
  }

  /* удаление поста по индексе */
  removeItem(index) {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
      this.saveToStorage();
    }
  }

  /* очистка массива данных памяти в localStorage */
  clear() {
    this.data = [];
    localStorage.removeItem(this.storageKey);
  }
}
