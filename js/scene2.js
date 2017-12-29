function scene2() {
  console.log('Executing scene 2!')

  // Setup Stage
  var stage     = document.querySelector('#stage'),
      castle    = document.querySelector('#castle'),
      stageImg  = document.querySelector('#stage-img');
      castleImgSrc = castle.getAttribute('src');
      stageImg.setAttribute('src', castleImgSrc);

  // Setup Cast

  // Character 1 Ned
  nedContainer = document.createElement('div');
  stage.append(nedContainer);
  nedContainer.style.position = 'absolute';
  nedContainer.style.width    = '10%';
  nedContainer.style.height   = '37%';
  nedContainer.style.top      = '55%';
  nedContainer.style.left     = '25%';
  ned = document.querySelector('#ned');
  ned.style.width = '70%';
  ned.style.position = 'absolute';
  ned.style.top = 0;
  nedContainer.append(ned);
  leather = document.querySelector('#leather-armour');
  leather.style.position = 'absolute';
  leather.style.bottom = 0;
  nedContainer.append(leather);

  // Character 2  Joffrey
  joffreyContainer = document.createElement('div');
  stage.append(joffreyContainer);
  joffreyContainer.style.position = 'absolute';
  joffreyContainer.style.width    = '8%';
  joffreyContainer.style.height   = '30%';
  joffreyContainer.style.top      = '55%';
  joffreyContainer.style.left     = '55%';
  joffrey = document.querySelector('#joffrey');
  joffrey.style.position = 'absolute';
  joffrey.style.width = '67%';
  joffrey.style.top = 0;
  joffrey.style.right = 0;
  joffreyContainer.append(joffrey);
  king = document.querySelector('#king');
  king.style.position = 'absolute';
  king.style.bottom = 0;
  joffreyContainer.append(king);

  // Setup Props

  // Prop 1 Ned sword
  sword = document.querySelector('#sword');
  stage.append(sword);
  sword.style.position = 'absolute';
  sword.style.top = '77%';
  sword.style.left = '31%';
  sword.style.height = '5%';
  sword.style.transform = 'rotateY(150deg)';
  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
