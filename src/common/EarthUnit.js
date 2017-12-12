'use strict'

const DynamicObject= require('lance-gg').serialize.DynamicObject;


class EarthUnit extends DynamicObject {

    constructor(id, x, y) {
        super(id);
        this.position.set(x,y);
        this.class = EarthUnit;
    }

    onAddToWorld(gameEngine) {
        if (gameEngine.renderer) {
            gameEngine.renderer.addSprite(this, 'EarthUnit');
        }
    }

}

module.exports = EarthUnit;
