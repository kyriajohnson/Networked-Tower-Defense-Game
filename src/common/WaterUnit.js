'use strict'

const DynamicObject= require('lance-gg').serialize.DynamicObject;


class WaterUnit extends DynamicObject {

    constructor(id, x, y) {
        super(id);
        this.position.set(x,y);
        this.class = WaterUnit;
    }

    onAddToWorld(gameEngine) {
        if (gameEngine.renderer) {
            gameEngine.renderer.addSprite(this, 'WaterUnit');
        }
    }

}

module.exports = WaterUnit;
