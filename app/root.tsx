import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";

import FavIcon from "./assets/favicon/favicon.ico";

export const links: LinksFunction = () => {
  return [
    { rel: "icon", href: FavIcon, type: "image/png" },
    { rel: "stylesheet", href: styles },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Fabian Kutsche - fkutsche.dev",
  viewport: "width=device-width,initial-scale=1",
  description: "My personal web site",
});

export default function App() {
  return (
    <html className="h-full" lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
