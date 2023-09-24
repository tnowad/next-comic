import { Route } from "@/types/page";

export const routes: Route[] = [
  {
    title: "Hot",
    path: "/",
    key: "hot",
  },
  {
    title: "Following",
    path: "/",
    key: "following",
  },
  {
    title: "History",
    path: "/",
    key: "history",
  },
  {
    title: "Genres",
    path: "/",
    key: "genres",
  },
  {
    title: "Search",
    path: "/",
    key: "search",
  },
];

export const mobileRoutes: Route[] = routes;
