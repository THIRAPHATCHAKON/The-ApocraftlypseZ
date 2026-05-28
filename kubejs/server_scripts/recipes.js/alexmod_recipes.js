const alex_tools = ['roadrunner_boots', 'blood', 'spiked_turtle_shell',
    'emu_leggings', 'rocky_chestplate', 'froststalker_helmet',
    'flying_fish_boots', 'tendon_whip', 'skelewag_sword', 'ghostly_pickaxe'
];

ServerEvents.recipes(event => {
    alex_tools.forEach(tool => {
        event.remove({ output: `alexsmobs:${tool}` });
    });
});
