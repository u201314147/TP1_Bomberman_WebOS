Potion=function(t,o,e){Phaser.Sprite.call(this,t.game,o,e,"potion"),this.state=t,this.game=t.game,this.game.physics.arcade.enable(this),this.animations.add("be",[0],12,!0),this.enableBody=!0,this.scale.set(1),this.anchor.setTo(.5),this.body.immovable=!0,this.body.allowGravity=!1,this.play("be")},Potion.prototype=Object.create(Phaser.Sprite.prototype),Potion.prototype.constructor=Potion;