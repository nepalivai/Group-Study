import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import { StudySessionContextProvider } from "@/context/StudySessionContextProvider";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SSRProvider>
      <SessionProvider session={session}>
        <StudySessionContextProvider>
          <Navbar />
          <Component {...pageProps} />
        </StudySessionContextProvider>
      </SessionProvider>
    </SSRProvider>
  );
}
