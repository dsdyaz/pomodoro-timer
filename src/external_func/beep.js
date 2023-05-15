const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
export default function beep() {
  const oscillator = audioCtx.createOscillator()

  oscillator.type = "sine"
  oscillator.frequency.setValueAtTime(369.99, audioCtx.currentTime)
  oscillator.connect(audioCtx.destination)
  oscillator.start(audioCtx.currentTime)
  oscillator.stop(audioCtx.currentTime + 500 / 1000)
}
