# Frigate

> Сменить язык: [![Русский](docs/assets/images/ru.gif)](README.ru.md) [![English](docs/assets/images/en.gif)](README.md)

###### Author: MrDigger <mrdigger@sad-systems.ru>
###### © SAD-Systems [http://sad-systems.ru](), 2019
   
   
## Description

Frontend components library.

Currently includes:
  * core - Provides the framework independent functions and classes.
  * react - Provides the components for React framework.

## Install

```
yarn add @sad-systems/frigate-core
yarn add @sad-systems/frigate-react
```

## Usage

...will be described in the future. 
    
## Live demo

Try the [live demo](http://frigate.examples.sad-systems.ru/)
  

## Documentation

View [classes description](http://frigate.examples.sad-systems.ru/docs/).
 

## Development

### Source files

  All the source files are placed under the [/src](./src) folder
  
### Build files

 Production files are placed under the `/dist` folder (automatically generated).
 
### Docs files

  All the docs files are generated under the [/docs/public](./docs/public) folder.

### Setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn start
```

### Production release

#### Full build to release: 

(test + build + dist + docs):
```
yarn prod
```

#### Separate builds:

Build the bundles:
```
yarn build
```

Compile packages to distribute via npmjs.com:
```
yarn dist
```

### Docs generation
```
yarn docs
```

### Testing
```
yarn test
```

## License

MIT
