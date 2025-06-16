/*
Project: santiagocalebe.github.io
Author: SantiagoCalebe
Repository: https://github.com/santiagocalebe/santiagocalebe.github.io/
All rights reserved.

Unauthorized copying, modification, distribution, or derivative works
of this code are strictly prohibited under the U.S. Copyright Act (Title 17, United States Code)
or Article 29 of Law No. 9,610/1998 (Brazilian Copyright Law). 
[Artigo 29 da Lei nº 9.610/1998 (Lei de Direitos Autorais).]
*/

const commands = [
  "FlxG.switchState(new MyState());",
  "FlxG.keys.justPressed.A",
  "FlxG.keys.pressed.LEFT",
  "FlxG.keys.justReleased.SPACE",
  "FlxG.mouse.justPressed",
  "FlxMouseEventManager.init();",
  "FlxMouseEventManager.add(sprite, onPress, onRelease);",
  "FlxTweenType.BACKWARD",
  "FlxTweenType.LOOPING",
  "FlxTweenType.ONESHOT",
  "var sprite = new FlxSprite(x, y);",
  "sprite.loadGraphic('assets/image.png');",
  "sprite.update(elapsed);",
  "override public function update(elapsed:Float):Void",
  "super.update(elapsed);",
  "class MyState extends FlxState",
  "override public function create():Void",
  "super.create();",
  "FlxG.switchState(new MenuState());",
  "if (FlxG.keys.anyPressed([RIGHT, D])) {}",
  "FlxG.swipes",
  "swipe.startPosition",
  "swipe.endPosition",
  "swipe.distance",
  "swipe.angle",
  "swipe.duration",
  "import flixel.util.FlxSignal;",
  "jump.add(new FlxActionInputDigitalMouse(LEFT, JUST_PRESSED));",
  "actionManager.addActions([action1, action2]);",
  "if (jump.triggered) doJump();",
  "FlxActionInputDigitalKeyboard(Key, Trigger);",
  "FlxActionInputDigitalGamepad(InputID, Trigger, GamepadID);",
  "FlxActionInputAnalogGamepad",
  "FlxG.camera.follow(sprite);",
  "FlxG.camera.setBounds(0, 0, width, height);",
  "FlxG.sound.play('sound.mp3');",
  "FlxG.save.data.highscore = 1000;",
  "FlxG.save.flush();",
  "FlxG.load.save();",
  "FlxG.debug = true;",
  "FlxG.timeScale = 0.5;",
  "FlxG.resetInput();",
  "FlxG.elapsed",
  "FlxG.width",
  "FlxG.height",
  "FlxG.stage.focus = null;",
  "FlxG.log('Debug message');",
  "FlxG.keys.justPressed.ENTER",
  "FlxG.keys.pressed.SHIFT",
  "FlxG.keys.justReleased.ESCAPE",
  "FlxG.keys.anyJustPressed(['W', 'UP']);",
  "FlxG.mouse.justReleased",
  "FlxG.mouse.screenX",
  "FlxG.mouse.screenY",
  "FlxG.mouse.visible = false;",
  "FlxG.mouse.setCursor('pointer');",
  "FlxG.game.add(sprite);",
  "FlxG.game.remove(sprite);",
  "FlxG.stage.addChild(sprite);",
  "FlxG.stage.removeChild(sprite);",
  "Bro",
  "I see you."
];
