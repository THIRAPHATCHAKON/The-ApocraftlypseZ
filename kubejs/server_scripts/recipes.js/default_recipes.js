const materials = [
    { name: 'iron'},
    { name: 'gold'},
    { name: 'diamond'},
    { name: 'netherite'}
];
const weapons = ['sword', 'axe', 'pickaxe', 'shovel', 'hoe'];


ServerEvents.recipes(event => {
    // Remove the weapon recipe and add a new recipe weapon
    materials.forEach(material => {
        weapons.forEach(weapon => {
            event.remove({ output: `minecraft:${material.name}_${weapon}` });
        });
    });

    event.remove({ output: 'minecraft:netherite_ingot' });

    event.shaped(
    Item.of('minecraft:iron_sword'),
    [
        ' I ',
        ' I ',
        'LRS'
    ],
    {
        I: 'minecraft:iron_ingot',
        L: 'chovys_apocalypse_mod:cloth',
        R: 'immersiveengineering:stick_iron',
        S: 'minecraft:string'
    });

    event.shaped(Item.of('minecraft:iron_axe'),
    [
        ' II',
        ' SI',
        'LRS'
    ],
    {
        I: 'minecraft:iron_ingot',
        L: 'chovys_apocalypse_mod:cloth',
        R: 'immersiveengineering:stick_iron',
        S: 'minecraft:string'
    });

        event.shaped(Item.of('minecraft:iron_pickaxe'),
    [
        'III',
        'LRS',
        ' R '
    ],
    {
        I: 'minecraft:iron_ingot',
        L: 'chovys_apocalypse_mod:cloth',
        R: 'immersiveengineering:stick_iron',
        S: 'minecraft:string'
    });

            event.shaped(Item.of('minecraft:iron_shovel'),
    [
        ' I',
        'LRS',
        ' R '
    ],
    {
        I: 'minecraft:iron_ingot',
        L: 'chovys_apocalypse_mod:cloth',
        R: 'immersiveengineering:stick_iron',
        S: 'minecraft:string'
    });

                event.shaped(Item.of('minecraft:iron_hoe'),
    [
        ' II',
        'LRS',
        ' R '
    ],
    {
        I: 'minecraft:iron_ingot',
        L: 'chovys_apocalypse_mod:cloth',
        R: 'immersiveengineering:stick_iron',
        S: 'minecraft:string'
    });

        event.shaped(
    Item.of('minecraft:diamond_sword'),
    [
        ' I ',
        ' I ',
        'LRS'
    ],
    {
        I: 'minecraft:diamond',
        L: 'chovys_apocalypse_mod:cloth',
        R: 'immersiveengineering:stick_steel',
        S: 'minecraft:string'
    });

    event.shaped(Item.of('minecraft:diamond_axe'),
    [
        ' II',
        ' SI',
        'LRS'
    ],
    {
        I: 'minecraft:diamond',
        L: 'chovys_apocalypse_mod:cloth',
        R: 'immersiveengineering:stick_steel',
        S: 'minecraft:string'
    });

        event.shaped(Item.of('minecraft:diamond_pickaxe'),
    [
        'III',
        'LRS',
        ' R '
    ],
    {
        I: 'minecraft:diamond',
        L: 'chovys_apocalypse_mod:cloth',
        R: 'immersiveengineering:stick_steel',
        S: 'minecraft:string'
    });

            event.shaped(Item.of('minecraft:diamond_shovel'),
    [
        ' I',
        'LRS',
        ' R '
    ],
    {
        I: 'minecraft:diamond',
        L: 'chovys_apocalypse_mod:cloth',
        R: 'immersiveengineering:stick_steel',
        S: 'minecraft:string'
    });

    event.shaped(Item.of('minecraft:diamond_hoe'),
    [
        ' II',
        'LRS',
        ' R '
    ],
    {
        I: 'minecraft:diamond',
        L: 'chovys_apocalypse_mod:cloth',
        R: 'immersiveengineering:stick_steel',
        S: 'minecraft:string'
    });

    event.shaped(Item.of('minecraft:netherite_ingot'),
    [
        'III',
        'ILL',
        'RR '
    ],
    {
        I: 'minecraft:netherite_scrap',
        L: 'minecraft:gold_ingot',
        R: 'immersiveengineering:aluminum_ingot_aluminum',
    });

    weapons.forEach(weapon => {
            event.smithing(
                `minecraft:netherite_${weapon}`,                    
                'minecraft:netherite_upgrade_smithing_template',                                                        
                `minecraft:diamond_${weapon}`,                       
                'minecraft:netherite_ingot'  
            );
        });
})