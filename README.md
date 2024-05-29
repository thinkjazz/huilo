
# Huilo Mode v1.13 Chrome Extension

This Chrome extension replaces occurrences of the word "Путин" and its inflected forms with the word "хуйло" and its appropriate inflections when the button in the popup is clicked.

## Features

- Replaces the word "Путин" with "хуйло" and all its grammatical forms appropriately.
- Works on all open tabs but only modifies the currently active tab when the button is clicked.
- Simple and user-friendly interface with a single button to perform the text replacement.

## Installation

1. **Clone or download this repository:**
   ```bash
   git clone https://github.com/yourusername/replace-words-extension.git
   cd replace-words-extension
   ```
2. **Open Chrome and go to the Extensions page:**
   - Navigate to chrome://extensions/
3. **Enable Developer Mode:**
   - Toggle the "Developer mode" switch in the top right corner.
4. **Load the extension:**
   - Click the "Load unpacked" button.
   - Select the directory where you cloned/downloaded this repository.

The extension is now installed!

## Usage

1. Open any webpage that contains occurrences of the word "Путин" or its inflected forms.
2. Click the extension icon in the Chrome toolbar.
3. Click the "Replace Words" button in the popup.
4. The words should now be replaced on the active tab.

## Development

To make changes to the extension:

1. Edit the source files as needed:
   - `content.js` for the main logic of text replacement.
   - `popup.js` for the popup button click handler.
   - `popup.html` and `popup.css` for the popup UI.
2. Reload the extension in Chrome:
   - Go to the Extensions page (chrome://extensions/).
   - Click the "Reload" button for the Replace Words extension.

## Source Files

- `manifest.json`: Configuration file for the Chrome extension.
- `content.js`: Contains the logic for text replacement.
- `popup.html`: HTML file for the popup UI.
- `popup.js`: JavaScript file for handling the popup button click.
- `popup.css`: CSS file for styling the popup (inline in popup.html).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Feel free to submit issues and pull requests for any improvements or bug fixes.


# Расширение Huilo Mode v1.13 для Chrome

Это расширение для Chrome заменяет все вхождения слова "Путин" и его форм на слово "хуйло" и его соответствующие формы при нажатии на кнопку во всплывающем окне.

## Функции

- Заменяет слово "Путин" на "хуйло" и все его грамматические формы соответствующим образом.
- Работает на всех открытых вкладках, но изменяет только активную вкладку при нажатии кнопки.
- Простой и удобный интерфейс с одной кнопкой для выполнения замены текста.

## Установка

1. **Клонируйте или скачайте этот репозиторий:**
   ```bash
   git clone https://github.com/yourusername/replace-words-extension.git
   cd replace-words-extension
   ```
2. **Откройте Chrome и перейдите на страницу расширений:**
   - Перейдите по адресу chrome://extensions/
3. **Включите режим разработчика:**
   - Переключите тумблер "Режим разработчика" в правом верхнем углу.
4. **Загрузите расширение:**
   - Нажмите кнопку "Загрузить распакованное".
   - Выберите каталог, куда вы клонировали/скачали этот репозиторий.

Расширение установлено!

## Использование

1. Откройте любую веб-страницу, содержащую вхождения слова "Путин" или его форм.
2. Нажмите на значок расширения на панели инструментов Chrome.
3. Нажмите кнопку "Заменить слова" во всплывающем окне.
4. Слова должны быть заменены на активной вкладке.

## Разработка

Для внесения изменений в расширение:

1. Измените исходные файлы по мере необходимости:
   - `content.js` для основной логики замены текста.
   - `popup.js` для обработчика нажатия кнопки во всплывающем окне.
   - `popup.html` и `popup.css` для интерфейса всплывающего окна.
2. Перезагрузите расширение в Chrome:
   - Перейдите на страницу расширений (chrome://extensions/).
   - Нажмите кнопку "Перезагрузить" для расширения Replace Words.

## Исходные файлы

- `manifest.json`: Конфигурационный файл для расширения Chrome.
- `content.js`: Содержит логику замены текста.
- `popup.html`: HTML файл для интерфейса всплывающего окна.
- `popup.js`: JavaScript файл для обработки нажатия кнопки во всплывающем окне.
- `popup.css`: CSS файл для стилизации всплывающего окна (встроен в popup.html).

## Лицензия

Этот проект лицензирован по лицензии MIT - см. файл LICENSE для подробностей.

## Вклад

Не стесняйтесь отправлять вопросы и запросы на добавление улучшений или исправление ошибок.
