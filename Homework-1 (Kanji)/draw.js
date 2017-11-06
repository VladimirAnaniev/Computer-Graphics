function drawCrown (material) {
  var crown = new THREE.Object3D()

  var topHorizontal = new THREE.BoxGeometry(15, 1.5, 8)
  topHorizontal.translate(0, 6, 0)
  var topHorizontalMesh = new THREE.Mesh(topHorizontal, material)
  crown.add(topHorizontalMesh)

  var leftTop = new THREE.BoxGeometry(1.5, 3, 8)
  leftTop.translate(-6.75, 7, 0)
  var leftTopMesh = new THREE.Mesh(leftTop, material)
  crown.add(leftTopMesh)

  var rightTop = leftTop.clone()
  rightTop.translate(13.5, 0, 0)
  var rightTopMesh = new THREE.Mesh(rightTop, material)
  crown.add(rightTopMesh)

  var middleTop = new THREE.BoxGeometry(1.5, 4, 8)
  middleTop.translate(0, 7.5, 0)
  var middleTopMesh = new THREE.Mesh(middleTop, material)
  crown.add(middleTopMesh)

  return crown
}

function drawMustache (material) {
  var mustache = new THREE.Object3D()

  var topHorizontal = new THREE.BoxGeometry(14, 1.5, 8)
  topHorizontal.translate(-0.2, 3.5, 0)
  var topHorizontalMesh = new THREE.Mesh(topHorizontal, material)
  mustache.add(topHorizontalMesh)

  var leftVertical = new THREE.BoxGeometry(1.5, 7, 8)
  leftVertical.translate(-6.45, -0.5, 0)
  var leftVerticalMesh = new THREE.Mesh(leftVertical, material)
  mustache.add(leftVerticalMesh)
  // TODO: Curve

  var rightVertical = new THREE.BoxGeometry(1.5, 7, 8)
  rightVertical.translate(6.05, -0.5, 0)
  var rightVerticalMesh = new THREE.Mesh(rightVertical, material)
  mustache.add(rightVerticalMesh)
  // TODO: Curve

  return mustache
}

function drawCenter (material) {
  var center = new THREE.Object3D()

  var verticalLine = new THREE.BoxGeometry(1.5, 8, 8)
  verticalLine.translate(0, -3.5, 0)
  var verticalLineMesh = new THREE.Mesh(verticalLine, material)
  center.add(verticalLineMesh)

  var horizontalTopLine = new THREE.BoxGeometry(9, 1.5, 8)
  horizontalTopLine.translate(0, -2, 0)
  var horizontalTopLineMesh = new THREE.Mesh(horizontalTopLine, material)
  center.add(horizontalTopLineMesh)

  var horizontalBottomLine = horizontalTopLine.clone()
  horizontalBottomLine.translate(0, -3, 0)
  var horizontalBottomLineMesh = new THREE.Mesh(horizontalBottomLine, material)
  center.add(horizontalBottomLineMesh)

  var smallVerticalLeft = new THREE.BoxGeometry(1.5, 1.5, 8)
  smallVerticalLeft.translate(-3.75, -3.5, 0)
  var smallVerticalLeftMesh = new THREE.Mesh(smallVerticalLeft, material)
  center.add(smallVerticalLeftMesh)

  var smallVerticalRight = smallVerticalLeft.clone()
  smallVerticalRight.translate(7.5, 0, 0)
  var smallVerticalRightMesh = new THREE.Mesh(smallVerticalRight, material)
  center.add(smallVerticalRightMesh)

  var topRotated = new THREE.BoxGeometry(10, 1.5, 8) // TODO: Curve
  topRotated.rotateZ(Math.PI / 20)
  topRotated.translate(0, 1, 0)
  var topRotatedMesh = new THREE.Mesh(topRotated, material)
  center.add(topRotatedMesh)

  var bottomRotated = topRotated.clone()
  bottomRotated.translate(0, -9, 0)
  var bottomRotatedMesh = new THREE.Mesh(bottomRotated, material)
  center.add(bottomRotatedMesh)

  return center
}
