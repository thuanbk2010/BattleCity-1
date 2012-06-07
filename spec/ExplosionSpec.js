describe("Explosion", function () {
  var eventManager, explosion;
  
  beforeEach(function () {
    eventManager = new EventManager();
    explosion = new Explosion(eventManager);
  });
  
  it("default state", function () {
    expect(explosion.getFramesCount()).toEqual(3);
  });
  
  it("should be animated", function () {
    expect(explosion.getFrame()).toEqual(1);
    explosion.update();
    expect(explosion.getFrame()).toEqual(2);
    explosion.update();
    expect(explosion.getFrame()).toEqual(3);
  });
  
  it("should be destroyed when animation is finished", function () {
    var FRAMES_COUNT = 3;
    spyOn(explosion, 'destroy');
    explosion.setFramesCount(FRAMES_COUNT);
    explosion.setFrame(FRAMES_COUNT - 1);
    explosion.update();
    expect(explosion.destroy).not.toHaveBeenCalled();
    explosion.update();
    expect(explosion.destroy).toHaveBeenCalled();
    expect(explosion.getFrame()).toEqual(FRAMES_COUNT);
  });
});
