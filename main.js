class Car {
  constructor($marker, direction, speed, location) {
    this.$marker = $marker
    this.direction = direction
    this.speed = speed
    this.location = location
    this.interval = null
    const [ x, y ] = location
    $marker.style.left = x + 'px'
    $marker.style.top = y + 'px'
    $marker.classList.add(direction)
  }
  move() {
    const { $marker, direction, speed, location } = this
    switch (direction) {
      case 'east':
        location[0] += speed
    }
    const [ x, y ] = location
    $marker.style.left = x + 'px'
    $marker.style.top = y + 'px'
  }
  start() {
    this.interval = setInterval(() => {
      this.move()
    }, 16)
  }
  stop() {
    clearInterval(this.interval)
    this.interval = null
  }
  get isStarted() {
    return !!this.interval
  }
}

const $car = document.createElement('img')
$car.setAttribute('src', 'images/viper.png')
$car.setAttribute('class', 'car')

const viper = new Car($car, 'east', 5, [0, 0])

document.body.appendChild($car)
document.addEventListener('keydown', ({ key }) => {
  if (key === ' ') {
    viper.start()
  }
})
