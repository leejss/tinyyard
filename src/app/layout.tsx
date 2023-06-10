import "./globals.css";
import Nav from "./nav";

export const metadata = {
  title: "tinyyard",
  description: "tinyyard is tinyyard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="text-foreground bg-background">
        <div className="p-4">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
