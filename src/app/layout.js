import "./globals.css";

export const metadata = {
  title: "Quote • Cast • Coin",
  description: "An interactive ritual for capturing thought onchain",
  icons: {
    icon: "/asd.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/longsile" rel="stylesheet" />
        <link
          href="https://fonts.cdnfonts.com/css/thegoodmonolith"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/pp-neue-montreal"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
