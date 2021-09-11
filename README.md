# Toasty 🍞

This project was built due to the need to handle toast notifications from within a given Carbon-based project.

## Installation

To use this in your project, you must be have installed `carbon` into your project. To do so for `react`-based projects, install the following dependencies:

- [`carbon-components`](https://github.com/carbon-design-system/carbon/tree/master/packages/components)
- [`carbon-components-react`](https://github.com/carbon-design-system/carbon/tree/master/packages/react)
- [`carbon-icons`](https://github.com/carbon-design-system/carbon-icons)
- [`carbon-icons-react`](https://github.com/carbon-design-system/carbon/tree/master/packages/icons-react)

Assuming `carbon` is now installed and configured, download the following files:

- [`NotificationContext.js`](src/contexts/NotificationContext.js)
- [`NotificationProvider.js`](src/providers/NotificationProvider.js)
- [`index.scss`](src/providers/index.scss)

Place them into your project file structure. The files `NotificationProvider.js` and `index.scss` are meant to be placed into a folder called `NotificationProvider`.

To use in your project, see [this example](src/routes/index.js). 

To view the options provided by `showNotification()` see [`NotificationProvider.js`](src/providers/NotificationProvider).

## Development

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/) (recommended)

### Steps

Run the live-reload server on <http://localhost:3000>

```bash
yarn start
```

## 📚 The Tech. Stack

This project uses the following technologies:

**The Front-End**:

- [**React.js**](https://reactjs.org/) - For building the interface along with:
  - [**Styled-Components**](https://www.styled-components.com/) - for styling.

## 📚 The Design Stack

This project uses the following technologies:

- [**Carbon Design System**](https://carbondesignsystem.com) - Carbon is the design system for IBM web and product. It is a series of individual styles, components, and guidelines used for creating unified UI.

## License

© Nicholas Adamou.

It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE
