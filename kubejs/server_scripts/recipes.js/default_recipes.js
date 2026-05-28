const materials = [
    { name: 'iron', ingot: 'minecraft:iron_ingot' },
    { name: 'golden', ingot: 'minecraft:gold_ingot' },
    { name: 'diamond', ingot: 'minecraft:diamond' },
    { name: 'netherite', ingot: 'minecraft:netherite_ingot' },
    { name: 'chainmail', ingot: 'minecraft:chain' },
];
const weapons = ['sword', 'axe', 'pickaxe', 'shovel', 'hoe'];
const armors = ['helmet', 'chestplate', 'leggings', 'boots'];


ServerEvents.recipes(event => {
    // Remove the weapon recipe and add a new recipe weapon
    materials.forEach(material => {
        weapons.forEach(weapon => {
            event.remove({ output: `minecraft:${material.name}_${weapon}` });
        });
        armors.forEach(armor => {
            event.remove({ output: `minecraft:${material.name}_${armor}` });
        });
    });

    event.remove({ output: 'minecraft:netherite_ingot' });
    event.remove({ output: 'minecraft:bow' });
    event.remove({ output: 'minecraft:crossbow' });
    event.remove({ output: 'minecraft:lead' });
    event.remove({ output: 'minecraft:shears' });
    event.remove({ output: 'minecraft:smoker' });
    event.remove({ output: 'minecraft:brewing_stand' });
    event.remove({ output: 'minecraft:end_crystal' });
    event.remove({ output: 'minecraft:shulker_box' });
    event.remove({ output: 'minecraft:turtle_helmet' });

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
        Item.of('minecraft:golden_sword'),
        [
            ' I ',
            ' I ',
            'LRS'
        ],
        {
            I: 'minecraft:gold_ingot',
            L: 'chovys_apocalypse_mod:cloth',
            R: 'immersiveengineering:stick_iron',
            S: 'minecraft:string'
        });

    event.shaped(Item.of('minecraft:golden_axe'),
        [
            ' II',
            ' SI',
            'LRS'
        ],
        {
            I: 'minecraft:gold_ingot',
            L: 'chovys_apocalypse_mod:cloth',
            R: 'immersiveengineering:stick_iron',
            S: 'minecraft:string'
        });

    event.shaped(Item.of('minecraft:golden_pickaxe'),
        [
            'III',
            'LRS',
            ' R '
        ],
        {
            I: 'minecraft:gold_ingot',
            L: 'chovys_apocalypse_mod:cloth',
            R: 'immersiveengineering:stick_iron',
            S: 'minecraft:string'
        });

    event.shaped(Item.of('minecraft:golden_shovel'),
        [
            ' I',
            'LRS',
            ' R '
        ],
        {
            I: 'minecraft:gold_ingot',
            L: 'chovys_apocalypse_mod:cloth',
            R: 'immersiveengineering:stick_iron',
            S: 'minecraft:string'
        });

    event.shaped(Item.of('minecraft:golden_hoe'),
        [
            ' II',
            'LRS',
            ' R '
        ],
        {
            I: 'minecraft:gold_ingot',
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

    event.shaped(Item.of('minecraft:leather_helmet'),
        [
            'LLL',
            'LSL'
        ],
        {
            L: 'minecraft:leather',
            S: 'minecraft:string'
        });

    event.shaped(Item.of('minecraft:leather_chestplate'),
        [
            'LSL',
            'LLL',
            'LLL'
        ],
        {
            L: 'minecraft:leather',
            S: 'minecraft:string'
        });

    event.shaped(Item.of('minecraft:leather_leggings'),
        [
            'LLL',
            'LSL',
            'L L',
        ],
        {
            L: 'minecraft:leather',
            S: 'minecraft:string'
        });

    event.shaped(Item.of('minecraft:leather_boots'),
        [
            'LSL',
            'L L',

        ],
        {
            L: 'minecraft:leather',
            S: 'minecraft:string'
        });

    materials.forEach(metrial => {
        if (metrial.name === 'netherite') return;
        event.shaped(Item.of(`minecraft:${metrial.name}_helmet`),
            [
                'LLL',
                'LSL'
            ],
            {
                L: `${metrial.ingot}`,
                S: 'chovys_apocalypse_mod:cloth'
            });
        event.shaped(Item.of(`minecraft:${metrial.name}_chestplate`),
            [
                'LSL',
                'LLL',
                'LLL'
            ],
            {
                L: `${metrial.ingot}`,
                S: 'chovys_apocalypse_mod:cloth'
            });
        event.shaped(Item.of(`minecraft:${metrial.name}_leggings`),
            [
                'LLL',
                'LSL',
                'L L',
            ],
            {
                L: `${metrial.ingot}`,
                S: 'chovys_apocalypse_mod:cloth'
            });
        event.shaped(Item.of(`minecraft:${metrial.name}_boots`),
            [
                'LSL',
                'L L',
            ],
            {
                L: `${metrial.ingot}`,
                S: 'chovys_apocalypse_mod:cloth'
            });
    });

    armors.forEach(armor => {
        event.smithing(
            `minecraft:netherite_${armor}`,
            'minecraft:netherite_upgrade_smithing_template',
            `minecraft:diamond_${armor}`,
            'minecraft:netherite_ingot'
        );
    });

    event.shaped(Item.of('minecraft:bow'),
        [
            ' LS',
            'L S',
            ' LS',
        ],
        {
            L: 'minecraft:stick',
            S: 'survival_instinct:rope'
        });

    event.shaped(Item.of('minecraft:crossbow'),
        [
            'LIL',
            'STS',
            ' L',
        ],
        {
            I: 'minecraft:iron_ingot',
            L: 'minecraft:stick',
            S: 'survival_instinct:rope',
            T: 'minecraft:tripwire_hook'
        });

    event.shaped(Item.of('minecraft:lead'),
        [
            'SS ',
            'SI ',
            '  S',
        ],
        {
            I: 'minecraft:slime_ball',
            S: 'survival_instinct:rope',
        });

    event.shaped(Item.of('minecraft:shears'),
        [
            ' L ',
            'SIL',
            'L S',
        ],
        {
            I: 'minecraft:stick',
            S: 'minecraft:string',
            L: 'minecraft:iron_ingot'
        });

    event.shaped(Item.of('minecraft:smoker'),
        [
            ' I ',
            'ISI',
            ' L ',
        ],
        {
            I: '#minecraft:logs',
            S: 'minecraft:furnace',
            L: 'minecraft:campfire'
        });

    event.shaped(Item.of('minecraft:brewing_stand'),
        [
            ' I ',
            'SIS',
            'LLL',
        ],
        {
            I: '#minecraft:stones_tool_materials',
            S: 'minecraft:blaze_rod',
            L: 'minecraft:iron_ingot'
        });

    event.shaped(Item.of('minecraft:skeleton_skull'),
        [
            'SIS',
            'ILI',
            'SIS',
        ],
        {
            I: 'minecraft:bone',
            S: 'minecraft:rotten_flesh',
            L: 'minecraft:bow'
        });

    event.shaped(Item.of('minecraft:wither_skeleton_skull'),
        [
            'OLO',
            'DSI',
            'OLO',
        ],
        {
            I: 'minecraft:crying_obsidian',
            S: 'minecraft:skeleton_skull',
            L: 'minecraft:bone',
            O: 'minecraft:coal',
            D: 'minecraft:diamond'
        });

    event.shaped(Item.of('minecraft:shulker_box'),
        [
            ' I ',
            'DSD',
            ' I ',
        ],
        {
            I: 'minecraft:shulker_shell',
            S: '#forge:chests/wooden',
            D: 'minecraft:diamond'
        });

        // event.shaped(Item.of('minecraft:shulker_box'),
        // [
        //     'DDD',
        //     'DID'
        // ],
        // {
        //     I: 'L:chovys_apocalypse_mod:cloth',
        //     D: 'minecraft:scute',
        // });

    event.smelting('1x minecraft:rotten_flesh', 'minecraft:leather')
    event.smelting('1x minecraft:rabbit_hide', 'minecraft:leather')
    event.smoking('1x minecraft:rotten_flesh', 'minecraft:leather');
    event.smoking('1x minecraft:rabbit_hide', 'minecraft:leather');
    event.campfireCooking('minecraft:leather', 'minecraft:rotten_flesh', 0.35, 600)
    event.campfireCooking('minecraft:leather', 'minecraft:rabbit_hide', 0.35, 600)


});