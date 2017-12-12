'use strict';

const GameEngine = require('lance-gg').GameEngine;
const Base = require('./Base');
const FireUnit = require('./FireUnit');
const WaterUnit = require('./WaterUnit');
const EarthUnit = require('./EarthUnit');
const PADDING =  20;
const WIDTH = 1200;
const HEIGHT = 400;
const BASE_WIDTH = 50;
const BASE_HEIGHT = 50;


class SpaceNuggetsGameEngine extends GameEngine {

    constructor(options) {
        super(options);
    }

    start() {

        super.start();

        this.on('objectAdded', (object) => {
        if (object.id == 1) {
            this.base1 = object;
        } else if (object.id == 2) {
            this.base2 = object;
        } else if (object.class == WaterUnit) {
            this.WaterUnit = object;
        } else if (object.class == FireUnit) {
            this.FireUnit = object;
        } else if (object.class == EarthUnit) {
            this.EarthUnit = object;
        }
    });
    }

    /**
    * @param serializer
    *register game objects on the serializer
    */
    registerClasses(serializer) {
    serializer.registerClass(require('../common/Base'));
    serializer.registerClass(require('../common/FireUnit'));
    serializer.registerClass(require('../common/WaterUnit'));
    serializer.registerClass(require('../common/EarthUnit'));
    }

    /*
    create bases and add objs to game world
    only called on the server
    */
    initGame() {

    // create the base objects for both players
    this.addObjectToWorld(new Base(++this.world.idCount, PADDING, 1));
    this.addObjectToWorld(new Base(++this.world.idCount, WIDTH - PADDING, 2));

}
    /*
    * Helper function to pick a random number
    * for positioning of spawned units
    */
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    processInput(inputData, playerId) {

        super.processInput(inputData, playerId);

        // get the player's primary object
        let player = this.world.getPlayerObject(playerId);
        if (player) {

            if (inputData.input === 'up') {
                this.createWaterUnit(playerId);
                console.log(`player ${playerId} created a new Water Unit`);
            } else if (inputData.input === 'down') {
                this.createEarthUnit(playerId);
                console.log(`player ${playerId} created a new Earth Unit`);
            } else if (inputData.input === 'right') {
                this.createFireUnit(playerId);
                console.log(`player ${playerId} created a new Fire Unit`);
            }
        }
    }

    /**
    * @param playerId
    * Function to spawn offensive units
    * velocity direction based on which player is creating
    */
    createWaterUnit(playerId) {
        let yPos;
        let randPos = getRandomInt(1,4);
        if(randPos = 1) {
            yPos = 50;
        } else if(randPos = 2) {
            yPos = 120;
        } else if(randPos = 3) {
            yPos = 190;
        }
        if(playerId == 1) {
            let WaterUnit = new WaterUnit(++this.world.idCount,PADDING + 50,yPos);
            this.addObjectToWorld(WaterUnit);
            WaterUnit.velocity.x = 1;
        } else if(playerId == 2) {
            let WaterUnit = new WaterUnit(++this.world.idCount,WIDTH - PADDING - 50,yPos);
            this.addObjectToWorld(WaterUnit);
            WaterUnit.velocity.x = -1
        }
        return WaterUnit;
    }

    /**
    * @param playerId
    * Function to spawn offensive units
    * velocity direction based on which player is creating
    */
    createEarthUnit(playerId) {
        let yPos;
        let randPos = getRandomInt(1,4);
        if(randPos = 1) {
            yPos = 50;
        } else if(randPos = 2) {
            yPos = 120;
        } else if(randPos = 3) {
            yPos = 190;
        }
        if(playerId == 1) {
            let EarthUnit = new EarthUnit(++this.world.idCount,PADDING + 50,yPos);
            this.addObjectToWorld(EarthUnit);
            EarthUnit.velocity.x = 1;
        } else if(playerId == 2) {
            let EarthUnit = new EarthUnit(++this.world.idCount,WIDTH - PADDING - 50,yPos);
            this.addObjectToWorld(EarthUnit);
            EarthUnit.velocity.x = -1
        }
        return EarthUnit;
    }

    /**
    * @param playerId
    * Function to spawn offensive units
    * velocity direction based on which player is creating
    */
    createFireUnit(playerId) {
        let yPos;
        let randPos = getRandomInt(1,4);
        if(randPos = 1) {
            yPos = 50;
        } else if(randPos = 2) {
            yPos = 120;
        } else if(randPos = 3) {
            yPos = 190;
        }
        if(playerId == 1) {
            let FireUnit = new FireUnit(++this.world.idCount,PADDING + 50,yPos);
            this.addObjectToWorld(FireUnit);
            FireUnit.velocity.x = 1;
        } else if(playerId == 2) {
            let FireUnit = new FireUnit(++this.world.idCount,WIDTH - PADDING - 50,yPos);
            this.addObjectToWorld(FireUnit);
            FireUnit.velocity.x = -1;
        }
        return FireUnit;
    }
}

module.exports = SpaceNuggetsGameEngine;
