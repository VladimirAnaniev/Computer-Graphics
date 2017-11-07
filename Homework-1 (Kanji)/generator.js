function generateCrown () {
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

function generateMustache () {
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

function generateCenter () {
  var center = []

  var verticalLine = new THREE.BoxGeometry(1.5, 8.5, 8)
  verticalLine.translate(0, -3.25, 0)
  center.push(verticalLine)

  var horizontalTopLine = new THREE.BoxGeometry(9, 1.5, 8)
  horizontalTopLine.translate(0, -1, 0)
  center.push(horizontalTopLine)

  var horizontalBottomLine = horizontalTopLine.clone()
  horizontalBottomLine.translate(0, -3, 0)
  center.push(horizontalBottomLine)

  var smallVerticalLeft = new THREE.BoxGeometry(1.5, 2, 8)
  smallVerticalLeft.translate(-3.75, -2.5, 0)
  center.push(smallVerticalLeft)

  var smallVerticalRight = smallVerticalLeft.clone()
  smallVerticalRight.translate(7.5, 0, 0)
  center.push(smallVerticalRight)

  var bottomRotated = new THREE.BoxGeometry(8, 1.5, 8)
  bottomRotated.rotateZ(Math.PI / 20)
  bottomRotated.translate(0, -8, 0)
  center.push(bottomRotated)

  return center
}

function generateCurves () {
  var curves = []

  var leftCurve = new THREE.Shape()
  leftCurve.moveTo(-5.7, -4)
  leftCurve.bezierCurveTo(-6, -8, -8, -9, -8, -9)
  leftCurve.lineTo(-9, -8)
  leftCurve.bezierCurveTo(-7, -7, -7.2, -4, -7.2, -4)
  curves.push(make3D(leftCurve))

  var rightCurve = new THREE.Shape()
  rightCurve.moveTo(5.3, -4)
  rightCurve.bezierCurveTo(6.5, -15, 9, -5, 9, -5)
  rightCurve.lineTo(8, -4)
  rightCurve.bezierCurveTo(6.7, -9, 6.8, -4, 6.8, -4)
  curves.push(make3D(rightCurve))

  var centerTopCurve = new THREE.Shape()
  centerTopCurve.moveTo(-4, 0.5)
  centerTopCurve.bezierCurveTo(-0, 0.5, 4, 1.5, 4, 1.5)
  centerTopCurve.lineTo(3, 2.5)
  centerTopCurve.bezierCurveTo(0, 1.8, -5, 1.8, -5, 1.8)
  curves.push(make3D(centerTopCurve))

  var centerRightCurve = new THREE.Shape()
  centerRightCurve.moveTo(1.6, -5.5)
  centerRightCurve.bezierCurveTo(3.8, -7, 3.8, -9.5, 3.8, -9.5)
  centerRightCurve.lineTo(5, -8.5)
  centerRightCurve.bezierCurveTo(4.5, -6, 3, -5, 3, -5)
  curves.push(make3D(centerRightCurve))

  function make3D (curve) {
    var extrudeSettings = {amount: 8, bevelEnabled: false, curveSegments: 100}
    var extrude = new THREE.ExtrudeGeometry(curve, extrudeSettings)
    extrude.translate(0, 0, -4)
    return extrude
  }

  return curves
}
