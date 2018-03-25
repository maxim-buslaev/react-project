# React Project
Среда для эффективной frontend-разработки

## JS
* пишите на последнем ECMAScript, запускайте даже в IE 11
* импортируйте что угодно и откуда угодно без '../../..', используя алиасы (~css, ~img, ~actions, ~constants, ...)

## CSS - самое полезное из PostCSS:
* поддержка SCSS функционала: каскад, переменные, циклы, ...
* современный сброс стилей от PostCSS Reset и удобные медиа запросы вида ($tablet <= width < $desktop)
* код на современном CSS с помощью postcss-preset-env и autoprefixer
* объединение @media запросов, сортировка z-index и минификация кода 

## HTML
* генерация страницы на основе шаблона, минификация и асинхронная загрузка всех ресурсов

## IMG
* автоматическая оптимизация изображений без потери качества

## Development
* <b>yarn start</b> запускает приложение на локальном http/https dev-сервере
* "горячая" перезагрузка при изменении файлов (обновляется только изменённый компонент, без потери состояний приложения)
* никаких ошибок из-за роутинга: все необходимые приложению файлы всегда найдутся
* автоформатирование кода: Prettier для JS, StyleFmt для CSS

## Deploy
* любая команда ниже сначала собирает prodaction версию проекта рядом с настроенным сервером (hapi 17)
* <b>yarn dockerbuild</b> заливает контейнер, автоматически увеличив его версию
* <b>yarn deploy</b> разворачивает приложение на бесплатном хостинге от [Zeit Now](https://zeit.co/now)
* <b>yarn github</b> заливает в отдельную ветку репозитория проекта, см. [хостинг GitHub Pages](https://pages.github.com/)
