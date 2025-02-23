StartupEvents.postInit(event => {
    /**
     * Function to generate an emissive block model file
     * @param {string} oreNamespace - Namespace of the ore block (e.g., 'alexscaves')
     * @param {string} blockId - ID of the block being created (e.g., 'coprolith_coal_ore')
     * @param {string} baseBlockId - ID of the base block texture (e.g., 'end_stone')
     * @param {string} emissiveOverlayId - ID of the emissive overlay texture (e.g., 'coal_ore')
     * @param {string} baseNamespace - (Optional) Namespace of the base block texture (default: 'minecraft')
     */
    function em(oreNamespace, blockId, baseBlockId, emissiveOverlayId, baseNamespace) {
        baseNamespace = baseNamespace || 'minecraft';
            let modelJson = {
            "parent": "block/block",
            "render_type": "cutout",
            "textures": {
                "particle": `${oreNamespace}:block/${blockId}`,
                "base": `${baseNamespace}:block/${baseBlockId}`,
                "lit": `emissive_overlays:block/${emissiveOverlayId}`
            },
            "elements": [
                {
                    "from": [0, 0, 0],
                    "to": [16, 16, 16],
                    "faces": {
                        "down": { "texture": "#base", "cullface": "down" },
                        "up": { "texture": "#base", "cullface": "up" },
                        "north": { "texture": "#base", "cullface": "north" },
                        "south": { "texture": "#base", "cullface": "south" },
                        "west": { "texture": "#base", "cullface": "west" },
                        "east": { "texture": "#base", "cullface": "east" }
                    }
                },
                {
                    "from": [0, 0, 0],
                    "to": [16, 16, 16],
                    "faces": {
                        "down": { "texture": "#lit", "cullface": "down" },
                        "up": { "texture": "#lit", "cullface": "up" },
                        "north": { "texture": "#lit", "cullface": "north" },
                        "south": { "texture": "#lit", "cullface": "south" },
                        "west": { "texture": "#lit", "cullface": "west" },
                        "east": { "texture": "#lit", "cullface": "east" }
                    },
                    "forge_data": {
                        "color": "FFFFFFFF",
                        "block_light": 15,
                        "sky_light": 15
                    }
                }
            ]
        };

        let filePath = `kubejs/assets/${oreNamespace}/models/block/${blockId}.json`;
        JsonIO.write(filePath, modelJson);
        console.log(`Generated emissive block model: ${filePath}`);
    }

    /**
     * Bulk generates emissive models for different stone types and ore types.
     * @param {string} oreNamespace - Namespace of the ore block.
     * @param {Array<string>} stoneTypes - List of stone types.
     * @param {Array<string>} oreTypes - List of ore types.
     * @param {string} [baseNamespace='minecraft'] - Namespace of the stone base texture.
     */
    function bulkGenerate(oreNamespace, stoneTypes, oreTypes, baseNamespace) {
        baseNamespace = baseNamespace || 'minecraft';
        stoneTypes.forEach(stone => {
            oreTypes.forEach(ore => {
                let blockId = (stone === "stone") ? `${ore}` : `${stone}_${ore}`;
                let baseBlockId = stone;
                let emissiveOverlayId = `${ore}`;

                em(oreNamespace, blockId, baseBlockId, emissiveOverlayId, baseNamespace);
            });
        });
    }

    // Stone type arrays

    let variantStones = [
        'andesite',
        'diorite',
        'granite',
        'tuff'
    ];

    let vanillaStones = [
        'stone',
        'deepslate'
    ];

    let deeperDarkerStones = [
        'sculk_stone',
        'gloomslate'
    ]

    // Ore type arrays

    let vanillaOres = [
        'coal_ore',
        'iron_ore',
        'copper_ore',
        'gold_ore',
        'redstone_ore',
        'emerald_ore',
        'lapis_ore',
        'diamond_ore'
    ];

    let oresSpelunkingMaster = [
        'lucky_citrine_ore',
        'unbreaking_iolite_ore',
        'spider_kunzite_ore',
        'spirit_garnet_ore',
        'haste_peridot_ore',
        'ice_sapphire_ore',
        'dive_aquamarine_ore',
        'fire_ruby_ore',
        'divine_beryl_ore'
    ];

    let oresImmersiveEngineering = [
        'uranium_ore',
        'nickel_ore',
        'lead_ore',
        'silver_ore',
        'aluminum_ore'
    ];

    let oresPowah = [
        'uraninite_ore',
        'uraninite_ore_poor',
        'uraninite_ore_dense'
    ];

    let oresRailcraft = [
        'sulfur_ore',
        'lead_ore',
        'nickel_ore',
        'silver_ore',
        'tin_ore',
        'zinc_ore'
    ];

    let oresMekanism = [
        'tin_ore',
        'osmium_ore',
        'uranium_ore',
        'fluorite_ore',
        'lead_ore'
    ]


    bulkGenerate('spelunking_master', variantStones, oresSpelunkingMaster);
    bulkGenerate('deeperdarker', deeperDarkerStones, vanillaOres, 'deeperdarker');
    // bulkGenerate('immersiveengineering', vanillaStones, oresImmersiveEngineering);
    bulkGenerate('powah', vanillaStones, oresPowah);
    bulkGenerate('railcraft', vanillaStones, oresRailcraft)
    // bulkGenerate('mekanism', vanillaStones, oresMekanism)


    
    // Majrusz's Difficulty
    em('majruszsdifficulty', 'enderium_shard_ore', 'end_stone', 'enderium_shard_ore');

    // End's Phantasm
    em('phantasm', 'cirite_iron_ore', 'cirite', 'cirite_iron_ore', 'phantasm');

    // The Aether & Addons
    em('aether', 'gravitite_ore', 'natural/holystone', 'gravitite_ore', 'aether')
    em('aether', 'zanite_ore', 'natural/holystone', 'zanite_ore', 'aether')
    em('aether', 'ambrosium_ore', 'natural/holystone', 'ambrosium_ore', 'aether')
    em('aether_redux', 'veridium_ore', 'natural/holystone', 'veridium_ore', 'aether')
    em('deep_aether', 'skyjade_ore', 'natural/holystone', 'skyjade_ore', 'aether')

    // Mining Master

    // Overworld Ores
    em('miningmaster', 'divine_beryl_ore', 'stone', 'divine_beryl_ore')
    em('miningmaster', 'deepslate_divine_beryl_ore', 'deepslate', 'divine_beryl_ore')
    em('miningmaster', 'fire_ruby_ore', 'stone', 'fire_ruby_ore')
    em('miningmaster', 'deepslate_fire_ruby_ore', 'deepslate', 'fire_ruby_ore')
    em('miningmaster', 'dive_aquamarine_ore', 'stone', 'dive_aquamarine_ore')
    em('miningmaster', 'deepslate_dive_aquamarine_ore', 'deepslate', 'dive_aquamarine_ore')
    em('miningmaster', 'ice_sapphire_ore', 'stone', 'ice_sapphire_ore')
    em('miningmaster', 'deepslate_ice_sapphire_ore', 'deepslate', 'ice_sapphire_ore')
    em('miningmaster', 'haste_peridot_ore', 'stone', 'haste_peridot_ore')
    em('miningmaster', 'deepslate_haste_peridot_ore', 'deepslate', 'haste_peridot_ore')
    em('miningmaster', 'spirit_garnet_ore', 'stone', 'spirit_garnet_ore')
    em('miningmaster', 'deepslate_spirit_garnet_ore', 'deepslate', 'spirit_garnet_ore')
    em('miningmaster', 'spider_kunzite_ore', 'stone', 'spider_kunzite_ore')
    em('miningmaster', 'deepslate_spider_kunzite_ore', 'deepslate', 'spider_kunzite_ore')
    em('miningmaster', 'unbreaking_iolite_ore', 'stone', 'unbreaking_iolite_ore')
    em('miningmaster', 'deepslate_unbreaking_iolite_ore', 'deepslate', 'unbreaking_iolite_ore')
    em('miningmaster', 'lucky_citrine_ore', 'stone', 'lucky_citrine_ore')
    em('miningmaster', 'deepslate_lucky_citrine_ore', 'deepslate', 'lucky_citrine_ore')

    // Other Ores
    em('miningmaster', 'kinetic_opal_ore', 'netherrack', 'kinetic_opal_ore')
    em('miningmaster', 'heart_rhodonite_ore', 'netherrack', 'heart_rhodonite_ore')
    em('miningmaster', 'power_pyrite_ore', 'netherrack', 'power_pyrite_ore')
    em('miningmaster', 'air_malachite_ore', 'malacore', 'air_malachite_ore', 'miningmaster')

    // Caverns and Chasms
    em('caverns_and_chasms', 'silver_ore', 'stone', 'silver_ore')
    em('caverns_and_chasms', 'deepslate_silver_ore', 'deepslate', 'silver_ore')
    em('caverns_and_chasms', 'spinel_ore', 'stone', 'spinel_ore')
    em('caverns_and_chasms', 'deepslate_spinel_ore', 'deepslate', 'spinel_ore')

    // Mystical Agriculture % Agradditions
    em('mysticalagriculture', 'prosperity_ore', 'stone', 'prosperity_ore')
    em('mysticalagriculture', 'deepslate_prosperity_ore', 'deepslate', 'prosperity_ore')
    em('mysticalagriculture', 'inferium_ore', 'stone', 'inferium_ore')
    em('mysticalagriculture', 'deepslate_inferium_ore', 'deepslate', 'inferium_ore')
    em('mysticalagriculture', 'soulium_ore', 'soulstone', 'soulium_ore', 'mysticalagriculture')
    em('mysticalagradditions', 'nether_prosperity_ore', 'netherrack', 'prosperity_ore')
    em('mysticalagradditions', 'nether_inferium_ore', 'netherrack', 'inferium_ore')
    em('mysticalagradditions', 'end_prosperity_ore', 'end_stone', 'prosperity_ore')
    em('mysticalagradditions', 'end_inferium_ore', 'end_stone', 'inferium_ore')

    // Sculk Horde
    em('sculkhorde', 'calcite_ore', 'sculk_living_rock', 'calcite_ore', 'sculkhorde')

});
