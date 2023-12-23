export default function playAudio(path) {
  const audio = new Audio(path)
  audio.play().catch((err) => {
    console.error("Error with Audio play", err.message)
  })
}
