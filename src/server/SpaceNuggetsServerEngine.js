'use strict';

const ServerEngine = require('lance-gg').ServerEngine;

class SpaceNuggetsServerEngine extends ServerEngine {

    constructor(io, gameEngine, inputOptions) {
        super(io, gameEngine, inputOptions);
        this.serializer.registerClass(require('../common/PlayerAvatar'));
    }

    start() {
        super.start();

        this.gameEngine.initGame();
        this.players = {
            player1: null,
            player2: null
        };
    }

    onPlayerConnected(socket) {
        super.onPlayerConnected(socket);

        // attach newly connected player an available paddle
        if (this.players.player1 === null) {
            this.players.player1 = socket.id;
            this.gameEngine.playerAvatar1.playerId = socket.playerId;
        } else if (this.players.player2 === null) {
            this.players.player2 = socket.id;
            this.gameEngine.playerAvatar2.playerId = socket.playerId;
        }
    }

    onPlayerDisconnected(socketId, playerId) {
        super.onPlayerDisconnected(socketId, playerId);

        delete this.gameEngine.world.objects[playerId];
    }
}

module.exports = SpaceNuggetsServerEngine;
