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

// psych sea slug
osc(640, 0.05, 1)
  .modulateRotate(osc(32))
  .mult(shape([3, 2].fast(0.1)))
  .modulateScale(noise(2))
  .blend(o0, 0.7)
  .modulateScale(osc(8), 0.02)
  .modulate(o0, 0.005)
  .out()

// melted bronze metascroller with distorted triangle lens
osc(100, 0.1, 1)
  .modulate(noise(2).add(osc(32))).diff(shape(3).modulate(noise(0.8)).modulateScale(osc(2)))
  .modulate(o0, 0.01)
  .out()

// cell division
shape([4, 16].fast(0.25), 0.4, 0.4)
  .color(255, 191, 0)
  .colorama(0.1)
  .modulateRotate(osc(32), 0.05)
  .mult(o0, 0.35)
  .modulateScrollY(osc(), 0.01)
  .modulateScale(osc(16), 0.02)
  .modulateRotate(osc(32), 0.1)
  .repeat([1, 2, 3].fast(0.3), [1, 2, 3].fast(0.25))
  .modulateScrollY(osc(16), 0.1)
  .out()

// modulated noise pattern with scaling
noise(100)
  .modulate(osc().modulateScale(osc(8)))
  .modulateScale(noise(0.1))
  .modulateScrollY(osc(4))
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