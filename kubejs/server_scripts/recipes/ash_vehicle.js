// const airfight = ["f-18"

ServerEvents.recipes(event => {
    // event.remove({ type: "superbwarfare:vehicle_assembling" });
    event.remove({ output: 'superbwarfare:steel_block' });
    //Tier 2
    event.custom({
        type: "superbwarfare:vehicle_assembling",
        category: "aircraft",
        inputs: [
            "2 superbwarfare:large_motor",
            "1 superbwarfare:medium_battery_pack",
            "2 immersiveengineering:storage_steel",
            "2 superbwarfare:light_armament_module",
            "3 superbwarfare:wheel",
            "6 minecraft:glass",
            "2 ashvehicle:enginefanitem",
            "4 mcore:titanium_sheet",
            "6 minecraft:gray_dye"
        ],
        result: {
            "entity": "ashvehicle:f14"
        }
    });

    event.custom({
        type: "superbwarfare:vehicle_assembling",
        category: "aircraft",
        inputs: [
            "2 superbwarfare:large_motor",
            "1 superbwarfare:medium_battery_pack",
            "4 immersiveengineering:storage_steel",
            "2 superbwarfare:light_armament_module",
            "3 superbwarfare:wheel",
            "6 minecraft:glass",
            "2 ashvehicle:enginefanitem",
            "7 mcore:titanium_sheet",
            "12 minecraft:gray_dye"
        ],
        result: {
            "entity": "ashvehicle:f_15"
        }
    });

    event.custom({
        type: "superbwarfare:vehicle_assembling",
        category: "aircraft",
        inputs: [
            "2 superbwarfare:large_motor",
            "1 superbwarfare:medium_battery_pack",
            "5 immersiveengineering:storage_steel",
            "2 superbwarfare:light_armament_module",
            "3 superbwarfare:wheel",
            "6 minecraft:glass",
            "2 ashvehicle:enginefanitem",
            "10 mcore:titanium_sheet",
            "14 minecraft:gray_dye"
        ],
        result: {
            "entity": "ashvehicle:f_16"
        }
    });

    event.custom({
        type: "superbwarfare:vehicle_assembling",
        category: "aircraft",
        inputs: [
            "2 superbwarfare:large_motor",
            "1 superbwarfare:medium_battery_pack",
            "4 immersiveengineering:storage_steel",
            "2 superbwarfare:light_armament_module",
            "3 superbwarfare:wheel",
            "6 minecraft:glass",
            "2 ashvehicle:enginefanitem",
            "5 mcore:titanium_sheet",
            "7 minecraft:gray_dye",
            "1 superbwarfare:large_propeller"
        ],
        result: {
            "entity": "ashvehicle:uh_60"
        }
    });

    event.custom({
        type: "superbwarfare:vehicle_assembling",
        category: "aircraft",
        inputs: [
            "2 superbwarfare:large_motor",
            "1 superbwarfare:medium_battery_pack",
            "4 immersiveengineering:storage_steel",
            "2 superbwarfare:light_armament_module",
            "3 superbwarfare:wheel",
            "6 minecraft:glass",
            "2 ashvehicle:enginefanitem",
            "5 mcore:titanium_sheet",
            "4 minecraft:lime_dye",
            "4 minecraft:cyan_dye",
            "4 minecraft:light_gray_dye",
            "1 superbwarfare:large_propeller"
        ],
        result: {
            "entity": "ashvehicle:su-25"
        }
    });

    event.custom({
        type: "superbwarfare:vehicle_assembling",
        category: "aircraft",
        inputs: [
            "2 superbwarfare:large_motor",
            "1 superbwarfare:medium_battery_pack",
            "4 immersiveengineering:storage_steel",
            "2 superbwarfare:light_armament_module",
            "3 superbwarfare:wheel",
            "6 minecraft:glass",
            "2 ashvehicle:enginefanitem",
            "5 mcore:titanium_sheet",
            "4 minecraft:lime_dye",
            "4 minecraft:cyan_dye",
            "4 minecraft:light_gray_dye",
            "1 superbwarfare:large_propeller"
        ],
        result: {
            "entity": "ashvehicle:mig_29"
        }
    });
});