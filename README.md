# How to integrate React with Meteor v1.3
# 整合 React v0.14.x 与 Meteor v1.3-beta

## Preparation
## 前置准备工作

### Create new Meteor app with v1.3 (currently in beta)
### 创建 Meteor v1.3-beta 应用程序

`meteor create --release 1.3-beta.11 APP_NAME`

### Upgrade Meteor app to v1.3 (currently in beta)
### 升级 Meteor 应用程序到 v1.3-beta

`meteor update --release 1.3-beta.11`

## Use *static-html* instead of *templating* + *blaze* + *spacebars*
## 使用 *static-html* 替代 *templating* + *blaze* + *spacebars*

`meteor add static-html && meteor remove blaze-html-templates`

## Install React & ReactDOM
## 安装 React & ReactDOM

`npm install react react-dom --save`

### Why use `imports` folder?
### 为什么使用 `imports` 目录（而不是 `client`）？

The folder will respect the order of module importing
支持加载顺序

## ESLint
## 语法风格检查

The easiest way to make ESLint works anywhere is to:
让 ESlint 随处可用的最简单办法：

`npm install babel-eslint eslint eslint-plugin-react --global`

> Different editors and/or IDEs have their own way to run lint program.
> 不同的编辑器和／或 IDEs 会有各自触发语法检查程序的方式。

### Setup

`npm install babel-eslint eslint eslint-plugin-react --save-dev`

## Routing
## 路由

### React Router

#### Setup

`npm install react-router --save`

#### How to deal with history API fallback?
#### 如何处理 history API？（在 Meteor 环境之下）

### Flow Router

#### Setup

```
meteor add kadira:flow-router       # w/o SSR
meteor add kadira:flow-router-ssr   # w/ SSR

npm install react-mounter --save
```

[FlowRouter on Github](https://github.com/kadirahq/flow-router)

[ReactMounter on Github](https://github.com/kadirahq/react-mounter)

#### Advanced Routing Techniques
#### 高级路由技巧

（高级 URLs 模式匹配）For advanced pattern matching in FlowRouter, see related [documentation of PathToRegexp package](https://github.com/component/path-to-regexp#usage).

#### SSR Support for better SEO
#### 服务端渲染（用以支持 SEO）

#### Router-triggered Actions
#### 经由路由触发的动作

- Google Analytics Service for example.
- 用 Google Analytics 服务举例

#### Anti Patterns
#### 使用路由的一些反模式（也就是不要这么用）

1. Route-level subscription management - 路由层级的订阅管理
1. Data management in the router - 在路由器中管理数据
1. Managing auth logic inside the router - 在路由器中管理认证逻辑

[On Github](https://github.com/kadirahq/flow-router/tree/ssr)

## Meteor Data Layer with React
## 结合 React 在 Meteor 中的数据层

### The *ReactMeteorData* mixin

[Read the Docs](https://react-in-meteor.readthedocs.org/en/latest/)

### React Container Pattern
### React 容器模式

**Use *container* to wrap UI components and let it to fetch data and passing
down to components.** This will allow you to separate the data layer and the
presentation layer very easily.

**使用 *容器* 来包装 UI 组件并且让它负责数据获取与向下传递**，这样使得分离表现
层和数据层变得十分容易。

> Read: [*Let's Compose Some React Containers*](https://voice.kadira.io/let-s-compose-some-react-containers-3b91b6d9b7c8#.8scq80753)

#### Setup

```
meteor remove autopublish

npm install react-komposer --save
```

#### Loading & Warning handling
#### 组件加载和错误反馈状态的处理

[On Github](https://github.com/kadirahq/react-komposer/tree/master)

#### Subscription Management
#### 订阅管理

[See Here](https://kadira.io/academy/meteor-routing-guide/content/subscriptions-and-data-management/using-subs-manager)

[and Here](https://meteorhacks.com/subscriptions-manager-is-here/)

#### Caching
#### 数据缓存

## I18n & L11n - FormatJS as a rescue (halfway done)
## 国际化与本地化——使用 Yahoo FormatJS（有坑，完成过半）

[See Documentation](http://formatjs.io/guides/)

### Setup

`npm install react-intl --save`

#### ...But, we need to support mixin with React, right?
#### ...可是，咱得让 React 支持 mixin，不是吗？

（恐怕是的）Unfortunately yes, here’s a [solution](https://github.com/brigand/react-mixin).


> **What’s wrong with mixins?**
>
> As a programming pattern, mixin is considered as not good as composition,
> e.g.react-komposer uses higher order function composition instead of mixins.
>
> We don’t need mixins in 90 percent of time, but there’re still some
> mixin-based solution exists.

`npm install react-mixin --save`

#### Add Intl support to Meteor
#### 为 Meteor 增加 Intl API 的支持

`npm install intl intl-locales-supported --save`

### Language Tags
### 语言标签

- `zh` - Chinese
- `zh-Hans` - Chinese written using the Simplified Chinese script
- `zh-Hant` - Chinese written using the Traditional Chinese script
- `zh-Hans-CN` - Chinese written using the Simplified script as used in mainland of China
- `zh-Hant-TW` - Chinese written using the Traditional script as used in Taiwan
- `zh-cmn-Hans-CN` - Chinese, Mandarin, Simplified script, used in mainland of China
- `zh-yue-Hant-HK` - Chinese, Cantonese, Traditional script, used in Hong Kong

[See more examples and standards (BCP47)](http://tools.ietf.org/html/bcp47)

## Other
## 其他

### Handle React Tap Events
### 处理在 React 中的 Tap 事件

`npm install react-tap-event-plugin --save`

[On Github](https://github.com/zilverline/react-tap-event-plugin)

## Misc
## 杂项

### Editor Config

Automatically detect and setup editor specific configurations.
自动检测和设置编辑器相关的配置。

### Dynamic Page Title
### 动态页面标题

`meteor add kadira:dochead`

### Meteor CSS Modules
### Meteor CSS 模块

[On Github](https://github.com/nathantreid/meteor-css-modules)

### React can work with Blaze
### React 与 Blaze 混用

### Automaticaly API Documentation
### 自动化 API 文档

1. A package is needed:

    `meteor add react-template-helper`

1. Write template such as:

    ```html
    <template name="example">
      <div>Hello, {{username}}</div>
      <div>{{> React component=SomeComponent foo=bar}}</div>
    </template>
    ```

3. ...and of course you need to pass in the component with a helper:

    ```javascript
    class SomeComponent extends React.Component {
      // ...
    }

    Template.example.helpers({
      SomeComponent() {
        return SomeComponent;
      },
    });
    ```

4. Unfortunately, there're some limitations still. For further information [please read the doc](https://react-in-meteor.readthedocs.org/en/latest/react-template-helper/).
