'use strict'

const DynamicObject= require('lance-gg').serialize.DynamicObject;


class FireUnit extends DynamicObject {

    constructor(id, x, y) {
        super(id);
        this.position.set(x,y);
        this.class = FireUnit;
    }

    onAddToWorld(gameEngine) {
        if (gameEngine.renderer) {
            gameEngine.renderer.addSprite(this, 'FireUnit');
        }
    }

}

module.exports = FireUnit;
