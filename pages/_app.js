import "../styles/Homepage/style.css";
import "../styles/Aboutpage/style.css";
import "../styles/Servicepage/style.css";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} /> <Analytics />{" "}
    </>
  );
}
