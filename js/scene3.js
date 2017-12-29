function scene3() {

  // Setup Stage
  desertBg = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', desertBg)

  // Setup Cast

  // Character 1
  danerysContainer = document.createElement('div')
  stage.append(danerysContainer)
  danerysContainer.style.position = 'absolute';
  danerysContainer.style.width    = '10%';
  danerysContainer.style.height   = '38%';
  danerysContainer.style.top      = '55%';
  danerysContainer.style.left     = '25%';
  danerys = document.querySelector('#danerys')
  danerys.style.position = 'absolute'
  danerys.style.width = '63%'
  danerys.style.left='5%'
  danerys.style.top = 0
  danerysContainer.append(danerys)
  blueDress = document.querySelector('#blue-dress')
  blueDress.style.position = 'absolute'
  blueDress.style.height = '72%'
  blueDress.style.bottom = 0
  danerysContainer.append(blueDress)

  // Character 2
  drogoContainer = document.createElement('div')
  stage.append(drogoContainer)
  drogoContainer.style.position = 'absolute';
  drogoContainer.style.width    = '10%';
  drogoContainer.style.height   = '38%';
  drogoContainer.style.top      = '55%';
  drogoContainer.style.left     = '75%';
  drogo = document.querySelector('#drogo')
  drogo.style.position = 'absolute'
  drogo.style.width = '68%'
  drogo.style.top = 0
  drogo.style.left = '15%'
  drogoContainer.append(drogo)
  bulky = document.querySelector('#bulky-man')
  bulky.style.position = 'absolute'
  bulky.style.bottom = 0
  drogoContainer.append(bulky)
  // Setup Props

  // Prop 1
  egg = document.querySelector('#egg')
  stage.append(egg)
  egg.style.position = 'absolute'
  egg.style.top = '68%'
  egg.style.left = '28%'
  egg.style.width = '5%'
  // Prop 2

  // Action!

  // Stage direction 1 Danerys throw egg to Drogo

  frame(function() {
    egg.style.top = '68%'
    egg.style.left = '28%'
  })

  frame(function() {
    egg.style.top = '58%'
    egg.style.left = '40%'
  })


  frame(function() {
    egg.style.top = '50%'
    egg.style.left = '52%'
  })

  frame(function() {
    egg.style.top = '60%'
    egg.style.left = '65%'
  })

  frame(function() {
    egg.style.top = '70%'
    egg.style.left = '77%'
  })


  // Stage direction 2 Drogo throw egg back

  frame(function() {
    egg.style.top = '70%'
    egg.style.left = '77%'
  })

  frame(function() {
    egg.style.top = '58%'
    egg.style.left = '65%'
  })

  frame(function() {
    egg.style.top = '50%'
    egg.style.left = '54%'
  })

  frame(function() {
    egg.style.top = '60%'
    egg.style.left = '40%'
  })

  frame(function() {
    egg.style.top = '68%'
    egg.style.left = '28%'
  })


}
