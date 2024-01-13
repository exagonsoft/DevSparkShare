import "@styles/global.css";

export const metadata = {
  title: "DevSparkShare",
  description: "Share your Spark to empower the AI Fire",
};

const RootLayout = () => {
  return (
    <html lang="en">
      <body>
        <div className="main">
            <div className="gradient" />
        </div>
        <main className="app">
            {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
