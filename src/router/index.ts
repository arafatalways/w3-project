import AcademyOne from "@/components/layout/academyOne";
import AcademyThree from "@/components/layout/academyThree";
import Academytwo from "@/components/layout/academytwo";
import ArticleOne from "@/components/layout/articleOne";
import ArticleThree from "@/components/layout/articleThree";
import ArticleTwo from "@/components/layout/articleTwo";
import FrontLayout from "@/components/layout/FrontLayout";
import AboutPage from "@/pages/AboutPage";
import AcademyPage from "@/pages/AcademyPage";
import ArticlePage from "@/pages/ArticlePage";
import ContactPage from "@/pages/ContactPage";
import CoursePage from "@/pages/CoursePage";
import HeroPage from "@/pages/HeroPage";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: FrontLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/contact",
        Component: ContactPage,
      },
      {
        path: "/academy",
        Component: AcademyPage,
      },
      {
        path: "/hero",
        Component: HeroPage,
      },
      {
        path: "/courses",
        Component: CoursePage,
      },
      {
        path: "/article",
        Component: ArticlePage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/article-three",
        Component: ArticleThree,
      },
      {
        path: "/article-two",
        Component: ArticleTwo,
      },
      {
        path: "/article-one",
        Component: ArticleOne,
      },
      {
        path: "/academy-one",
        Component: AcademyOne,
      },
      {
        path: "/academy-two",
        Component: Academytwo,
      },
      {
        path: "/academy-three",
        Component: AcademyThree,
      },
    ],
  },
]);
