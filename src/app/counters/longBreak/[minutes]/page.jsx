import Countdown from "../../../(components)/Countdown"
const LongBreak = ({ params }) => {
  return (
    <div>
      <Countdown minutes={params.minutes} />
    </div>
  )
}

export default LongBreak
