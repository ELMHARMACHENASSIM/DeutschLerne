import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import HomePage from "../HomePage";
import Page1 from "../PageEin";
import PageEin from "../PageEin";
import PageZwei from "../PageZwei";
import PageDrei from "../PageDrei";
import PageVier from "../PageVier";
import PageFunf from "../PageFunf";
const routerDom = createBrowserRouter([
  {
    element: <Layout />,
    children: [
        {
            path : '/',
            element : <HomePage/>,
        },
        {
            path : '/page1',
            element : <PageEin/>,
        },
        {
            path : '/page2',
            element : <PageZwei/>,
        },
        {
            path : '/page3',
            element : <PageDrei/>,
        },
        {
            path : '/page4',
            element : <PageVier/>,
            
        },
             {
            path : '/page5',
            element : <PageFunf/>,
            
        },
        ]
    },

]);
export default routerDom;
