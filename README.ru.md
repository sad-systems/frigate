# Frigate

> Change language: [![Русский](docs/assets/images/ru.gif)](README.ru.md) [![English](docs/assets/images/en.gif)](README.md)

###### Автор: MrDigger <mrdigger@sad-systems.ru>
###### © SAD-Systems [http://sad-systems.ru](), 2019

        
## Описание

Библиотека компоентов для Frontend.

В настоящее время включает в себя:
   * core - предоставляет независимые от фреймворка функции и классы.
   * react - предоставляет компоненты для платформы React.

## Установка

```
yarn add @sad-systems/frigate-core
yarn add @sad-systems/frigate-react
```

## Использование

...будет описано в будущем. 

## Живая демонстрация
    
Посмотрите как это работает на [живом примере](http://frigate.examples.sad-systems.ru/)
  
 
## Документация

Посмотреть [oписание классов](http://frigate.examples.sad-systems.ru/docs/). 


## Разработка
 
### Исходные файлы проекта

  Все файлы расположены в каталоге [/src](./src)
  
### Файлы сборки

 Файлы сборки помещаются в папку `/build` (генерируются автоматически).

### Файлы документации

  Файлы документации помещаются в папку [/docs/public](./docs/public) (генерируются автоматически).

### Установка
```
yarn
```

### Компиляция и горячая перезагрузка для разработки
```
yarn start
```

### Выпуск рабочей версии

#### Полная сборка для выпуска: 

(test + build + dist + docs):
```
yarn prod
```

#### Отдельные сборки:

Сборка пакетов:
```
yarn build
```

Компиляция пакетов для распространения через npmjs.com:
```
yarn dist
```

### Генерация документации
```
yarn docs
```

### Тестирование
```
yarn test
```


## Лицензия

MIT
