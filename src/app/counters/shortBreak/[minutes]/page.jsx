import Countdown from "../../../(components)/Countdown"
let breakImage = "/images/break.png"
const ShortBreak = ({ params }) => {
  return (
    <div>
      <Countdown minutes={params.minutes} imageBanner={breakImage} />
    </div>
  )
}

export default ShortBreak
