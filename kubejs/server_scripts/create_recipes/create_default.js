ServerEvents.recipes(event => {
    // event.remove({ output: 'create:schematicannon' });
    event.remove({ output: 'create:flywheel' });
    event.remove({ output: 'create:rotation_speed_controller' });
    event.remove({ output: 'create:contraption_controlled' });
    event.remove({ output: 'create:steam_engine' });
    event.remove({ output: 'create:mechanical_arm' });

    event.recipes.create.mechanical_crafting(
        Item.of('create:flywheel'),
        [
            'III',
            'ILI',
            'III'
        ],
        {
            I: 'create:brass_ingot',
            L: 'create:shaft',
        });

    event.recipes.create.mechanical_crafting(
        Item.of('create:rotation_speed_controller'),
        [
            ' P ',
            ' L ',
            'IBI'
        ],
        {
            I: 'create:brass_ingot',
            L: 'create:shaft',
            P: 'create:precision_mechanism',
            B: 'create:brass_casing'
        });
    event.recipes.create.mechanical_crafting(
        Item.of('create:mechanical_arm'),
        [
            'IIL',
            'I  ',
            'PB '
        ],
        {
            I: 'create:brass_sheet',
            L: 'create:andesite_alloy',
            P: 'create:precision_mechanism',
            B: 'create:brass_casing'
        });

    event.recipes.create.mechanical_crafting(
        Item.of('create:mechanical_roller'),
        [
            ' P ',
            ' L ',
            ' I '
        ],
        {
            I: 'create:crushing_wheel',
            L: 'create:andesite_casing',
            P: 'create:electron_tube',
        });
    event.recipes.create.mechanical_crafting(
        Item.of('create:steam_engine'),
        [
            ' I ',
            ' L ',
            'CPC'
        ],
        {
            I: '#forge:plates/gold',
            L: 'create:andesite_alloy',
            P: 'minecraft:copper_block',
            C: 'minecraft:copper_ingot',
        });
});