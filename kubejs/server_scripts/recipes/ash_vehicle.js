// // const airfight = ["f-18"

// ServerEvents.recipes(event => {
//     event.remove({ type: 'superbwarfare:vehicle_assembling' });

//     event.remove({ output: 'superbwarfare:steel_block' });
//     //Tier 0

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "2 immersiveengineering:storage_steel",
//             "2 superbwarfare:light_armament_module",
//             "4 superbwarfare:wheel",
//         ],
//         result: {
//             "entity": "ashvehicle:zelensky"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "2 immersiveengineering:storage_steel",
//             "2 superbwarfare:light_armament_module",
//             "3 superbwarfare:wheel",
//             "6 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "4 mcore:titanium_sheet",
//             "6 minecraft:gray_dye"
//         ],
//         result: {
//             "entity": "superbwarfare:yx_100"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "2 immersiveengineering:storage_steel",
//             "2 superbwarfare:light_armament_module",
//             "3 superbwarfare:wheel",
//             "6 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "4 mcore:titanium_sheet",
//             "6 minecraft:gray_dye"
//         ],
//         result: {
//             "entity": "superbwarfare:lav_150"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "2 immersiveengineering:storage_steel",
//             "2 superbwarfare:light_armament_module",
//             "3 superbwarfare:wheel",
//             "6 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "4 mcore:titanium_sheet",
//             "6 minecraft:gray_dye"
//         ],
//         result: {
//             "entity": "superbwarfare:plz_05"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "2 immersiveengineering:storage_steel",
//             "2 superbwarfare:light_armament_module",
//             "3 superbwarfare:wheel",
//             "6 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "4 mcore:titanium_sheet",
//             "6 minecraft:gray_dye"
//         ],
//         result: {
//             "entity": "superbwarfare:prism_tank"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "2 immersiveengineering:storage_steel",
//             "2 superbwarfare:light_armament_module",
//             "3 superbwarfare:wheel",
//             "6 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "4 mcore:titanium_sheet",
//             "6 minecraft:gray_dye"
//         ],
//         result: {
//             "entity": "superbwarfare:tom_6"
//         }
//     });

//     //Tier 1
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "5 immersiveengineering:storage_steel",
//             "3 superbwarfare:light_armament_module",
//             "3 superbwarfare:wheel",
//             "16 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "12 mcore:titanium_sheet",
//             "20 minecraft:gold_ingot",
//             "45 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:f-4"
//         }
//     });
//     //Tier 2
//     //aircraft

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "3 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "4 superbwarfare:light_armament_module",
//             "14 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "16 mcore:titanium_sheet",
//             "1 superbwarfare:propeller",
//             "3 superbwarfare:large_propeller",
//             "24 minecraft:gold_ingot",
//             "48 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "superbwarfare:ah_6"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "4 immersiveengineering:storage_steel",
//             "3 superbwarfare:light_armament_module",
//             "3 superbwarfare:wheel",
//             "12 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "12 mcore:titanium_sheet",
//             "24 minecraft:gold_ingot",
//             "48 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "superbwarfare:a_10a"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "3 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "4 superbwarfare:light_armament_module",
//             "14 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "16 mcore:titanium_sheet",
//             "1 superbwarfare:propeller",
//             "3 superbwarfare:large_propeller",
//             "24 minecraft:gold_ingot",
//             "48 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "superbwarfare:mi_28"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "4 immersiveengineering:storage_steel",
//             "3 superbwarfare:light_armament_module",
//             "3 superbwarfare:wheel",
//             "12 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "12 mcore:titanium_sheet",
//             "24 minecraft:gold_ingot",
//             "48 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:f14"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "4 immersiveengineering:storage_steel",
//             "3 superbwarfare:light_armament_module",
//             "3 superbwarfare:wheel",
//             "12 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "12 mcore:titanium_sheet",
//             "24 minecraft:gold_ingot",
//             "48 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:f_15"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "4 immersiveengineering:storage_steel",
//             "3 superbwarfare:light_armament_module",
//             "3 superbwarfare:wheel",
//             "12 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "12 mcore:titanium_sheet",
//             "24 minecraft:gold_ingot",
//             "48 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:f_16"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "3 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "4 superbwarfare:light_armament_module",
//             "14 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "16 mcore:titanium_sheet",
//             "1 superbwarfare:propeller",
//             "3 superbwarfare:large_propeller",
//             "24 minecraft:gold_ingot",
//             "48 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:uh_60"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "4 immersiveengineering:storage_steel",
//             "3 superbwarfare:light_armament_module",
//             "3 superbwarfare:wheel",
//             "12 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "12 mcore:titanium_sheet",
//             "24 minecraft:gold_ingot",
//             "48 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:su-25"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "4 immersiveengineering:storage_steel",
//             "3 superbwarfare:light_armament_module",
//             "3 superbwarfare:wheel",
//             "12 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "12 mcore:titanium_sheet",
//             "24 minecraft:gold_ingot",
//             "48 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:mig_29"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "4 immersiveengineering:storage_steel",
//             "3 superbwarfare:light_armament_module",
//             "3 superbwarfare:wheel",
//             "12 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "12 mcore:titanium_sheet",
//             "24 minecraft:gold_ingot",
//             "48 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:f-117"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "4 immersiveengineering:storage_steel",
//             "3 superbwarfare:light_armament_module",
//             "3 superbwarfare:wheel",
//             "12 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "12 mcore:titanium_sheet",
//             "24 minecraft:gold_ingot",
//             "48 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:f-18"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "3 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "4 superbwarfare:light_armament_module",
//             "14 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "16 mcore:titanium_sheet",
//             "1 superbwarfare:propeller",
//             "3 superbwarfare:large_propeller",
//             "24 minecraft:gold_ingot",
//             "48 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:ah-64"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "1 superbwarfare:medium_battery_pack",
//             "4 immersiveengineering:storage_steel",
//             "3 superbwarfare:light_armament_module",
//             "3 superbwarfare:wheel",
//             "12 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "12 mcore:titanium_sheet",
//             "24 minecraft:gold_ingot",
//             "48 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:su-27"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "3 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "4 superbwarfare:light_armament_module",
//             "14 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "16 mcore:titanium_sheet",
//             "1 superbwarfare:propeller",
//             "3 superbwarfare:large_propeller",
//             "24 minecraft:gold_ingot",
//             "48 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "vvp:mi_24"
//         }
//     });
//     //tank
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "8 #superbwarfare:storage_blocks/steel",
//             "2 superbwarfare:light_armament_module",
//             "2 superbwarfare:medium_battery_pack",
//             "5 superbwarfare:track",
//             "2 superbwarfare:large_motor",
//             "50 mcore:titanium_sheet",
//             "28 minecraft:gold_ingot",
//             "45 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "ashvehicle:gepard-1a2"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "8 #superbwarfare:storage_blocks/steel",
//             "2 superbwarfare:light_armament_module",
//             "2 superbwarfare:medium_battery_pack",
//             "5 superbwarfare:track",
//             "2 superbwarfare:large_motor",
//             "50 mcore:titanium_sheet",
//             "28 minecraft:gold_ingot",
//             "45 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "ashvehicle:tos"
//         }
//     });
//     //tank
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "8 #superbwarfare:storage_blocks/steel",
//             "2 superbwarfare:light_armament_module",
//             "2 superbwarfare:medium_battery_pack",
//             "5 superbwarfare:track",
//             "2 superbwarfare:large_motor",
//             "50 mcore:titanium_sheet",
//             "28 minecraft:gold_ingot",
//             "45 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "vvp:leopard-2a4"
//         }
//     });
//     //tank
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "8 #superbwarfare:storage_blocks/steel",
//             "2 superbwarfare:light_armament_module",
//             "2 superbwarfare:medium_battery_pack",
//             "5 superbwarfare:track",
//             "2 superbwarfare:large_motor",
//             "50 mcore:titanium_sheet",
//             "28 minecraft:gold_ingot",
//             "45 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "vvp:fmtv"
//         }
//     });
//     //tank
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "8 #superbwarfare:storage_blocks/steel",
//             "2 superbwarfare:light_armament_module",
//             "2 superbwarfare:medium_battery_pack",
//             "5 superbwarfare:track",
//             "2 superbwarfare:large_motor",
//             "50 mcore:titanium_sheet",
//             "28 minecraft:gold_ingot",
//             "45 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "vvp:ural"
//         }
//     });
//     //tank
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "8 #superbwarfare:storage_blocks/steel",
//             "2 superbwarfare:light_armament_module",
//             "2 superbwarfare:medium_battery_pack",
//             "5 superbwarfare:track",
//             "2 superbwarfare:large_motor",
//             "50 mcore:titanium_sheet",
//             "28 minecraft:gold_ingot",
//             "45 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "superbwarfare:bmp_2"
//         }
//     });
//     //tank
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "8 #superbwarfare:storage_blocks/steel",
//             "2 superbwarfare:light_armament_module",
//             "2 superbwarfare:medium_battery_pack",
//             "5 superbwarfare:track",
//             "2 superbwarfare:large_motor",
//             "50 mcore:titanium_sheet",
//             "28 minecraft:gold_ingot",
//             "45 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "vvp:bmp_3"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "8 #superbwarfare:storage_blocks/steel",
//             "2 superbwarfare:light_armament_module",
//             "2 superbwarfare:medium_battery_pack",
//             "5 superbwarfare:track",
//             "2 superbwarfare:large_motor",
//             "50 mcore:titanium_sheet",
//             "28 minecraft:gold_ingot",
//             "45 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "vvp:leopard_2a4"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "8 #superbwarfare:storage_blocks/steel",
//             "2 superbwarfare:light_armament_module",
//             "2 superbwarfare:medium_battery_pack",
//             "5 superbwarfare:track",
//             "2 superbwarfare:large_motor",
//             "50 mcore:titanium_sheet",
//             "28 minecraft:gold_ingot",
//             "45 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "vvp:bmp_2"
//         }
//     });

//     //Tier 2.5
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "8 immersiveengineering:storage_steel",
//             "2 superbwarfare:midium_armament_module",
//             "18 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "24 mcore:titanium_sheet",
//             "32 minecraft:gold_ingot",
//             "60 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:su-33"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "8 immersiveengineering:storage_steel",
//             "2 superbwarfare:midium_armament_module",
//             "18 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "24 mcore:titanium_sheet",
//             "32 minecraft:gold_ingot",
//             "60 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:b-2"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "8 immersiveengineering:storage_steel",
//             "2 superbwarfare:midium_armament_module",
//             "16 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "20 mcore:titanium_sheet",
//             "28 minecraft:gold_ingot",
//             "56 minecraft:iron_ingot",
//             "3 superbwarfare:large_propeller",
//         ],
//         result: {
//             "entity": "ashvehicle:rah_66"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "8 immersiveengineering:storage_steel",
//             "2 superbwarfare:midium_armament_module",
//             "18 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "24 mcore:titanium_sheet",
//             "32 minecraft:gold_ingot",
//             "60 minecraft:iron_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:f_2"
//         }
//     });
//     //tank
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "8 #superbwarfare:storage_blocks/steel",
//             "3 superbwarfare:medium_armament_module",
//             "2 superbwarfare:medium_battery_pack",
//             "7 superbwarfare:track",
//             "2 superbwarfare:large_motor",
//             "60 mcore:titanium_sheet",
//             "38 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "ashvehicle:t_90"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "8 #superbwarfare:storage_blocks/steel",
//             "3 superbwarfare:medium_armament_module",
//             "2 superbwarfare:medium_battery_pack",
//             "7 superbwarfare:track",
//             "2 superbwarfare:large_motor",
//             "60 mcore:titanium_sheet",
//             "38 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//         ],
//         result: {
//             entity: "ashvehicle:m3a3-bradley"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "8 #superbwarfare:storage_blocks/steel",
//             "3 superbwarfare:medium_armament_module",
//             "2 superbwarfare:medium_battery_pack",
//             "7 superbwarfare:track",
//             "2 superbwarfare:large_motor",
//             "60 mcore:titanium_sheet",
//             "38 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "vvp:brm"
//         }
//     });

//     //Tier 3

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "60 mcore:titanium_sheet",
//             "2 superbwarfare:large_propeller",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "5 minecraft:diamond"
//         ],
//         result: {
//             "entity": "ashvehicle:mh_60m"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "60 mcore:titanium_sheet",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "7 minecraft:diamond"
//         ],
//         result: {
//             "entity": "ashvehicle:f-22"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "60 mcore:titanium_sheet",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "7 minecraft:diamond"
//         ],
//         result: {
//             "entity": "ashvehicle:su-34"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "60 mcore:titanium_sheet",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "7 minecraft:diamond"
//         ],
//         result: {
//             "entity": "ashvehicle:eurofighter"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "60 mcore:titanium_sheet",
//             "2 superbwarfare:large_propeller",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "5 minecraft:diamond"
//         ],
//         result: {
//             "entity": "ashvehicle:v-22"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "60 mcore:titanium_sheet",
//             "2 superbwarfare:large_propeller",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "5 minecraft:diamond"
//         ],
//         result: {
//             "entity": "vvp:ah1z"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "60 mcore:titanium_sheet",
//             "2 superbwarfare:large_propeller",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "5 minecraft:diamond"
//         ],
//         result: {
//             "entity": "vvp:mi_28n"
//         }
//     });

//     //tank
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "8 superbwarfare:track",
//             "60 mcore:titanium_sheet",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "5 minecraft:diamond"
//         ],
//         result: {
//             "entity": "ashvehicle:pa_pantsir"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "8 superbwarfare:track",
//             "60 mcore:titanium_sheet",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "5 minecraft:diamond"
//         ],
//         result: {
//             "entity": "vvp:btr_3"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "8 superbwarfare:track",
//             "60 mcore:titanium_sheet",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "5 minecraft:diamond"
//         ],
//         result: {
//             "entity": "vvp:chryzantema"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "8 superbwarfare:track",
//             "60 mcore:titanium_sheet",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "5 minecraft:diamond"
//         ],
//         result: {
//             "entity": "vvp:gaz_tigr"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "8 superbwarfare:track",
//             "60 mcore:titanium_sheet",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "5 minecraft:diamond"
//         ],
//         result: {
//             "entity": "vvp:bmpt_3k"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "8 superbwarfare:track",
//             "60 mcore:titanium_sheet",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "5 minecraft:diamond"
//         ],
//         result: {
//             "entity": "vvp:stryker"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "8 superbwarfare:track",
//             "60 mcore:titanium_sheet",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "5 minecraft:diamond"
//         ],
//         result: {
//             "entity": "vvp:m1a2_sep"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "8 superbwarfare:track",
//             "60 mcore:titanium_sheet",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "5 minecraft:diamond"
//         ],
//         result: {
//             "entity": "vvp:btr_4"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "6 immersiveengineering:storage_steel",
//             "6 superbwarfare:medium_armament_module",
//             "32 minecraft:glass",
//             "8 superbwarfare:track",
//             "60 mcore:titanium_sheet",
//             "42 minecraft:gold_ingot",
//             "50 minecraft:iron_ingot",
//             "5 minecraft:diamond"
//         ],
//         result: {
//             "entity": "vvp:oplot"
//         }
//     });
//     //Tier 3.5
//     //aircraft

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:large_battery_pack",
//             "10 immersiveengineering:storage_steel",
//             "2 superbwarfare:heavy_armament_module",
//             "35 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "64 mcore:titanium_sheet",
//             "50 minecraft:gold_ingot",
//             "70 minecraft:iron_ingot",
//             "15 minecraft:diamond"
//         ],
//         result: {
//             "entity": "ashvehicle:f-35a"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:large_battery_pack",
//             "10 immersiveengineering:storage_steel",
//             "2 superbwarfare:heavy_armament_module",
//             "35 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "64 mcore:titanium_sheet",
//             "50 minecraft:gold_ingot",
//             "70 minecraft:iron_ingot",
//             "15 minecraft:diamond"
//         ],
//         result: {
//             "entity": "ashvehicle:f-35b"
//         }
//     });
//     //tank
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:large_battery_pack",
//             "11 immersiveengineering:storage_steel",
//             "2 superbwarfare:heavy_armament_module",
//             "35 minecraft:glass",
//             "10 superbwarfare:track",
//             "64 mcore:titanium_sheet",
//             "50 minecraft:gold_ingot",
//             "70 minecraft:iron_ingot",
//             "15 minecraft:diamond"
//         ],
//         result: {
//             "entity": "ashvehicle:sapsan-grim2"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:large_battery_pack",
//             "11 immersiveengineering:storage_steel",
//             "2 superbwarfare:heavy_armament_module",
//             "35 minecraft:glass",
//             "10 superbwarfare:track",
//             "64 mcore:titanium_sheet",
//             "50 minecraft:gold_ingot",
//             "70 minecraft:iron_ingot",
//             "15 minecraft:diamond"
//         ],
//         result: {
//             "entity": "vvp:stryker_m1296"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:large_battery_pack",
//             "11 immersiveengineering:storage_steel",
//             "2 superbwarfare:heavy_armament_module",
//             "35 minecraft:glass",
//             "10 superbwarfare:track",
//             "64 mcore:titanium_sheet",
//             "50 minecraft:gold_ingot",
//             "70 minecraft:iron_ingot",
//             "15 minecraft:diamond"
//         ],
//         result: {
//             "entity": "vvp:centauro"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:large_battery_pack",
//             "11 immersiveengineering:storage_steel",
//             "2 superbwarfare:heavy_armament_module",
//             "35 minecraft:glass",
//             "10 superbwarfare:track",
//             "64 mcore:titanium_sheet",
//             "50 minecraft:gold_ingot",
//             "70 minecraft:iron_ingot",
//             "15 minecraft:diamond"
//         ],
//         result: {
//             "entity": "vvp:puma"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "2 superbwarfare:large_battery_pack",
//             "11 immersiveengineering:storage_steel",
//             "2 superbwarfare:heavy_armament_module",
//             "35 minecraft:glass",
//             "10 superbwarfare:track",
//             "64 mcore:titanium_sheet",
//             "50 minecraft:gold_ingot",
//             "70 minecraft:iron_ingot",
//             "15 minecraft:diamond"
//         ],
//         result: {
//             "entity": "vvp:ajax"
//         }
//     });

//     //Tier 4
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "5 superbwarfare:large_motor",
//             "4 superbwarfare:large_battery_pack",
//             "12 immersiveengineering:storage_steel",
//             "4 superbwarfare:heavy_armament_module",
//             "40 minecraft:glass",
//             "4 ashvehicle:enginefanitem",
//             "80 mcore:titanium_sheet",
//             "60 minecraft:gold_ingot",
//             "80 minecraft:iron_ingot",
//             "20 minecraft:diamond",
//             "minecraft:netherite_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:f-39e"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "5 superbwarfare:large_motor",
//             "4 superbwarfare:large_battery_pack",
//             "12 immersiveengineering:storage_steel",
//             "4 superbwarfare:heavy_armament_module",
//             "40 minecraft:glass",
//             "4 ashvehicle:enginefanitem",
//             "80 mcore:titanium_sheet",
//             "60 minecraft:gold_ingot",
//             "80 minecraft:iron_ingot",
//             "20 minecraft:diamond",
//             "minecraft:netherite_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:su-57"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "aircraft",
//         inputs: [
//             "5 superbwarfare:large_motor",
//             "4 superbwarfare:large_battery_pack",
//             "12 immersiveengineering:storage_steel",
//             "4 superbwarfare:heavy_armament_module",
//             "40 minecraft:glass",
//             "4 ashvehicle:enginefanitem",
//             "80 mcore:titanium_sheet",
//             "60 minecraft:gold_ingot",
//             "80 minecraft:iron_ingot",
//             "20 minecraft:diamond",
//             "minecraft:netherite_ingot"
//         ],
//         result: {
//             "entity": "ashvehicle:j-20"
//         }
//     });
//     //tank
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "5 superbwarfare:large_motor",
//             "4 superbwarfare:large_battery_pack",
//             "12 immersiveengineering:storage_steel",
//             "4 superbwarfare:heavy_armament_module",
//             "40 minecraft:glass",
//             "14 superbwarfare:track",
//             "80 mcore:titanium_sheet",
//             "60 minecraft:gold_ingot",
//             "80 minecraft:iron_ingot",
//             "20 minecraft:diamond",
//             "minecraft:netherite_ingot"
//         ],
//         result: {
//             "entity": "vvp:varta"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "5 superbwarfare:large_motor",
//             "4 superbwarfare:large_battery_pack",
//             "12 immersiveengineering:storage_steel",
//             "4 superbwarfare:heavy_armament_module",
//             "40 minecraft:glass",
//             "14 superbwarfare:track",
//             "80 mcore:titanium_sheet",
//             "60 minecraft:gold_ingot",
//             "80 minecraft:iron_ingot",
//             "20 minecraft:diamond",
//             "minecraft:netherite_ingot"
//         ],
//         result: {
//             "entity": "vvp:varta_ptrk"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "5 superbwarfare:large_motor",
//             "4 superbwarfare:large_battery_pack",
//             "12 immersiveengineering:storage_steel",
//             "4 superbwarfare:heavy_armament_module",
//             "40 minecraft:glass",
//             "14 superbwarfare:track",
//             "80 mcore:titanium_sheet",
//             "60 minecraft:gold_ingot",
//             "80 minecraft:iron_ingot",
//             "20 minecraft:diamond",
//             "minecraft:netherite_ingot"
//         ],
//         result: {
//             "entity": "vvp:leopard_2a7v"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "5 superbwarfare:large_motor",
//             "4 superbwarfare:large_battery_pack",
//             "12 immersiveengineering:storage_steel",
//             "4 superbwarfare:heavy_armament_module",
//             "40 minecraft:glass",
//             "14 superbwarfare:track",
//             "80 mcore:titanium_sheet",
//             "60 minecraft:gold_ingot",
//             "80 minecraft:iron_ingot",
//             "20 minecraft:diamond",
//             "minecraft:netherite_ingot"
//         ],
//         result: {
//             "entity": "vvp:t72_b3m"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "5 superbwarfare:large_motor",
//             "4 superbwarfare:large_battery_pack",
//             "12 immersiveengineering:storage_steel",
//             "4 superbwarfare:heavy_armament_module",
//             "40 minecraft:glass",
//             "14 superbwarfare:track",
//             "80 mcore:titanium_sheet",
//             "60 minecraft:gold_ingot",
//             "80 minecraft:iron_ingot",
//             "20 minecraft:diamond",
//             "minecraft:netherite_ingot"
//         ],
//         result: {
//             "entity": "vvp:bmp_2m"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "5 superbwarfare:large_motor",
//             "4 superbwarfare:large_battery_pack",
//             "12 immersiveengineering:storage_steel",
//             "4 superbwarfare:heavy_armament_module",
//             "40 minecraft:glass",
//             "14 superbwarfare:track",
//             "80 mcore:titanium_sheet",
//             "60 minecraft:gold_ingot",
//             "80 minecraft:iron_ingot",
//             "20 minecraft:diamond",
//             "minecraft:netherite_ingot"
//         ],
//         result: {
//             "entity": "vvp:t90_m"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "5 superbwarfare:large_motor",
//             "4 superbwarfare:large_battery_pack",
//             "12 immersiveengineering:storage_steel",
//             "4 superbwarfare:heavy_armament_module",
//             "40 minecraft:glass",
//             "14 superbwarfare:track",
//             "80 mcore:titanium_sheet",
//             "60 minecraft:gold_ingot",
//             "80 minecraft:iron_ingot",
//             "20 minecraft:diamond",
//             "minecraft:netherite_ingot"
//         ],
//         result: {
//             "entity": "vvp:bmp_2_bakhcha"
//         }
//     });
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "land",
//         inputs: [
//             "5 superbwarfare:large_motor",
//             "4 superbwarfare:large_battery_pack",
//             "12 immersiveengineering:storage_steel",
//             "4 superbwarfare:heavy_armament_module",
//             "40 minecraft:glass",
//             "14 superbwarfare:track",
//             "80 mcore:titanium_sheet",
//             "60 minecraft:gold_ingot",
//             "80 minecraft:iron_ingot",
//             "20 minecraft:diamond",
//             "minecraft:netherite_ingot"
//         ],
//         result: {
//             "entity": "vvp:bmpt_3k"
//         }
//     });

//     //tower tier
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "defense",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "3 superbwarfare:heavy_armament_module",
//             "4 superbwarfare:light_armament_module",
//             "8 immersiveengineering:storage_steel",
//             "9 superbwarfare:laser_unit",
//             "4 superbwarfare:cemented_carbide_block",
//             "8 minecraft:redstone_block",
//             "40 mcore:titanium_sheet",
//             "30 minecraft:gold_ingot",
//             "60 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "superbwarfare:waveforce_tower"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "defense",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "6 superbwarfare:medium_armament_module",
//             "4 superbwarfare:light_armament_module",
//             "10 immersiveengineering:storage_steel",
//             "4 superbwarfare:cemented_carbide_block",
//             "8 minecraft:redstone_block",
//             "40 mcore:titanium_sheet",
//             "30 minecraft:gold_ingot",
//             "60 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "superbwarfare:mle_1934"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "defense",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "6 superbwarfare:medium_armament_module",
//             "4 superbwarfare:light_armament_module",
//             "10 immersiveengineering:storage_steel",
//             "4 superbwarfare:cemented_carbide_block",
//             "8 minecraft:redstone_block",
//             "40 mcore:titanium_sheet",
//             "30 minecraft:gold_ingot",
//             "60 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "superbwarfare:bl_132"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "defense",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "6 superbwarfare:medium_armament_module",
//             "4 superbwarfare:light_armament_module",
//             "10 immersiveengineering:storage_steel",
//             "4 superbwarfare:cemented_carbide_block",
//             "8 minecraft:redstone_block",
//             "40 mcore:titanium_sheet",
//             "30 minecraft:gold_ingot",
//             "60 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "superbwarfare:hpj_11"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "defense",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "6 superbwarfare:medium_armament_module",
//             "4 superbwarfare:light_armament_module",
//             "10 immersiveengineering:storage_steel",
//             "4 superbwarfare:cemented_carbide_block",
//             "8 minecraft:redstone_block",
//             "40 mcore:titanium_sheet",
//             "30 minecraft:gold_ingot",
//             "60 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "superbwarfare:mk_42"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "defense",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "6 superbwarfare:medium_armament_module",
//             "4 superbwarfare:light_armament_module",
//             "10 immersiveengineering:storage_steel",
//             "4 superbwarfare:cemented_carbide_block",
//             "8 minecraft:redstone_block",
//             "40 mcore:titanium_sheet",
//             "30 minecraft:gold_ingot",
//             "60 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "superbwarfare:annihilator"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "defense",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "3 superbwarfare:heavy_armament_module",
//             "4 superbwarfare:light_armament_module",
//             "8 immersiveengineering:storage_steel",
//             "9 superbwarfare:laser_unit",
//             "4 superbwarfare:cemented_carbide_block",
//             "8 minecraft:redstone_block",
//             "40 mcore:titanium_sheet",
//             "30 minecraft:gold_ingot",
//             "60 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "superbwarfare:laser_tower"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "defense",
//         inputs: [
//             "4 superbwarfare:large_motor",
//             "6 superbwarfare:medium_armament_module",
//             "4 superbwarfare:light_armament_module",
//             "10 immersiveengineering:storage_steel",
//             "4 superbwarfare:cemented_carbide_block",
//             "8 minecraft:redstone_block",
//             "40 mcore:titanium_sheet",
//             "30 minecraft:gold_ingot",
//             "60 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "superbwarfare:type_63"
//         }
//     });
//     //civilian
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "civilian",
//         inputs: [
//             "immersiveengineering:storage_steel",
//             "4 superbwarfare:wheel",
//             "15 minecraft:gold_ingot",
//         ],
//         result: {
//             "entity": "superbwarfare:wheel_chair"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "civilian",
//         inputs: [
//             "1 superbwarfare:large_motor",
//             "3 superbwarfare:small_battery_pack",
//             "3 immersiveengineering:storage_steel",
//             "4 superbwarfare:wheel",
//             "20 minecraft:glass",
//             "8 mcore:titanium_sheet",
//             "10 minecraft:gold_ingot",
//             "24 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "superbwarfare:truck"
//         }
//     });
//     //boat
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "water",
//         inputs: [
//             "2 superbwarfare:large_motor",
//             "5 superbwarfare:small_battery_pack",
//             "3 immersiveengineering:storage_steel",
//             "2 superbwarfare:light_armament_module",
//             "20 minecraft:glass",
//             "2 ashvehicle:enginefanitem",
//             "1 superbwarfare:large_propeller",
//             "8 mcore:titanium_sheet",
//             "15 minecraft:gold_ingot",
//             "26 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "superbwarfare:speedboat"
//         }
//     });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "water",
//         inputs: [
//             "1 superbwarfare:large_motor",
//             "3 superbwarfare:small_battery_pack",
//             "2 immersiveengineering:storage_steel",
//             "20 minecraft:glass",
//             "ashvehicle:enginefanitem",
//             "1 superbwarfare:large_propeller",
//             "8 mcore:titanium_sheet",
//             "10 minecraft:gold_ingot",
//             "24 minecraft:iron_ingot",
//         ],
//         result: {
//             "entity": "ashvehicle:rubber_boat"
//         }
//     });
//     //miscellaneous
//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "misc",
//         inputs: [
//             "1 superbwarfare:motor",
//             "2 superbwarfare:small_battery_pack",
//             "3 mcore:titanium_sheet",
//             "5 minecraft:gold_ingot",
//             "10 minecraft:iron_ingot",
//             "15 minecraft:redstone"
//         ],
//         result: {
//             item: "superbwarfare:medium_battery_pack"
//         }
//     });

//     // event.custom({
//     //     type: "superbwarfare:vehicle_assembling",
//     //     category: "misc",
//     //     inputs: [
//     //         "2 superbwarfare:large_motor",
//     //         "1 superbwarfare:medium_battery_pack",
//     //         "4 immersiveengineering:storage_steel",
//     //         "2 superbwarfare:light_armament_module",
//     //         "3 superbwarfare:wheel",
//     //         "6 minecraft:glass",
//     //         "2 ashvehicle:enginefanitem",
//     //         "5 mcore:titanium_sheet",
//     //         "15 minecraft:gold_ingot",
//     //         "24 minecraft:iron_ingot",
//     //     ],
//     //     result: {
//     //         item: "ashvehicle:jetengineitem"
//     //     }
//     // });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "misc",
//         inputs: [
//             "1 superbwarfare:large_motor",
//             "2 superbwarfare:medium_battery_pack",
//             "5 mcore:titanium_sheet",
//             "10 minecraft:gold_ingot",
//             "20 minecraft:iron_ingot",
//             "2 minecraft:diamond",
//             "3 minecraft:redstone_block"
//         ],
//         result: {
//             item: "superbwarfare:large_battery_pack"
//         }
//     });

//     // event.custom({
//     //     type: "superbwarfare:vehicle_assembling",
//     //     category: "misc",
//     //     inputs: [
//     //         "2 superbwarfare:large_motor",
//     //         "1 superbwarfare:medium_battery_pack",
//     //         "4 immersiveengineering:storage_steel",
//     //         "2 superbwarfare:light_armament_module",
//     //         "3 superbwarfare:wheel",
//     //         "6 minecraft:glass",
//     //         "2 ashvehicle:enginefanitem",
//     //         "5 mcore:titanium_sheet",
//     //         "15 minecraft:gold_ingot",
//     //         "24 minecraft:iron_ingot",
//     //     ],
//     //     result: {
//     //         item: "superbwarfare:vehicle_reset_kit"
//     //     }
//     // });

//     // event.custom({
//     //     type: "superbwarfare:vehicle_assembling",
//     //     category: "misc",
//     //     inputs: [
//     //         "2 superbwarfare:large_motor",
//     //         "1 superbwarfare:medium_battery_pack",
//     //         "4 immersiveengineering:storage_steel",
//     //         "2 superbwarfare:light_armament_module",
//     //         "3 superbwarfare:wheel",
//     //         "6 minecraft:glass",
//     //         "2 ashvehicle:enginefanitem",
//     //         "5 mcore:titanium_sheet",
//     //         "15 minecraft:gold_ingot",
//     //         "24 minecraft:iron_ingot",
//     //     ],
//     //     result: {
//     //         item: "vvp:d30_item"
//     //     }
//     // });

//     // event.custom({
//     //     type: "superbwarfare:vehicle_assembling",
//     //     category: "misc",
//     //     inputs: [
//     //         "2 superbwarfare:large_motor",
//     //         "1 superbwarfare:medium_battery_pack",
//     //         "4 immersiveengineering:storage_steel",
//     //         "2 superbwarfare:light_armament_module",
//     //         "3 superbwarfare:wheel",
//     //         "6 minecraft:glass",
//     //         "2 ashvehicle:enginefanitem",
//     //         "5 mcore:titanium_sheet",
//     //         "15 minecraft:gold_ingot",
//     //         "24 minecraft:iron_ingot",
//     //     ],
//     //     result: {
//     //         item: "vvp:kornet_item"
//     //     }
//     // });

//     // event.custom({
//     //     type: "superbwarfare:vehicle_assembling",
//     //     category: "misc",
//     //     inputs: [
//     //         "2 superbwarfare:large_motor",
//     //         "1 superbwarfare:medium_battery_pack",
//     //         "4 immersiveengineering:storage_steel",
//     //         "2 superbwarfare:light_armament_module",
//     //         "3 superbwarfare:wheel",
//     //         "6 minecraft:glass",
//     //         "2 ashvehicle:enginefanitem",
//     //         "5 mcore:titanium_sheet",
//     //         "15 minecraft:gold_ingot",
//     //         "24 minecraft:iron_ingot",
//     //     ],
//     //     result: {
//     //         item: "vvp:ags_30_item"
//     //     }
//     // });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "misc",
//         inputs: [
//             "1 superbwarfare:large_motor",
//             "1 superbwarfare:large_motor",
//             "1 superbwarfare:propeller",
//             "5 mcore:titanium_sheet",
//             "5 minecraft:gold_ingot",
//             "10 minecraft:iron_sheet",
//             "5 minecraft:iron_ingot",
//             "1 minecraft:redstone_block"
//         ],
//         result: {
//             item: "ashvehicle:enginefanitem"
//         }
//     });

//     // event.custom({
//     //     type: "superbwarfare:vehicle_assembling",
//     //     category: "misc",
//     //     inputs: [
//     //         "2 superbwarfare:large_motor",
//     //         "1 superbwarfare:medium_battery_pack",
//     //         "4 immersiveengineering:storage_steel",
//     //         "2 superbwarfare:light_armament_module",
//     //         "3 superbwarfare:wheel",
//     //         "6 minecraft:glass",
//     //         "2 ashvehicle:enginefanitem",
//     //         "5 mcore:titanium_sheet",
//     //         "15 minecraft:gold_ingot",
//     //         "24 minecraft:iron_ingot",
//     //     ],
//     //     result: {
//     //         item: "ashvehicle:gbu57item"
//     //     }
//     // });

//     event.custom({
//         type: "superbwarfare:vehicle_assembling",
//         category: "misc",
//         inputs: [
//             "1 superbwarfare:motor",
//             "10 minecraft:copper_ingot",
//             "3 minecraft:gold_ingot",
//             "5 minecraft:iron_ingot",
//             "10 minecraft:redstone"
//         ],
//         result: {
//             item: "superbwarfare:small_battery_pack"
//         }
//     });

//     //     event.custom({
//     //         type: "superbwarfare:vehicle_assembling",
//     //         category: "misc",
//     //         inputs: [
//     //             "2 superbwarfare:large_motor",
//     //             "1 superbwarfare:medium_battery_pack",
//     //             "4 immersiveengineering:storage_steel",
//     //             "2 superbwarfare:light_armament_module",
//     //             "3 superbwarfare:wheel",
//     //             "6 minecraft:glass",
//     //             "2 ashvehicle:enginefanitem",
//     //             "5 mcore:titanium_sheet",
//     //             "15 minecraft:gold_ingot",
//     //             "24 minecraft:iron_ingot",
//     //         ],
//     //         result: {
//     //             item: "ashvehicle:nuclearbombitem"
//     //         }
//     //     });
// });