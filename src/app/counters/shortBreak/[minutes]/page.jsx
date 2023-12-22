import Countdown from "../../../(components)/Countdown"
const ShortBreak = ({ params }) => {
  return (
    <div>
      <Countdown minutes={params.minutes} />
    </div>
  )
}

export default ShortBreak
