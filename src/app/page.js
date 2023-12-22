import Countdown from "./(components)/Countdown"

export default function Home() {
  let minutes = 25
  return (
    <main>
      <Countdown minutes={minutes} />
    </main>
  )
}
