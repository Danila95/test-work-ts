const btnSummer: HTMLInputElement = document.querySelector('.buttons__summer') as HTMLInputElement
const btnRain: HTMLInputElement = document.querySelector('.buttons__rain') as HTMLInputElement
const btnWinter: HTMLInputElement = document.querySelector('.buttons__winter') as HTMLInputElement

const rangeVolume = document.getElementById('volume') as HTMLInputElement

const summerSound = new Audio('./src/assets/sounds/summer.mp3')
let statusSummerSound: string = 'pause'

const rainSound = new Audio('./src/assets/sounds/rain.mp3')
let statusRainSound: string = 'pause'

const winterSound = new Audio('./src/assets/sounds/winter.mp3')
let statusWinterSound: string = 'pause'

function changeBackground(path: string): void {
	// Создаем новое правило CSS
	const newRule: string = `body::before { background-image: url("${path}"); }`

	// Добавляем правило в таблицу стилей
	const styleElement = document.createElement('style')
	document.head.appendChild(styleElement)
	const styleSheet: CSSStyleSheet = styleElement.sheet as CSSStyleSheet
	styleSheet.insertRule(newRule, 0)
}

rangeVolume.addEventListener('input', () => {
	summerSound.volume = Number(rangeVolume.value)
	rainSound.volume = Number(rangeVolume.value)
	winterSound.volume = Number(rangeVolume.value)
})

btnSummer.addEventListener('click', () => {
	if (statusSummerSound === 'pause') {
		statusSummerSound = 'play'
		statusRainSound = 'pause'
		statusWinterSound = 'pause'

		changeBackground('./src/assets/summer-bg.jpg')

		summerSound.play()
		rainSound.pause()
		winterSound.pause()
	} else {
		statusSummerSound = 'pause'
		summerSound.pause()
	}
})

btnRain.addEventListener('click', (): void => {
	if (statusRainSound === 'pause') {
		statusRainSound = 'play'
		statusSummerSound = 'pause'
		statusWinterSound = 'pause'

		changeBackground('./src/assets/rainy-bg.jpg')

		rainSound.play()
		summerSound.pause()
		winterSound.pause()
	} else {
		statusRainSound = 'pause'
		rainSound.pause()
	}
})

btnWinter.addEventListener('click', (): void => {
	if (statusWinterSound === 'pause') {
		statusWinterSound = 'play'
		statusSummerSound = 'pause'
		statusRainSound = 'pause'

		changeBackground('./src/assets/winter-bg.jpg')

		winterSound.play()
		summerSound.pause()
		rainSound.pause()
	} else {
		statusWinterSound = 'pause'
		winterSound.pause()
	}
})
