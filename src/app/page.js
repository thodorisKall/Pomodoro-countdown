import Countdown from "./(components)/Countdown"
let breakImage = "/images/write-notes.png"
export default function Home() {
  let minutes = 25
  return (
    <main>
      <Countdown minutes={minutes} imageBanner={breakImage} />
    </main>
  )
}
