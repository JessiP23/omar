import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Construction Services J&O",
  description: "Don't just build, Create!"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 overflow-x-hidden">
        <Header />
        <main className="w-full max-w-5xl mx-auto px-4 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}