import "./globals.css"
import Nav from "./(components)/Nav"
import PomodoroNav from "./(components)/PomodoroNav"
import Footer from "./(components)/Footer"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Pomodoro Timer",
  description: "App by thodoris kallioras",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={` bg-red`}>
        <Nav />
        <PomodoroNav />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
