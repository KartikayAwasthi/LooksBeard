import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgressbar from "./components/ScrollProgressBar";
import "./globals.css";
import PageTransition from "./components/PageTransition";

export const metadata = {
  title: "Looksbeard Productions",
  description: "Turning imagination into motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ScrollProgressbar/>
        <PageTransition/>
          {children}
        <Footer />
      </body>
    </html>
  );
}
