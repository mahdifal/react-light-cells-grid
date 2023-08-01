# React 3x3 Grid of Light Cells

This project is a simple React application that builds a 3x3 grid of light cells where you can click on the cells to activate them, turning them green. Once all the cells have been activated, they will be deactivated one by one in the reverse order they were activated with a 300ms interval in between.

# Installation

To run the project locally, follow these steps:

```sh
git clone https://github.com/mahdifal/react-light-cells-grid.git
```

Navigate to the project directory:

```sh
cd react-light-cells-grid
```

Install dependencies:

```sh
npm install
```

# Usage

To start the application, use the following command:

```sh
npm run dev
```

This will run the app in development mode. Open http://localhost:5173 in your browser to view the application.
Implementing classnames function

# classNames

The classnames function is a commonly-used utility in modern front-end applications to conditionally join CSS class names together. We will implement a simple version of this function to handle de-duplicating classes, ensuring that false values will not be added to the output.

You can use the classnames function within your React components to conditionally apply CSS classes based on certain conditions.

classNames file located in:

```sh
src/utils/classNames.js
```

Remember to import the function into your component file:

```sh
import classnames from './path/to/classnames';
```

That's it! Enjoy the interactive 3x3 grid of light cells and the implemented classnames function in your React application!
