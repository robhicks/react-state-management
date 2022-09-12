# React State Management in Complex Applications

This document focusses on managing state in React applications that have complex states. States can be considered complex if they are required by a large number of components, are large and cannot be destructured practically and easily into smaller segments, or require internal consistencies that would make them difficult to manage if separated.  

The goal of managing complex states in an application should be focussed on the following guiding principles:

1. They should be easy to configure.
2. They should be easy to manage.
3. They should be easy to consume.
4. They should be easy to troubleshoot.
5. They should be performant. 

## Complex States

### Large Number of Consumers

Adopting the unix philosophy of do one thing and do it well, today's best practices teach us to subdivide application functionality into many components. While that makes it easy to build and test components independently, it also results in greater problems in managing overall application state. Take as an example, a personal finance budgeting application. The state for the application will likely include multiple budgets, multiple year and monthly budgets, income and expense categories, planning activities and transaction tracking. Overall, the application will present the user with a birds-eye view of all financial activity, while each transaction needs to have visibility into a specific piece of state while supporting broader state update functionality. 

### Interconnected State

### 

## Tools for State Management

React itself and the React echo system offer a lot of potential tools to help manage state. The tools range from hoisted state and prop drilling to libraries like Redux, Recoil and MobX. But unfortunately, the number of tools also makes it difficult to choose the right one. To help in making better choices, we'll build a contrived application using a number of different tools. Then we'll be in a better position to analyze each against the goals stated above. 

## Test Application

We're going to build parts of a budgeting application for personal finance. The application will support multiple budgets, each with income and expense categories, and each category with planning and transaction tracking. 

We're going to build the application using Vite and TailwindCss so we can focus on code and not UI Libraries. We won't go into the steps necessary to create a Vite React app with TailwindCss. You can find them at the [Vite](https://vitejs.dev/guide/#overview) and [TailwindCss](https://tailwindcss.com/docs/installation) sites. 

### Hoisted State and Prop Drilling

We'll start using hoisted state and prop drilling because It is the most basic way of managing state. 