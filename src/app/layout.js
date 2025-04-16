import "./globals.css";
import NavBar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Shopping Cart",
  description: "Shopping website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
