'use strict';

const GameEngine = require('lance-gg').GameEngine;
const Base = require('./Base');
const FireUnit = require('./FireUnit');
const WaterUnit = require('./WaterUnit');
const EarthUnit = require('./EarthUnit');
const PADDING =  20;
const WIDTH = 1200;
const HEIGHT = 400;
const BASE_WIDTH = 10;
const BASE_HEIGHT = 50;


class SpaceNuggetsGameEngine extends GameEngine {

    constructor(options) {
        super(options);
    }

    start() {

        super.start();


    }

    processInput(inputData, playerId) {

        super.processInput(inputData, playerId);

        // get the player's primary object
        let player = this.world.getPlayerObject(playerId);
        if (player) {
            console.log(`player ${playerId} pressed ${inputData.input}`);
            if (inputData.input === 'up') {
                player.isMovingUp = true;
            } else if (inputData.input === 'down') {
                player.isMovingDown = true;
            } else if (inputData.input === 'right') {
                player.isRotatingRight = true;
            } else if (inputData.input === 'left') {
                player.isRotatingLeft = true;
            } else if (inputData.input === 'space') {
                this.fire(player, inputData.messageIndex);
                this.emit('fire');
            }
        }
    }
}

module.exports = SpaceNuggetsGameEngine;
