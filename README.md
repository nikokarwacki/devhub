# DevHub

DevHub is a React Single Page Application (SPA) that helps developers discover technology events, manage personal coding projects, and track professional development progress within one centralized platform.

This project was built as a Minimum Viable Product (MVP) demonstrating modern frontend development practices including routing, API integration, state management with React Context, testing, and deployment.

---

##  Live Application

 GitHub Repository: https://github.com/nikokarwacki/devhub
 Live App: https://devhub-rust.vercel.app/
---

##  Project Purpose

Developers and computer science students often rely on multiple disconnected platforms to:

- Discover technology events  
- Track personal coding projects  
- Monitor professional development  

DevHub centralizes these features into one responsive application designed specifically for developers.



##  Technologies Used

- React 19
- Vite
- React Router
- React Context API
- Ticketmaster Discovery API
- Vitest
- React Testing Library
- CSS (mobile-first responsive layout)
- Vercel (deployment)

## Environment Variables

Create a `.env` file in the project root and add your Ticketmaster API key:

VITE_TICKETMASTER_API_KEY=your_api_key_here

This key can be obtained from the Ticketmaster Developer Portal.

##  Features

###  Routing
- `/` – Home Dashboard  
- `/events` – Event Discovery  
- `/events/:id` – Dynamic Event Details  
- `/projects` – Project Manager  
- `/saved-events` – Saved Events  
- `*` – 404 Not Found  

###  API Integration
- Fetches live event data from the Ticketmaster Discovery API
- Displays event name, date, venue, and images
- Dynamic event details page
- Loading and error handling states

###  State Management
- Local state with `useState`
- Global state using React Context API
- Saved events persist using `localStorage`

###  Responsive Design
- Mobile-first layout
- Flexible grid system
- Responsive components across screen sizes

###  Testing
- Vitest configured
- React Testing Library
- Component rendering tests
- Context behavior validation
- All tests pass using `npm run test`



## Installation & Setup

Clone the repository:

git clone https://github.com/nikokarwacki/devhub.git
cd devhub

Install dependencies:

npm install

Run the development server:

npm run dev

Run tests:

npm run test



## Deployment

The application is deployed using Vercel.

Live Application:  
https://devhub.vercel.app

To deploy your own version:

1. Fork the repository
2. Connect the project to Vercel
3. Add the required environment variable
4. Deploy the project

## Future Improvements

Future enhancements planned for DevHub include:

- Expanded project tracking features
- Improved event filtering and search
- User profile dashboards
- Event recommendation system
- Increased test coverage