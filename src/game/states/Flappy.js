import Phaser from 'phaser'

// BASE 64 IMAGES

var birdUrl = 'data:image/png;base64,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';

var tubeUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAFACAMAAADEYq+6AAAAA3NCSVQICAjb4U/gAAAAh1BMVEX////k/Yvf+Yfb9YXZ84PS7X7R7X7R7XzJ5XfJ5njJ5XjE4XPD4XTA3nDA3XC31Wq102iszGKlxVyhw1qXulKVt1CNsUuFqkSFqUSDqESCp0N5nz11nTp2nTp2nDlwlzZwlzVvlzZokTBnkDBnkS9giSpdhyhehyhahSZahSVVgCJWgCJUOEcmarqzAAAALXRSTlMA///////////////////////////////////////////////////////////weBRqAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABR0RVh0Q3JlYXRpb24gVGltZQAyLzkvMTT46LqKAAACWUlEQVR4nO2Z6ZKCMBCEOQRRERFFPFfFW3n/59uy1AJBkswQousO/7+qzmTSmTSapiXJeByGQeD7nY5tm6aum2az6bq+HwRhGEXzeRzv9+f7lyTa9UNCUfSAms0H1OncoPF4sYjjw0Eu5LoPebb9DDHkgaBXhUihn586oaw84X0SgFiFiCJE9UohljxA71WGStqoEpQWIt3cmzzZULk8VCGETi7gPCEhnrzLpU6opOTSoNQsub4HgN7RESxjuVzqhVDykGtSB3GvT2kXAKIjkCcXsSaul7suwFgqQa8OYd1Q/gKQBanrvSKEkocqRF4e0CxRkNyJRZ0bfcatQR6Bgaj3qPfedT9RSkApAaUElBJQSgCSRykBpQQSIEoJaAqjlIBSAnqpkUeQR5BHkEeoW9PziF0fRBkLZSyUsVDGQhkLUB5lLJSxSIAoY6H3E72f6P30v95PciF10/I7HLZoYYBHV0VI4LgDIHXVU+cR6m5C9uai2ujDT66qiUUgjwBAfHmyoM+YluvviHSgApxcAAQwy4pQ3XkEa6ACWJgApD6hei+kzve+EVI5l//tNaEiVVR4+03JB/sQloTsKKh4AWSfrNw2AkCfMVkC/tVUHnNQP0NQmyuzemfAh4cSxIeFIOLuApGQZTUahqHrhtFoWJbjeF6v1+8PBsPhaDSdzmbrdRzvdqdTdci2s1C7nYUmk9lsubxCx2N1iCdPHvQsr9XKy1utNhs5UFaebTtOt5uHOPskDGXlvYJum8tYExoqFmK75coTglibi2qjUsjzHOcZZMN4SJEb/QLFWJFg34TiJAAAAABJRU5ErkJggg==';

var groundUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAABwBAMAAAC6HTVoAAAAA3NCSVQICAjb4U/gAAAAFVBMVEVUOEfe2JWc5llzvy7XqExVgCLk/YvKcrlbAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABR0RVh0Q3JlYXRpb24gVGltZQAyLzkvMTT46LqKAAAAvElEQVR4nO3OQQnDUBQAwViohVqohVqohfqXEMg98A8L+Q9mT3uc41Dcf0hzoJ+r99XOPwy6j+f2Z0E38tz+KOjThqWfBH3csPSDoM8bln4OdAPD0s+B/oY0B/od0hzoa0igdaB1oHWgdaB1oHWgdaB1oHWgdaB1oHWgdaB1oHWgdaB1oHWgdaB1oHWgdaB1oHWgdaB1oHWgdaB1oHWgdaB1oHWgdaB1oHWgdaB1oHWgdaB1oHWgdaB1Y6AnzWzBk/Li3cMAAAAASUVORK5CYII=';

export default class extends Phaser.State {
  init() {
    this.input.maxPointers = 1;
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    this.scale.updateLayout();

    // Pixel Art
    this.game.renderer.renderSession.roundPixels = true;
    this.game.time.desiredFps = 60;
  }

  preload() {
    this.game.load.crossOrigin = true;
    this.game.load.image('tube', tubeUrl);
    this.game.load.image('ground', groundUrl);
    this.game.load.spritesheet('bird', birdUrl, 75, 55);

    this.game.load.audio('hit', [
      'https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/audio/hit.ogg',
      'https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/audio/hit.wav'
    ]);
    this.game.load.audio('die', [
      'https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/audio/die.ogg',
      'https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/audio/die.wav'
    ]);
    this.game.load.audio('point', [
      'https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/audio/point.ogg',
      'https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/audio/point.wav'
    ]);
    this.game.load.audio('wing', [
      'https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/audio/wing.ogg',
      'https://raw.githubusercontent.com/sourabhv/FlapPyBird/master/assets/audio/wing.wav'
    ]);
  }

  create() {
    this.isDebugging = false;
    this.totalScore = 0;
    this.started = false;
    this.dead = false;
    this.canJump = true;
    this.canRestart = false;

    this.game.world.setBounds(-10, 0, this.game.width + 10, this.game.height);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.checkCollision.up = false;

    this.tubes = this.game.add.group();
    this.tubes.enableBody = true;
    this.tubes.createMultiple(12, 'tube');
    this.newtubes = this.game.time.events.loop(1500, this.newTube, this);
    this.newtubes.timer.stop(false);

    this.sensors = this.game.add.group();
    this.sensors.enableBody = true;

    var groundCache = this.game.cache.getFrame('ground');
    this.ground = this.game.add.tileSprite(-10, this.game.height, this.game.width + 20, groundCache.height, 'ground');
    this.ground.anchor.y = 1;
    this.game.physics.arcade.enable(this.ground);
    this.ground.body.immovable = true;
    this.ground.body.moves = false;
    this.ground.autoScroll(-50, 0);

    this.bird = this.game.add.sprite(this.game.world.centerX / 2, this.game.world.centerY, 'bird');
    console.log("Debug nhe: ", this.bird)
    this.bird.anchor.set(0.5);
    this.bird.scale.set(0.8);
    this.bird.animations.add('fly', null, 15, true);
    this.bird.animations.play('fly');
    this.tweenFly = this.game.add.tween(this.bird);
    this.tweenFly.to({ y: this.bird.y + 20 }, 400, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);

    this.bird.checkWorldBounds = true;
    this.bird.pivot.x = -this.bird.width / 2;
    this.bird.events.onOutOfBounds.add(function () {
      this.canJump = false;
    }, this);
    this.bird.events.onEnterBounds.add(function () {
      this.canJump = true;
    }, this);

    this.game.input.onDown.add(this.jump, this);
    this.scoreText = this.game.add.text(this.game.world.centerX, this.game.world.centerY / 3, "0", { font: "60px Arial", fill: "#ffffff" });
    this.scoreText.anchor.set(0.5);

    // Audio
    this.hitAudio = this.add.audio('hit');
    this.dieAudio = this.add.audio('die');
    this.pointAudio = this.add.audio('point');
    this.wingAudio = this.add.audio('wing');
  }

  start() {
    this.ground.autoScroll(0, 0);
    this.tweenFly.stop();
    this.game.physics.arcade.enable(this.bird);
    this.bird.body.setSize(this.bird.width - 10, this.bird.height - 10, 0, 0);
    this.bird.body.gravity.y = 2000;
    this.bird.body.collideWorldBounds = true;

    this.newtubes.timer.start();

    this.started = true;
  }

  gameOver() {
    var self = this;
    self.newtubes.timer.stop(false);

    self.game.add.tween(self.game.camera).to({ x: -10 }, 40, Phaser.Easing.Sinusoidal.InOut, true, 0, 5, true);
    self.bird.animations.stop();

    self.flash = self.game.add.graphics(-10, 0);
    self.flash.beginFill(0xffffff, 1);
    self.flash.drawRect(0, 0, self.game.width + 20, self.game.height);
    self.flash.endFill();
    self.flash.alpha = 0.5;
    self.game.add.tween(self.flash).to({ alpha: 0 }, 50, Phaser.Easing.Cubic.In, true);

    self.dead = true;

    setTimeout(function () {
      self.canRestart = true;
    }, Phaser.Timer.SECOND * 0.5);

    self.tubes.forEachAlive(function (tube) {
      tube.body.velocity.x = 0;
    }, self);
    self.sensors.forEachAlive(function (sensor) {
      sensor.body.velocity.x = 0;
    }, self);

    // Vibrar el telefono aquí!

    self.hitAudio.play();
    setTimeout(function () {
      self.dieAudio.play();
    }, 300);
  }

  jump() {
    if (!this.dead) {
      this.start();
    }

    if (!this.dead && this.canJump) {
      this.bird.animations.play('fly');
      this.birdInJump = true;
      this.bird.body.velocity.y = -550;
      this.wingAudio.play();
    }

    if (this.dead && this.canRestart) {
      this.game.state.start(this.game.state.current);
    }
  }

  update() {
    this.game.physics.arcade.collide(this.bird, this.ground);

    if (!this.started) return;

    this.updateAngle();

    if (this.dead) return;

    this.game.physics.arcade.overlap(this.bird, this.tubes, this.gameOver, null, this);
    this.game.physics.arcade.overlap(this.bird, this.sensors, this.incrementScore, null, this);
    this.ground.tilePosition.x -= 2;

    if (this.bird.body.touching.down) {
      this.gameOver();
    }
  }

  updateAngle() {

    if (this.bird.body.touching.down) return;

    if (this.birdInJump) {
      if (this.bird.angle > -30) {
        this.bird.angle -= 10;
      } else {
        this.birdInJump = false;
      }
    } else if (this.bird.angle < 0) {
      this.bird.angle += 1;
    } else if (this.bird.angle < 45) {
      this.bird.animations.stop();
      this.bird.angle += 2;
    } else if (this.bird.angle < 90) {
      this.bird.angle += 4;
    }
  }

  resize() {

    if (this.bird) {
      this.bird.x = this.game.world.centerX / 2;
    }
    if (this.scoreText) {
      this.scoreText.y = this.game.world.centerY / 3;
      this.scoreText.x = this.game.world.centerX;
    }
    if (this.ground) {
      this.ground.width = this.game.width + 20;
    }
  }

  render() {
    if (!this.isDebugging) return;

    this.game.debug.text('Debugging', 10, 30, 'white', '20px "Sigmar One"');
    this.game.debug.body(this.bird);
    this.game.debug.body(this.ground, 'rgba(255, 255, 0, 0.5)');
    this.game.debug.geom(new Phaser.Point(this.bird.x, this.bird.y), '#FFFF00');
    if (this.tubes) {
      this.tubes.forEachAlive(function (tube) {
        this.game.debug.body(tube, 'rgba(0, 0, 255, 0.5)');
      }, this);
    }
    if (this.sensors) {
      this.sensors.forEachAlive(function (sensor) {
        this.game.debug.body(sensor, 'rgba(0, 255, 0, 0.5)');
      }, this);
    }
  }

  newTube() {
    var randomPosition = this.game.rnd.integerInRange(120, this.game.height - this.ground.height - 100);

    var tube = this.game.cache.getFrame('tube');

    var tube1 = this.tubes.getFirstDead();
    tube1.reset(this.game.width + tube.width / 2, randomPosition - 100);
    tube1.anchor.setTo(0.5, 1);
    tube1.scale.set(1.4);
    tube1.body.velocity.x = -180;
    tube1.body.immovable = true;
    tube1.checkWorldBounds = true;
    tube1.outOfBoundsKill = true;

    var tube2 = this.tubes.getFirstDead();
    tube2.reset(this.game.width + tube.width / 2, randomPosition + 100 + tube.height / 2);
    tube2.anchor.setTo(0.5, 0.5);
    tube2.scale.setTo(-1.4, -1.4);
    tube2.body.velocity.x = -180;
    tube2.body.immovable = true;
    tube2.checkWorldBounds = true;
    tube2.outOfBoundsKill = true;

    var sensor = this.sensors.create(this.game.width + tube.width, 0);
    sensor.body.setSize(40, this.game.height);
    sensor.body.velocity.x = -180;
    sensor.body.immovable = true;
    sensor.alpha = 0;
  }

  incrementScore(bird, sensor) {
    sensor.kill();
    this.totalScore++;
    this.scoreText.setText(this.totalScore);
    this.pointAudio.play();
  }

  toggleDebug() {
    this.game.debug.reset();
    this.isDebugging = !this.isDebugging;
  }
}