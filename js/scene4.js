function scene4() {

  // Setup Stage
  stage = document.querySelector('#stage');
  scene = document.querySelector('#kings-landing')
  sceneImg = scene.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', sceneImg)

  // Setup Cast

  // Character 1
  viserysContainer = document.createElement('div')
  stage.append(viserysContainer)
  viserysContainer.style.position = 'absolute';
  viserysContainer.style.width    = '10%';
  viserysContainer.style.height   = '37%';
  viserysContainer.style.top      = '45%';
  viserysContainer.style.left     = '75%';
  viserys = document.querySelector('#viserys')
  viserys.style.position = 'absolute'
  viserys.style.width = '63%'
  viserys.style.left='15%'
  viserys.style.top = 0
  viserysContainer.append(viserys)
  viserysCostume = document.querySelector('#black-leather')
  viserysCostume.style.position = 'absolute'
  viserysCostume.style.bottom = 0
  viserysCostume.style.transform = 'rotateY(180deg)'
  viserysContainer.append(viserysCostume)
  viserysContainer.style.transform = 'rotateY(180deg)'

  // Character 2
  catelynContainer = document.createElement('div')
  stage.append(catelynContainer)
  catelynContainer.style.position = 'absolute';
  catelynContainer.style.width    = '9.7%';
  catelynContainer.style.height   = '37%';
  catelynContainer.style.top      = '45%';
  catelynContainer.style.left     = '45%';
  catelyn = document.querySelector('#catelyn')
  catelyn.style.position = 'absolute'
  catelyn.style.width = '65%'
  catelyn.style.left = '16%'
  catelyn.style.top = 0
  catelynContainer.append(catelyn)
  redDress = document.querySelector('#red-dress')
  redDress.style.position = 'absolute'
  redDress.style.bottom = 0
  catelynContainer.append(redDress)

  cerseiContainer = document.createElement('div')
  stage.append(cerseiContainer)
  cerseiContainer.style.position = 'absolute';
  cerseiContainer.style.width    = '10%';
  cerseiContainer.style.height   = '37%';
  cerseiContainer.style.top      = '45%';
  cerseiContainer.style.left     = '15%';
  cersei = document.querySelector('#cersei')
  cersei.style.position = 'absolute'
  cersei.style.width = '62%'
  cersei.style.left = '11%'
  cersei.style.top = 0
  cerseiContainer.append(cersei)
  blueDress = document.querySelector('#blue-dress')
  blueDress.style.position = 'absolute'
  blueDress.style.bottom = 0
  cerseiContainer.append(blueDress)

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    viserysContainer.style.transform = 'rotateZ(0)'
    catelynContainer.style.transform = 'rotateZ(0)'
    cerseiContainer.style.transform = 'rotateZ(0)'
  })

  frame(function() {
    viserysContainer.style.transform = 'rotateZ(15deg)'
    catelynContainer.style.transform = 'rotateZ(10deg)'
    cerseiContainer.style.transform = 'rotateZ(-15deg)'
  })

  frame(function() {
    viserysContainer.style.transform = 'rotateZ(0)'
    catelynContainer.style.transform = 'rotateZ(0)'
    cerseiContainer.style.transform = 'rotateZ(0)'
  })

  frame(function() {
    viserysContainer.style.transform = 'rotateZ(-15deg)'
    catelynContainer.style.transform = 'rotateZ(-10deg)'
    cerseiContainer.style.transform = 'rotateZ(15deg)'
  })

  frame(function() {
    viserysContainer.style.transform = 'rotateZ(0)'
    catelynContainer.style.transform = 'rotateZ(0)'
    cerseiContainer.style.transform = 'rotateZ(0)'
  })

  frame(function() {
    viserysContainer.style.transform = 'rotateZ(15deg)'
    catelynContainer.style.transform = 'rotateZ(10deg)'
    cerseiContainer.style.transform = 'rotateZ(-15deg)'
  })

  // Stage direction 2

  frame(function() {
    viserysContainer.style.transform = 'rotateZ(0)'
    catelynContainer.style.transform = 'rotateZ(0)'
    cerseiContainer.style.transform = 'rotateZ(0)'
  })

  frame(function() {
    viserysContainer.style.top = '70%'
    catelynContainer.style.top = '70%'
    cerseiContainer.style.top = '70%'
  })

  frame(function() {
    viserysContainer.style.top = '80%'
    catelynContainer.style.top = '80%'
    cerseiContainer.style.top = '80%'
  })

  frame(function() {
    viserysContainer.style.top = '90%'
    catelynContainer.style.top = '90%'
    cerseiContainer.style.top = '90%'
  })

}
