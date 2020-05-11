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

// posterized red/blue gummy scroller
osc(20)
  .modulateScale(osc(10), 100)
  .pixelate()
  .color(0, 1, 1)
  .mult(osc(20).modulate(noise())).add(osc().scale(2).color(1, 0, 1), 0.5)
  .hue(0.1)
  .posterize()
  .scale(2)
  .out()

// modulated noise pattern with scaling
noise(100).modulate(osc().modulateScale(osc(8))).modulateScale(noise(0.1)).modulateScrollY(osc(4)).out()