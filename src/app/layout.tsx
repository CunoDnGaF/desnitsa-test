"use client"

import Header from './components/Header/Header'
import { Provider } from "react-redux";
import store from "./redux/store";
import "./globals.css";

export default function RootLayout({ 
  children,
 }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
