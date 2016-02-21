# How to integrate React with Meteor v1.3

## Preparation

### Create new Meteor app with v1.3 (currently in beta)

`meteor create --release 1.3-beta.11 APP_NAME`

### Upgrade Meteor app to v1.3 (currently in beta)

`meteor update --release 1.3-beta.11`

## Use *static-html* instead of *templating* + *blaze* + *spacebars*

`meteor add static-html && meteor remove blaze-html-templates`

## Install React & ReactDOM

`npm install react react-dom --save`

### Why use `imports` folder?

The folder will respect the order of module importing

## ESLint

The easiest way to make ESLint works anywhere is to:

`npm install babel-eslint eslint eslint-plugin-react --global`

> Different editors and/or IDEs have their own way to run lint program.

### Setup

`npm install babel-eslint eslint eslint-plugin-react --save-dev`

## Routing

### React Router

#### Setup

`npm install react-router --save`

#### How to deal with history API fallback?

### Flow Router

#### Setup

```
meteor add kadira:flow-router       # w/o SSR
meteor add kadira:flow-router-ssr   # w/ SSR

npm install react-mounter --save
```

[FlowRouter on Github](https://github.com/kadirahq/flow-router)

[ReactMounter on Github](https://github.com/kadirahq/react-mounter)

#### Advanced Routing Tenichques

For advanced pattern matching in FlowRouter, see related [documentation of PathToRegexp package](https://github.com/component/path-to-regexp#usage).

#### SSR Support for better SEO

#### Router-triggered Actions

- Google Analytics Service for example.

#### Anti Patterns

1. Route-level subscription management
1. Data management in the router
1. Managing auth logic inside the router

[On Github](https://github.com/kadirahq/flow-router/tree/ssr)

## Meteor Data Layer with React

### The *ReactMeteorData* mixin

[Read the Docs](https://react-in-meteor.readthedocs.org/en/latest/)

### React Container Pattern

**Use *container* to wrap UI components and let it to fetch data and passing down to components.** This will allow you to separate the data layer and the presentation layer very easily.

> Read: [*Let's Compose Some React Containers*](https://voice.kadira.io/let-s-compose-some-react-containers-3b91b6d9b7c8#.8scq80753)

#### Setup

```
meteor remove autopublish

npm install react-komposer --save
```

#### Loading & Warning handling

[On Github](https://github.com/kadirahq/react-komposer/tree/master)

#### Subscription Management

[See Here](https://kadira.io/academy/meteor-routing-guide/content/subscriptions-and-data-management/using-subs-manager)

[and Here](https://meteorhacks.com/subscriptions-manager-is-here/)

#### Caching

## I18n & L11n - FormatJS as a rescue (halfway done)

[See Documentation](http://formatjs.io/guides/)

### Setup

`npm install react-intl --save`

#### ...But, we need to support mixin with React, right?

Unfortunatelly yes, here’s a [solution](https://github.com/brigand/react-mixin).

> **What’s wrong with mixins?**
>
> As a programming pattern, mixin is considered as not good as composition,
> e.g.react-komposer uses higher order function composition instead of mixins.
>
> We don’t need mixins in 90 percent of time, but there’re still some
> mixin-based solution exists.

`npm install react-mixin --save`

#### Add Intl support to Meteor

`npm install intl intl-locales-supported --save`

### Language Tags

- `zh` - Chinese
- `zh-Hans` - Chinese written using the Simplefied Chinese script
- `zh-Hant` - Chinese written using the Traditional Chinese script
- `zh-Hans-CN` - Chinese written using the Simplefied script as used in mainland of China
- `zh-Hant-TW` - Chinese written using the Traditional script as used in Taiwan
- `zh-cmn-Hans-CN` - Chinese, Mandarin, Simplefied script, used in mainland of China
- `zh-yue-Hant-HK` - Chinese, Cantonese, Traditional script, used in Hong Kong

[See more examples and standards (BCP47)](http://tools.ietf.org/html/bcp47)

## Other

### Handle React Tap Events

`npm install react-tap-event-plugin --save`

[On Github](https://github.com/zilverline/react-tap-event-plugin)

## Misc

### Dynamic Page Title

`meteor add kadira:dochead`

### Meteor CSS Modules

[On Github](https://github.com/nathantreid/meteor-css-modules)

### React can work with Blaze

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

4. Unfortunatelly, there're some limitations still. For further information [please read the doc](https://react-in-meteor.readthedocs.org/en/latest/react-template-helper/).
