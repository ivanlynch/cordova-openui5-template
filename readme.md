# Motivation

## Short

I want to make this repo as an alternative to build mobile applications with OpenUI5

## Long

The first motivation to create this repo is because HAT is out of maintenance since this [post](https://blogs.sap.com/2017/12/18/end-of-maintenance-for-hybrid-app-toolkit-local-add-on/ "post") but in the moment that they announced this post the SAP Web Ide was working right now the only chose is the SAP Business application studio and it does not comes anymore with HAT 😌.

In the meantime the OpenUI5 team are releasing web components to develop react/vue/angular based applications. I think they are going through the right way and hopefully in an closer future they start any react-native based project 😏 😏 .

![Cordova](https://spotsolutions.com/wp-content/uploads/2017/06/cordova_logo_normal_dark_large.png "Cordova")

![OpenUI5](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/OpenUI5_blue_horizontal.svg/1200px-OpenUI5_blue_horizontal.svg.png "OpenUI5")

# **Change Log** 📜📝

All changes to the **cordova-openui5-template** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 🚀[1.0.1] - 2020-11-29

### Changed

+ In the gulpfile right now is downloading the latest version of the mobile-runtime (Is a little bit faster)

## Prerequisites 🔧🔧

- Nodejs
- - Installation instructions can be found [Here](https://nodejs.org/en/ "Here")
- Cordova
  ```bash
  npm install -g cordova
  ```
- Gulp
  ```bash
  npm install --global gulp-cli
   ```

# 🐑 Clone & Install 🐑

Open your terminal and execute:

### Degit

```bash
npx degit ivanlynch/cordova-openui5-template#main folder-name
```

this should download a copy of the repo in the defined folder then go to directory and install the dependencies like this:

```bash
cd folder-name && npm i
```

after installation of dependencies you need to execute:

```bash
gulp
```

Note: Right now the tasks defined in Gulpfile only download the latest mobile-runtime version in the meantime you can edit the gulpfile to fit your needs


### Git

```bash
git clone https://github.com/ivanlynch/cordova-openui5-template.git
```

then cd into the repo folder

```bash
cd cordova-openui5-template && npm i
```

after installation of dependencies you need to execute:

```bash
gulp
```

Note: Right now the tasks defined in Gulpfile only download the latest mobile-runtime version in the meantime you can edit the gulpfile to fit your needs


# Platforms 📱📟

### Adding needed platforms

Open your terminal in the root of the project

```bash
cordova platform add android
cordova platform add ios
```

### Running Android

```bash
cordova run android
```

### Running IOS

> Note: in IOS you need to do add some lines of code in the /platforms/ios/HelloCordova/config.xml because a known [issue](Handling XMLHttpRequests (XHR)

you need to add at the end of the file:

```xml
<preference name="scheme" value="app" />
<preference name="hostname" value="localhost" />
```

```bash
cordova run ios
```

## TODOS 📔

- Add any functionality to change the package name of the projects
- Add any way to setup the openui5 version because currently is using the latest version tag
