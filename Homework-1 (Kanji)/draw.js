function drawCrown () {
  var crown = []

  var topHorizontal = new THREE.BoxGeometry(15, 1.5, 8)
  topHorizontal.translate(0, 6, 0)
  crown.push(topHorizontal)

  var leftTop = new THREE.BoxGeometry(1.5, 3, 8)
  leftTop.translate(-6.75, 7, 0)
  crown.push(leftTop)

  var rightTop = leftTop.clone()
  rightTop.translate(13.5, 0, 0)
  crown.push(rightTop)

  var middleTop = new THREE.BoxGeometry(1.5, 4, 8)
  middleTop.translate(0, 7.5, 0)
  crown.push(middleTop)

  return crown
}

function drawMustache () {
  var mustache = []

  var topHorizontal = new THREE.BoxGeometry(14, 1.5, 8)
  topHorizontal.translate(-0.2, 3.5, 0)
  mustache.push(topHorizontal)

  var leftVertical = new THREE.BoxGeometry(1.5, 7, 8)
  leftVertical.translate(-6.45, -0.5, 0)
  mustache.push(leftVertical)
  // TODO: Curve

  var rightVertical = new THREE.BoxGeometry(1.5, 7, 8)
  rightVertical.translate(6.05, -0.5, 0)
  mustache.push(rightVertical)
  // TODO: Curve

  return mustache
}

function drawCenter () {
  var center = []

  var verticalLine = new THREE.BoxGeometry(1.5, 8, 8)
  verticalLine.translate(0, -3.5, 0)
  center.push(verticalLine)

  var horizontalTopLine = new THREE.BoxGeometry(9, 1.5, 8)
  horizontalTopLine.translate(0, -2, 0)
  center.push(horizontalTopLine)

  var horizontalBottomLine = horizontalTopLine.clone()
  horizontalBottomLine.translate(0, -3, 0)
  center.push(horizontalBottomLine)

  var smallVerticalLeft = new THREE.BoxGeometry(1.5, 1.5, 8)
  smallVerticalLeft.translate(-3.75, -3.5, 0)
  center.push(smallVerticalLeft)

  var smallVerticalRight = smallVerticalLeft.clone()
  smallVerticalRight.translate(7.5, 0, 0)
  center.push(smallVerticalRight)

  var topRotated = new THREE.BoxGeometry(10, 1.5, 8) // TODO: Curve
  topRotated.rotateZ(Math.PI / 20)
  topRotated.translate(0, 1, 0)
  center.push(topRotated)

  var bottomRotated = topRotated.clone()
  bottomRotated.translate(0, -9, 0)
  center.push(bottomRotated)

  return center
}
