import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "DevSparkShare",
  description: "Share your Spark to empower the AI Fire",
  google_site_verification: "7LyKSursevH1DGue6T_faAY5nU9rrEgNBDKR3fx6zNI",
};


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
