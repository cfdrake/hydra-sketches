// woozy red with inverted zebra stripes
shape(2)
  .add(shape(3, 0.5).color(255, 0, 0).modulate(osc(), 0.01))
  .repeat(3, 4)
  .rotate(2)
  .repeat(2, 4)
  .modulate(noise(), 0.01)
  .modulate(o0, 0.001)
  .modulateScrollY(osc(1))
  .out()

// melted bronze metascroller with distorted triangle lens
osc(100, 0.1, 1)
  .modulate(noise(2).add(osc(32))).diff(shape(3).modulate(noise(0.8)).modulateScale(osc(2)))
  .modulate(o0, 0.01)
  .out()