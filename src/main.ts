// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const btnSummer = document.querySelector('.buttons__summer') as HTMLInputElement
const btnRain = document.querySelector('.buttons__rain') as HTMLInputElement
const btnWinter = document.querySelector('.buttons__winter') as HTMLInputElement

const summerSound = new Audio('./src/assets/sounds/summer.mp3')
const rainSound = new Audio('./src/assets/sounds/rain.mp3')
const winterSound = new Audio('./src/assets/sounds/winter.mp3')

function startSound(audio: any): void {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }

btnSummer.addEventListener('click', () => {
    startSound(summerSound)
	// summerSound.play()
	rainSound.pause()
    winterSound.pause()
})

btnRain.addEventListener('click', () => {
    startSound(rainSound)
	// rainSound.play()
	summerSound.pause()
	winterSound.pause()

})

btnWinter.addEventListener('click', () => {
    startSound(winterSound)
	// winterSound.play()
    summerSound.pause()
	rainSound.pause()
})
