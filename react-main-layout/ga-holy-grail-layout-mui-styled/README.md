# Holy Grail Layout in React with Styled Components

This project demonstrates how to implement the Holy Grail layout in a React application using styled components. The Holy Grail layout is a common web layout that features a header, a footer, and three columns, with the main content column being the largest and flanked by two sidebars. This project aims to showcase the implementation of this layout along with responsive behavior and testing using Jest.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/holy-grail-layout-react.git
   ```

2. Change into the project directory:

   ```bash
   cd holy-grail-layout-react
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the Holy Grail layout in action.

## Testing the Responsiveness

After running the tests, you can observe that the snapshots are generated and stored in the `__snapshots__` directory.

1. Resize your browser window or use a responsive design testing tool to see how the layout adjusts to different screen sizes.
2. Run the tests again to see that the snapshots match the responsive layout.

## Triggering Test Failure and Fixing

1. Open the `App.js` file and intentionally modify one of the components' content.
2. Run the tests using `npm test`. You will see that the test fails due to the snapshot mismatch.
3. Fix the content back to its original state.
4. Run the tests again using `npm test`. The tests should pass now that the snapshot has been updated to match the corrected content.

By going through the process of intentionally causing a test failure and then fixing it, you can become more comfortable with Jest and React Testing.

## Testing

This project includes Jest tests to ensure that the components render correctly and that the layout remains responsive. To run the tests, use the following command:

```bash
npm test
```
