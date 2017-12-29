function scene2() {
  console.log('Executing scene 2!')

  // Setup Stage
  var stage     = document.querySelector('#stage'),
      castle    = document.querySelector('#castle'),
      stageImg  = document.querySelector('#stage-img');
      castleImgSrc = castle.getAttribute('src');
      stageImg.setAttribute('src', castleImgSrc);

  // Setup Cast

  // Character 1
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




  // Character 2

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
