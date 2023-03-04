console.log(`Ваша оценка - 70 баллов
P.S. work on the project is still underway...)

Отзыв по пунктам ТЗ:

========================================================
Не выполненные/не засчитанные пункты:
========================================================
1) при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause

2) при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play

3) треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev)

4) трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем

5) после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый.

6) добавлен прогресс-бар в котором отображается прогресс проигрывания

7) при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека

8) над прогресс-баром отображается название трека

9) отображается текущее и общее время воспроизведения трека

10) есть кнопка звука при клике по которой можно включить/отключить звук

11) добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука

12) можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте

13) переводится язык и меняется формат отображения даты

14) переводится приветствие и placeholder

15) переводится прогноз погоды в т.ч описание погоды и город по умолчанию

16) переводится цитата дня т.е цитата отображается на текущем языке приложения. Сама цитата может быть другая

17) переводятся настройки приложения, при переключении языка приложения в настройках, язык настроек тоже меняется

18) в качестве источника изображений может использоваться Unsplash API

19) в качестве источника изображений может использоваться Flickr API

20) в настройках приложения можно указать язык приложения (en/ru или en/be)

21) в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API

22) если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото

23) в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал

24) Скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их

25) настройки приложения сохраняются при перезагрузке страницы

26) ToDo List - список дел (как в оригинальном приложении) или Список ссылок (как в оригинальном приложении) или Свой собственный дополнительный функционал, по сложности аналогичный предложенным

========================================================
**Выполненные пункты:**
========================================================
1) время выводится в 24-часовом формате, например: 21:01:00

2) время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается)

3) выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня"

4) текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь). Проверяется соответствие приветствия текущему времени суток

5) пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется

6) ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20). Проверяем, что при перезагрузке страницы фоновое изображение изменилось. Если не изменилось, перезагружаем страницу ещё раз

7) изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.Изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке)

8) изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке)

9) при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения

10) при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage

11) для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API. Данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел

12) выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов)

13) при загрузке страницы приложения отображается рандомная цитата и её автор

14) при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую)`);