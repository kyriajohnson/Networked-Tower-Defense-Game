'use strict'

const DynamicObject= require('lance-gg').serialize.DynamicObject;


class Base extends DynamicObject {

    constructor(id, x, playerId) {
        super(id);
        this.playerId = playerId;
        this.position.set(x,0);
        this.class = Base;
    }

    onAddToWorld(gameEngine) {
        if (gameEngine.renderer) {
            gameEngine.renderer.addSprite(this, 'Base');
        }
    }

}

module.exports = Base;
