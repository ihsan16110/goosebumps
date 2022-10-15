import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import QuizStore from './components/QuizStore/QuizStore';
import QuizDetails from './components/QuizDetails/QuizDetails';
import NotFound from './components/NotFound/NotFound';

function App() {

  const router = createBrowserRouter([

  {
    path:'/',
    element:<Main></Main>,
    children:[

     {
      path:'/',
      loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
      element:<QuizStore></QuizStore>
    },{
      path:'blog',
      element:<Blog></Blog>
    },{
      path:'statistics',
      element:<Statistics></Statistics>
    },{
      path:'quizdetails/:quizId',
      loader: async({params}) => {
        return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
      },
      element:<QuizDetails></QuizDetails>
    }

    ]
  },
   {path: '*', element:<NotFound></NotFound>}

    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
