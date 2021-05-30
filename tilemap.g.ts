// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e02030303030303030303030303040e0e07010101010101010101010101050e0e07010101010101010101010101050e0e07010101010101010101010101050e0e070101010a0b0101010a0b0101050e0e070101010c0d0101010c0d0101050e0e07010101010101010101010101050e0e07010101010101010101010101050e0e07010101010101010101010101050e0e07010101010101010101010101050e0e07010101010101010101010101050e0e07010101010101010101010101050e0e07010101010101010101010101050e0e08090909090909090909090909060e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Black":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
