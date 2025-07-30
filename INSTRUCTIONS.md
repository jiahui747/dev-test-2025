# Frontend Developer Technical Test

This task is designed to evaluate your skills in **React**, **Next.js**, **Typescript**, **TailwindCSS**, and **animation libraries** such as **GSAP** or **Motion**. You will build a small application that fetches data from a public API and presents it with engaging animations and a responsive UI.

## Project Requirements

### Tech Stack:

- **React with Next.js**
- **Typescript**
- **TailwindCSS** for styling
- **GSAP** or **Motion** for animations

### Features to Implement:

1. Fetch data from the [Jelly Bean Wiki API](https://jellybellywikiapi.onrender.com/swagger/index.html).
2. Display a list of fetched data on the home page in a structured and user-friendly way.
   - You may choose which endpoint you fetch to render here.
   - Pagination?
3. Add filtering or searching functionality to allow users to refine the list based on a specific criterion.
4. Provide a detail page for each item in the list (using Next.js dynamic routes). On this page, fetch and display additional data related to the item.
   - please pull in data from atleast two endpoints to enrich this page.
   - e.g. if you are showing the data for https://jellybellywikiapi.onrender.com/api/Beans/1, perhaps display a random recipe after it.
   - The api is limited in terms of filtering so in this example above, we would NOT worry if the recipe did not match the flavour of the jelly bean.
5. The api has some weird behaviours, feel free to ignore edge cases where the data is returned wrong. e.g

```
 "ingredients": [
        "1 box (16.5 ounces) French vanilla cake mix",
        "3 large eggs",
        "1 cup buttermilk",
        "1/3 cup vegetable oil",
        "Neon pink food coloring",
        "1 can (16 ounces) plus 1 cup vanilla frosting",
        "1/2 cup low sugar strawberry jam",
        "strained",
        "1 cup Jelly Belly Jewel Valentine Mix (That's Jewel Bubble Gum", // counting these as seperate ingrediants is fine.
        "Jewel Cream Soda and Jewel Very Cherry)",                          // counting these as seperate ingrediants is fine
        "Pink mini paper liners"
      ],
```

### Extra Points:

- Implement loading states for the API calls (e.g., spinners or skeleton loaders).
- Implement up to two different types of animations using **GSAP** or **Motion** (e.g., on element appearance, interaction, or transitions).
- Deploy the application (e.g., using **Vercel**) and provide a link.

## Getting Started

To get started, fork this repository and clone it to your local environment. Make sure you have **Node.js** installed, and then install the dependencies as you need.

Refer to the [Next.js documentation](https://nextjs.org/docs) for more information on how to work with Next.js or the README.md file for the project setup.

## Tell Us About Your Approach

We’d love to hear your thoughts on the test. If you encountered any unexpected issues, made specific design decisions, or had to make trade-offs, please include a brief explanation with your submission. This helps us understand your reasoning and approach beyond just the code.
