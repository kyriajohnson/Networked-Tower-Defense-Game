'use strict'

const DynamicObject= require('lance-gg').serialize.DynamicObject;


class FireUnit extends DynamicObject {

    constructor(id, x, y, velocity) {
        super(id);
        this.position.set(x,y);
        this.class = FireUnit;
        this.velocity = (velocity, 0);    //move either left or right
    }

    onAddToWorld(gameEngine) {
        if (gameEngine.renderer) {
            gameEngine.renderer.addSprite(this, 'FireUnit');
        }
    }

}

module.exports = FireUnit;
