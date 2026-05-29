const alex_tools = ['roadrunner_boots', 'blood', 'spiked_turtle_shell',
    'emu_leggings', 'rocky_chestplate', 'froststalker_helmet',
    'flying_fish_boots', 'tendon_whip', 'skelewag_sword', 'ghostly_pickaxe'
];

ServerEvents.recipes(event => {
    alex_tools.forEach(tool => {
        event.remove({ output: `alexsmobs:${tool}` });
    });

    event.shaped(
        Item.of('alexsmobs:flying_fish_boots'),
        [
            'RLR',
            'SIS',
        ],
        {
            I: 'minecraft:leather_boots',
            L: 'chovys_apocalypse_mod:cloth',
            R: 'minecraft:string',
            S: 'alexsmobs:flying_fish'
        });

    event.shaped(
        Item.of('alexsmobs:emu_leggings'),
        [
            'SIS',
            'ILI',
            'S S'
        ],
        {
            I: 'alexsmobs:emu_feather',
            L: 'minecraft:leather_leggings',
            S: 'alexsmobs:kangaroo_hide'
        });

    event.shaped(
        Item.of('alexsmobs:roadrunner_boots'),
        [
            'S S',
            'SLS',
            'RIR',
        ],
        {
            I: 'minecraft:leather_boots',
            L: 'chovys_apocalypse_mod:cloth',
            R: 'minecraft:chiseled_sandstone',
            S: 'alexsmobs:roadrunner_feather'
        });

    event.shaped(
        Item.of('alexsmobs:rocky_chestplate'),
        [
            'S S',
            'SIS',
            'SSS',
        ],
        {
            I: 'minecraft:leather_chestplate',
            S: 'alexsmobs:rocky_shell'
        });
});
