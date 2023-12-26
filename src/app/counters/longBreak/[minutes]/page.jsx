import Countdown from "../../../(components)/Countdown"

let breakImage = "/images/relax.png"

const LongBreak = ({ params }) => {
  return (
    <div>
      <Countdown minutes={params.minutes} imageBanner={breakImage} />
    </div>
  )
}

export default LongBreak
