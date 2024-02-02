
const TILE_SIZE = 1024;
const TILES = {
    surface: [
        { "chunk_x": 0, "chunk_z": 0, "x": -761856, "z": -329216, "image": "0_0_x-761856_z-329216.png" },
        { "chunk_x": 595, "chunk_z": 205, "x": -152576, "z": -119296, "image": "595_205_x-152576_z-119296.png" },
        { "chunk_x": 663, "chunk_z": 284, "x": -82944, "z": -38400, "image": "663_284_x-82944_z-38400.png" },
        { "chunk_x": 664, "chunk_z": 284, "x": -81920, "z": -38400, "image": "664_284_x-81920_z-38400.png" },
        { "chunk_x": 665, "chunk_z": 285, "x": -80896, "z": -37376, "image": "665_285_x-80896_z-37376.png" },
        { "chunk_x": 666, "chunk_z": 284, "x": -79872, "z": -38400, "image": "666_284_x-79872_z-38400.png" },
        { "chunk_x": 666, "chunk_z": 285, "x": -79872, "z": -37376, "image": "666_285_x-79872_z-37376.png" },
        { "chunk_x": 667, "chunk_z": 284, "x": -78848, "z": -38400, "image": "667_284_x-78848_z-38400.png" },
        { "chunk_x": 667, "chunk_z": 285, "x": -78848, "z": -37376, "image": "667_285_x-78848_z-37376.png" },
        { "chunk_x": 729, "chunk_z": 323, "x": -15360, "z": 1536, "image": "729_323_x-15360_z1536.png" },
        { "chunk_x": 733, "chunk_z": 311, "x": -11264, "z": -10752, "image": "733_311_x-11264_z-10752.png" },
        { "chunk_x": 733, "chunk_z": 314, "x": -11264, "z": -7680, "image": "733_314_x-11264_z-7680.png" },
        { "chunk_x": 734, "chunk_z": 314, "x": -10240, "z": -7680, "image": "734_314_x-10240_z-7680.png" },
        { "chunk_x": 734, "chunk_z": 321, "x": -10240, "z": -512, "image": "734_321_x-10240_z-512.png" },
        { "chunk_x": 735, "chunk_z": 321, "x": -9216, "z": -512, "image": "735_321_x-9216_z-512.png" },
        { "chunk_x": 736, "chunk_z": 321, "x": -8192, "z": -512, "image": "736_321_x-8192_z-512.png" },
        { "chunk_x": 737, "chunk_z": 321, "x": -7168, "z": -512, "image": "737_321_x-7168_z-512.png" },
        { "chunk_x": 738, "chunk_z": 318, "x": -6144, "z": -3584, "image": "738_318_x-6144_z-3584.png" },
        { "chunk_x": 738, "chunk_z": 319, "x": -6144, "z": -2560, "image": "738_319_x-6144_z-2560.png" },
        { "chunk_x": 738, "chunk_z": 321, "x": -6144, "z": -512, "image": "738_321_x-6144_z-512.png" },
        { "chunk_x": 738, "chunk_z": 322, "x": -6144, "z": 512, "image": "738_322_x-6144_z512.png" },
        { "chunk_x": 739, "chunk_z": 318, "x": -5120, "z": -3584, "image": "739_318_x-5120_z-3584.png" },
        { "chunk_x": 739, "chunk_z": 319, "x": -5120, "z": -2560, "image": "739_319_x-5120_z-2560.png" },
        { "chunk_x": 739, "chunk_z": 320, "x": -5120, "z": -1536, "image": "739_320_x-5120_z-1536.png" },
        { "chunk_x": 739, "chunk_z": 321, "x": -5120, "z": -512, "image": "739_321_x-5120_z-512.png" },
        { "chunk_x": 739, "chunk_z": 322, "x": -5120, "z": 512, "image": "739_322_x-5120_z512.png" },
        { "chunk_x": 740, "chunk_z": 316, "x": -4096, "z": -5632, "image": "740_316_x-4096_z-5632.png" },
        { "chunk_x": 740, "chunk_z": 317, "x": -4096, "z": -4608, "image": "740_317_x-4096_z-4608.png" },
        { "chunk_x": 740, "chunk_z": 320, "x": -4096, "z": -1536, "image": "740_320_x-4096_z-1536.png" },
        { "chunk_x": 740, "chunk_z": 321, "x": -4096, "z": -512, "image": "740_321_x-4096_z-512.png" },
        { "chunk_x": 740, "chunk_z": 322, "x": -4096, "z": 512, "image": "740_322_x-4096_z512.png" },
        { "chunk_x": 741, "chunk_z": 316, "x": -3072, "z": -5632, "image": "741_316_x-3072_z-5632.png" },
        { "chunk_x": 741, "chunk_z": 317, "x": -3072, "z": -4608, "image": "741_317_x-3072_z-4608.png" },
        { "chunk_x": 741, "chunk_z": 318, "x": -3072, "z": -3584, "image": "741_318_x-3072_z-3584.png" },
        { "chunk_x": 741, "chunk_z": 319, "x": -3072, "z": -2560, "image": "741_319_x-3072_z-2560.png" },
        { "chunk_x": 741, "chunk_z": 320, "x": -3072, "z": -1536, "image": "741_320_x-3072_z-1536.png" },
        { "chunk_x": 741, "chunk_z": 321, "x": -3072, "z": -512, "image": "741_321_x-3072_z-512.png" },
        { "chunk_x": 741, "chunk_z": 322, "x": -3072, "z": 512, "image": "741_322_x-3072_z512.png" },
        { "chunk_x": 742, "chunk_z": 311, "x": -2048, "z": -10752, "image": "742_311_x-2048_z-10752.png" },
        { "chunk_x": 742, "chunk_z": 312, "x": -2048, "z": -9728, "image": "742_312_x-2048_z-9728.png" },
        { "chunk_x": 742, "chunk_z": 313, "x": -2048, "z": -8704, "image": "742_313_x-2048_z-8704.png" },
        { "chunk_x": 742, "chunk_z": 314, "x": -2048, "z": -7680, "image": "742_314_x-2048_z-7680.png" },
        { "chunk_x": 742, "chunk_z": 315, "x": -2048, "z": -6656, "image": "742_315_x-2048_z-6656.png" },
        { "chunk_x": 742, "chunk_z": 316, "x": -2048, "z": -5632, "image": "742_316_x-2048_z-5632.png" },
        { "chunk_x": 742, "chunk_z": 317, "x": -2048, "z": -4608, "image": "742_317_x-2048_z-4608.png" },
        { "chunk_x": 742, "chunk_z": 318, "x": -2048, "z": -3584, "image": "742_318_x-2048_z-3584.png" },
        { "chunk_x": 742, "chunk_z": 319, "x": -2048, "z": -2560, "image": "742_319_x-2048_z-2560.png" },
        { "chunk_x": 742, "chunk_z": 320, "x": -2048, "z": -1536, "image": "742_320_x-2048_z-1536.png" },
        { "chunk_x": 742, "chunk_z": 321, "x": -2048, "z": -512, "image": "742_321_x-2048_z-512.png" },
        { "chunk_x": 742, "chunk_z": 322, "x": -2048, "z": 512, "image": "742_322_x-2048_z512.png" },
        { "chunk_x": 742, "chunk_z": 323, "x": -2048, "z": 1536, "image": "742_323_x-2048_z1536.png" },
        { "chunk_x": 743, "chunk_z": 311, "x": -1024, "z": -10752, "image": "743_311_x-1024_z-10752.png" },
        { "chunk_x": 743, "chunk_z": 312, "x": -1024, "z": -9728, "image": "743_312_x-1024_z-9728.png" },
        { "chunk_x": 743, "chunk_z": 313, "x": -1024, "z": -8704, "image": "743_313_x-1024_z-8704.png" },
        { "chunk_x": 743, "chunk_z": 314, "x": -1024, "z": -7680, "image": "743_314_x-1024_z-7680.png" },
        { "chunk_x": 743, "chunk_z": 315, "x": -1024, "z": -6656, "image": "743_315_x-1024_z-6656.png" },
        { "chunk_x": 743, "chunk_z": 316, "x": -1024, "z": -5632, "image": "743_316_x-1024_z-5632.png" },
        { "chunk_x": 743, "chunk_z": 317, "x": -1024, "z": -4608, "image": "743_317_x-1024_z-4608.png" },
        { "chunk_x": 743, "chunk_z": 318, "x": -1024, "z": -3584, "image": "743_318_x-1024_z-3584.png" },
        { "chunk_x": 743, "chunk_z": 319, "x": -1024, "z": -2560, "image": "743_319_x-1024_z-2560.png" },
        { "chunk_x": 743, "chunk_z": 320, "x": -1024, "z": -1536, "image": "743_320_x-1024_z-1536.png" },
        { "chunk_x": 743, "chunk_z": 321, "x": -1024, "z": -512, "image": "743_321_x-1024_z-512.png" },
        { "chunk_x": 743, "chunk_z": 322, "x": -1024, "z": 512, "image": "743_322_x-1024_z512.png" },
        { "chunk_x": 743, "chunk_z": 323, "x": -1024, "z": 1536, "image": "743_323_x-1024_z1536.png" },
        { "chunk_x": 743, "chunk_z": 324, "x": -1024, "z": 2560, "image": "743_324_x-1024_z2560.png" },
        { "chunk_x": 744, "chunk_z": 311, "x": 0, "z": -10752, "image": "744_311_x0_z-10752.png" },
        { "chunk_x": 744, "chunk_z": 312, "x": 0, "z": -9728, "image": "744_312_x0_z-9728.png" },
        { "chunk_x": 744, "chunk_z": 313, "x": 0, "z": -8704, "image": "744_313_x0_z-8704.png" },
        { "chunk_x": 744, "chunk_z": 314, "x": 0, "z": -7680, "image": "744_314_x0_z-7680.png" },
        { "chunk_x": 744, "chunk_z": 315, "x": 0, "z": -6656, "image": "744_315_x0_z-6656.png" },
        { "chunk_x": 744, "chunk_z": 316, "x": 0, "z": -5632, "image": "744_316_x0_z-5632.png" },
        { "chunk_x": 744, "chunk_z": 317, "x": 0, "z": -4608, "image": "744_317_x0_z-4608.png" },
        { "chunk_x": 744, "chunk_z": 318, "x": 0, "z": -3584, "image": "744_318_x0_z-3584.png" },
        { "chunk_x": 744, "chunk_z": 319, "x": 0, "z": -2560, "image": "744_319_x0_z-2560.png" },
        { "chunk_x": 744, "chunk_z": 320, "x": 0, "z": -1536, "image": "744_320_x0_z-1536.png" },
        { "chunk_x": 744, "chunk_z": 321, "x": 0, "z": -512, "image": "744_321_x0_z-512.png" },
        { "chunk_x": 744, "chunk_z": 322, "x": 0, "z": 512, "image": "744_322_x0_z512.png" },
        { "chunk_x": 744, "chunk_z": 323, "x": 0, "z": 1536, "image": "744_323_x0_z1536.png" },
        { "chunk_x": 744, "chunk_z": 324, "x": 0, "z": 2560, "image": "744_324_x0_z2560.png" },
        { "chunk_x": 745, "chunk_z": 311, "x": 1024, "z": -10752, "image": "745_311_x1024_z-10752.png" },
        { "chunk_x": 745, "chunk_z": 312, "x": 1024, "z": -9728, "image": "745_312_x1024_z-9728.png" },
        { "chunk_x": 745, "chunk_z": 313, "x": 1024, "z": -8704, "image": "745_313_x1024_z-8704.png" },
        { "chunk_x": 745, "chunk_z": 314, "x": 1024, "z": -7680, "image": "745_314_x1024_z-7680.png" },
        { "chunk_x": 745, "chunk_z": 315, "x": 1024, "z": -6656, "image": "745_315_x1024_z-6656.png" },
        { "chunk_x": 745, "chunk_z": 316, "x": 1024, "z": -5632, "image": "745_316_x1024_z-5632.png" },
        { "chunk_x": 745, "chunk_z": 317, "x": 1024, "z": -4608, "image": "745_317_x1024_z-4608.png" },
        { "chunk_x": 745, "chunk_z": 318, "x": 1024, "z": -3584, "image": "745_318_x1024_z-3584.png" },
        { "chunk_x": 745, "chunk_z": 319, "x": 1024, "z": -2560, "image": "745_319_x1024_z-2560.png" },
        { "chunk_x": 745, "chunk_z": 320, "x": 1024, "z": -1536, "image": "745_320_x1024_z-1536.png" },
        { "chunk_x": 745, "chunk_z": 321, "x": 1024, "z": -512, "image": "745_321_x1024_z-512.png" },
        { "chunk_x": 745, "chunk_z": 322, "x": 1024, "z": 512, "image": "745_322_x1024_z512.png" },
        { "chunk_x": 745, "chunk_z": 323, "x": 1024, "z": 1536, "image": "745_323_x1024_z1536.png" },
        { "chunk_x": 745, "chunk_z": 324, "x": 1024, "z": 2560, "image": "745_324_x1024_z2560.png" },
        { "chunk_x": 746, "chunk_z": 311, "x": 2048, "z": -10752, "image": "746_311_x2048_z-10752.png" },
        { "chunk_x": 746, "chunk_z": 312, "x": 2048, "z": -9728, "image": "746_312_x2048_z-9728.png" },
        { "chunk_x": 746, "chunk_z": 313, "x": 2048, "z": -8704, "image": "746_313_x2048_z-8704.png" },
        { "chunk_x": 746, "chunk_z": 314, "x": 2048, "z": -7680, "image": "746_314_x2048_z-7680.png" },
        { "chunk_x": 746, "chunk_z": 315, "x": 2048, "z": -6656, "image": "746_315_x2048_z-6656.png" },
        { "chunk_x": 746, "chunk_z": 316, "x": 2048, "z": -5632, "image": "746_316_x2048_z-5632.png" },
        { "chunk_x": 746, "chunk_z": 317, "x": 2048, "z": -4608, "image": "746_317_x2048_z-4608.png" },
        { "chunk_x": 746, "chunk_z": 318, "x": 2048, "z": -3584, "image": "746_318_x2048_z-3584.png" },
        { "chunk_x": 746, "chunk_z": 319, "x": 2048, "z": -2560, "image": "746_319_x2048_z-2560.png" },
        { "chunk_x": 746, "chunk_z": 320, "x": 2048, "z": -1536, "image": "746_320_x2048_z-1536.png" },
        { "chunk_x": 746, "chunk_z": 321, "x": 2048, "z": -512, "image": "746_321_x2048_z-512.png" },
        { "chunk_x": 746, "chunk_z": 322, "x": 2048, "z": 512, "image": "746_322_x2048_z512.png" },
        { "chunk_x": 746, "chunk_z": 323, "x": 2048, "z": 1536, "image": "746_323_x2048_z1536.png" },
        { "chunk_x": 746, "chunk_z": 324, "x": 2048, "z": 2560, "image": "746_324_x2048_z2560.png" },
        { "chunk_x": 747, "chunk_z": 320, "x": 3072, "z": -1536, "image": "747_320_x3072_z-1536.png" },
        { "chunk_x": 747, "chunk_z": 321, "x": 3072, "z": -512, "image": "747_321_x3072_z-512.png" },
        { "chunk_x": 747, "chunk_z": 322, "x": 3072, "z": 512, "image": "747_322_x3072_z512.png" },
        { "chunk_x": 747, "chunk_z": 323, "x": 3072, "z": 1536, "image": "747_323_x3072_z1536.png" },
        { "chunk_x": 748, "chunk_z": 320, "x": 4096, "z": -1536, "image": "748_320_x4096_z-1536.png" },
        { "chunk_x": 748, "chunk_z": 321, "x": 4096, "z": -512, "image": "748_321_x4096_z-512.png" },
        { "chunk_x": 748, "chunk_z": 322, "x": 4096, "z": 512, "image": "748_322_x4096_z512.png" },
        { "chunk_x": 748, "chunk_z": 323, "x": 4096, "z": 1536, "image": "748_323_x4096_z1536.png" },
        { "chunk_x": 748, "chunk_z": 325, "x": 4096, "z": 3584, "image": "748_325_x4096_z3584.png" },
        { "chunk_x": 748, "chunk_z": 326, "x": 4096, "z": 4608, "image": "748_326_x4096_z4608.png" },
        { "chunk_x": 748, "chunk_z": 327, "x": 4096, "z": 5632, "image": "748_327_x4096_z5632.png" },
        { "chunk_x": 749, "chunk_z": 320, "x": 5120, "z": -1536, "image": "749_320_x5120_z-1536.png" },
        { "chunk_x": 749, "chunk_z": 321, "x": 5120, "z": -512, "image": "749_321_x5120_z-512.png" },
        { "chunk_x": 749, "chunk_z": 325, "x": 5120, "z": 3584, "image": "749_325_x5120_z3584.png" },
        { "chunk_x": 749, "chunk_z": 326, "x": 5120, "z": 4608, "image": "749_326_x5120_z4608.png" },
        { "chunk_x": 749, "chunk_z": 327, "x": 5120, "z": 5632, "image": "749_327_x5120_z5632.png" },
        { "chunk_x": 750, "chunk_z": 327, "x": 6144, "z": 5632, "image": "750_327_x6144_z5632.png" },
        { "chunk_x": 752, "chunk_z": 320, "x": 8192, "z": -1536, "image": "752_320_x8192_z-1536.png" },
        { "chunk_x": 752, "chunk_z": 321, "x": 8192, "z": -512, "image": "752_321_x8192_z-512.png" },
        { "chunk_x": 764, "chunk_z": 291, "x": 20480, "z": -31232, "image": "764_291_x20480_z-31232.png" },
        { "chunk_x": 764, "chunk_z": 292, "x": 20480, "z": -30208, "image": "764_292_x20480_z-30208.png" },
        { "chunk_x": 764, "chunk_z": 344, "x": 20480, "z": 23040, "image": "764_344_x20480_z23040.png" },
        { "chunk_x": 765, "chunk_z": 344, "x": 21504, "z": 23040, "image": "765_344_x21504_z23040.png" },
        { "chunk_x": 781, "chunk_z": 359, "x": 37888, "z": 38400, "image": "781_359_x37888_z38400.png" },
        { "chunk_x": 781, "chunk_z": 360, "x": 37888, "z": 39424, "image": "781_360_x37888_z39424.png" },
        { "chunk_x": 781, "chunk_z": 361, "x": 37888, "z": 40448, "image": "781_361_x37888_z40448.png" },
        { "chunk_x": 781, "chunk_z": 362, "x": 37888, "z": 41472, "image": "781_362_x37888_z41472.png" },
        { "chunk_x": 782, "chunk_z": 359, "x": 38912, "z": 38400, "image": "782_359_x38912_z38400.png" },
        { "chunk_x": 782, "chunk_z": 360, "x": 38912, "z": 39424, "image": "782_360_x38912_z39424.png" },
        { "chunk_x": 782, "chunk_z": 361, "x": 38912, "z": 40448, "image": "782_361_x38912_z40448.png" },
        { "chunk_x": 782, "chunk_z": 362, "x": 38912, "z": 41472, "image": "782_362_x38912_z41472.png" },
        { "chunk_x": 783, "chunk_z": 360, "x": 39936, "z": 39424, "image": "783_360_x39936_z39424.png" },
        { "chunk_x": 783, "chunk_z": 361, "x": 39936, "z": 40448, "image": "783_361_x39936_z40448.png" },
        { "chunk_x": 785, "chunk_z": 355, "x": 41984, "z": 34304, "image": "785_355_x41984_z34304.png" },
        { "chunk_x": 785, "chunk_z": 356, "x": 41984, "z": 35328, "image": "785_356_x41984_z35328.png" },
        { "chunk_x": 786, "chunk_z": 355, "x": 43008, "z": 34304, "image": "786_355_x43008_z34304.png" },
        { "chunk_x": 786, "chunk_z": 356, "x": 43008, "z": 35328, "image": "786_356_x43008_z35328.png" },
        { "chunk_x": 789, "chunk_z": 367, "x": 46080, "z": 46592, "image": "789_367_x46080_z46592.png" },
        { "chunk_x": 789, "chunk_z": 368, "x": 46080, "z": 47616, "image": "789_368_x46080_z47616.png" },
        { "chunk_x": 790, "chunk_z": 367, "x": 47104, "z": 46592, "image": "790_367_x47104_z46592.png" },
        { "chunk_x": 790, "chunk_z": 368, "x": 47104, "z": 47616, "image": "790_368_x47104_z47616.png" },
        { "chunk_x": 790, "chunk_z": 369, "x": 47104, "z": 48640, "image": "790_369_x47104_z48640.png" },
        { "chunk_x": 791, "chunk_z": 368, "x": 48128, "z": 47616, "image": "791_368_x48128_z47616.png" },
        { "chunk_x": 791, "chunk_z": 369, "x": 48128, "z": 48640, "image": "791_369_x48128_z48640.png" }
    ],
   
}

const WAYPOINTS = {
    subway_stations: [
        { x: -252, z: -433, name: "Northern & Bee Station" },
        { x: -220, z: -186, name: "Monument Place Station" },
        { x: -236, z: -181, name: "[ZOG] Zombie Grinder Station" },
        { x: -204, z: 578, name: "[PMI] Prismarine Inn Station" },
        { x: -322, z: 364, name: "[DSW] Dismal Swamp Station" },
        { x: -322, z: 41, name: "[APY] Apiary Station" },
        { x: -316, z: 43, name: "[APY] Apiary Station" },
        { x: -270, z: 5, name: "Southwest Blvd" },
        { x: -263, z: -45, name: "Southlands" },
        { x: -263, z: -85, name: "Three Sisters" },
        { x: -268, z: -127, name: "Small Hall Station" },
        { x: -256, z: -151, name: "Monument Place Station" },
        { x: -256, z: -180, name: "Zombie Grinder Station" },
        { x: -242, z: -227, name: "DOJO St Station" },
        { x: -202, z: -229, name: "New Cornick House Station" },
        { x: -184, z: -243, name: "Wintergarden Station" },
        { x: 225, z: -293, name: "[PRU] Pine Ruins Station" },
        { x: 143, z: -291, name: "[CSD] Canalside Station" },
        { x: -213, z: -264, name: "Spawn Central Station" },
        { x: -510, z: 137, name: "[SWL] Southwest Landing Station" },
        { x: -326, z: 41, name: "[APY] Apiary Station" },
        { x: -229, z: -181, name: "[ZOG] Zombie Grinder Station" },
        { x: -27, z: 63, name: "[WCP] Whitecaps Station" },
        { x: -27, z: 7, name: "[MTV] Mountain Village Station" },
        { x: -31, z: -237, name: "[ESJ] Eastside Transfer" },
        { x: -245, z: -49, name: "[SOU] Southlands Terminal" },
        { x: -218, z: -137, name: "Monument Place Station" },
        { x: -213, z: -252, name: "Spawn Central Station" },
        { x: -899, z: -607, name: "Mountain Station" },
        { x: -900, z: -4187, name: "Mensa Club Station" },
        { x: -900, z: -2320, name: "Un-Named Interchange" },
        { x: -1630, z: -2316, name: "Farmington Station" },
        { x: -2143, z: -2315, name: "Village Layover Station" },
        { x: -2135, z: -1015, name: "Twin Peaks Station" },
        { x: -2143, z: -1523, name: "Witchy Swamp Station" },
        { x: -2726, z: -186, name: "Ocean Overlook Station" },
        { x: -2111, z: -186, name: "Un-Named Interchange" },
        { x: 927, z: 1223, name: "End Portal Station" },
        { x: -1048, z: -94, name: "Craniumslows Station" },
        { x: -1048, z: -186, name: "Un-Named Interchange" },
        { x: -1375, z: -188, name: "Un-Named Interchange" },
        { x: -1372, z: 507, name: "Sheep Station" },
        { x: -1372, z: 659, name: "Cow Station" },
        { x: -1033, z: 1087, name: "Un-Named Interchange" },
        { x: -1372, z: 1088, name: "South Station" },
        { x: -1568, z: 909, name: "1567 Station" },
        { x: -1372, z: 908, name: "Magenta Station" },
        { x: -980, z: 907, name: "Un-Named Interchange" },
        { x: -891, z: -187, name: "Un-Named Interchange" },
        { x: -700, z: -185, name: "Dark Oak Station" },
        { x: -536, z: -187, name: "Cat Ave Station" },
        { x: -220, z: 1176, name: "End of Line" },
        { x: -220, z: 6, name: "Unknown Station" },
        { x: -219, z: -254, name: "Spawn Glider Port Station" },
        { x: -219, z: -375, name: "Bell Bridge / Changa Station" },
        { x: -219, z: -481, name: "Eccentric Genius Station" },
        { x: -219, z: -552, name: "Xiled Station" },
        { x: -219, z: -650, name: "Nopantsistan Station" },
        { x: -220, z: -1797, name: "[HLV] Highland Village Station" },
        { x: -187, z: -1254, name: "[MSW] Mid-Swamp Station" },
        { x: -187, z: -782, name: "[JOT] Jotaku Station" },
        { x: -197, z: -719, name: "[NSX] Northside Transfer Station" },
        { x: -217, z: -275, name: "Spawn Central Station" },
        { x: -245, z: -366, name: "[NRV] North River Station" },
        { x: -245, z: -258, name: "[CMK] Central Market Station" },
        { x: -219, z: -137, name: "Monument Place Station" },
        { x: -220, z: -137, name: "Monument Place Station" },
        { x: -120, z: -481, name: "Survey Hall Station" },
        { x: -143, z: -304, name: "Inventory Station" },
        { x: -115, z: -256, name: "Spawn Square Station" },
        { x: 63, z: -215, name: "Tek Square Station" },
        { x: -36, z: -225, name: "Manor Ave Station" },
        { x: -141, z: -225, name: "Spawn Square Station" },
        { x: -221, z: -226, name: "DOJO St Station" },
        { x: -389, z: -222, name: "Mob St Station" },
        { x: -491, z: -222, name: "[CAT] Cat Ave Station" },
        { x: -624, z: 310, name: "Garfield Station" },
        { x: -616, z: -222, name: "Castle Square Station" },
        { x: -187, z: -373, name: "[CHA] Changa Station" },
        { x: -187, z: -477, name: "[ECG] Eccentric Genius" },
        { x: -187, z: -575, name: "[XIL] Xiled Station" },
        { x: -187, z: -662, name: "[NOP] Nopantsistan Station" },
        { x: -187, z: -720, name: "[NSX] Northside Transfer" },
        { x: -245, z: -665, name: "[NPN] Nopantsistan Station" },
        { x: -245, z: -543, name: "[LAY] Laydros Station" },
        { x: -900, z: -1992, name: "Red Station" },
        { x: -72, z: -1946, name: "[NSC] North Shore City Terminal" },
        { x: -183, z: -1949, name: "[NSJ] North Shore Junction" },
        { x: -187, z: -1736, name: "[HLV] Highland Village Station" },
        { x: -187, z: -1519, name: "[NDK] North Docks Station" },
        { x: -187, z: -839, name: "[BOH] Boathouse Station" },
        { x: -189, z: -321, name: "[RST] Riverside Station" },
        { x: -213, z: -258, name: "Spawn Central Station" },
    ]
}


// Set up the map
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -3,
    maxZoom: 3,
    backgroundColor: '#000000',
});

// Create storage for the tile layers
var layers = {
    "Caves": L.layerGroup(),
};

// Make a request to discover cave tiles
fetch('/map-data/minecraft/mc-sdf-org/tiles/caves/tiles.json')
    .then(response => response.json())
    .then(tiles => {
        // Add each tile
        tiles.forEach(tile => {
            var bounds = [[tile.z * -1, tile.x], [(tile.z + 1024) * -1, tile.x + 1024]];
            var image = L.imageOverlay(`/map-data/minecraft/mc-sdf-org/tiles/caves/${tile.image}`, bounds).addTo(layers.Caves);
        });
    });

// Add the layers to the map
L.control.layers(layers).addTo(map);

// Make the viewport look at the center of the map
map.fitBounds([
    [-1024, -1024],
    [1024, 1024]
]);

// Add a CSS rule to pixelate the image only when zoomed in 
map.on('zoomend', function (e) {
    if (map.getZoom() >= 2) {
        if (document.querySelector('#leaflet-pixelator')) return;
        document.head.insertAdjacentHTML('beforeend', '<style id="leaflet-pixelator">.leaflet-image-layer { image-rendering: pixelated; }</style>');
    } else {
        document.querySelector('#leaflet-pixelator').remove();
    }
});

// // Create the tile layers
// var caves = L.xaeroTileLayer("/map-data/minecraft/mc-sdf-org/tiles/caves", {
//     tileSize: 1024,
// }).addTo(map);
// var surface = L.layerGroup();
// map.attributionControl.addAttribution('With help from: DraconicNEO'); 

// // Add each tile to the map
// TILES.surface.forEach(tile => {
//     var bounds = [[tile.z * -1, tile.x], [(tile.z + TILE_SIZE) * -1, tile.x + TILE_SIZE]];
//     var image = L.imageOverlay(`/map-data/minecraft/mc-sdf-org/tiles/surface/${tile.image}`, bounds).addTo(surface);
// });

// // TILES.caves.forEach(tile => {
// //     var bounds = [[tile.z * -1, tile.x], [(tile.z + TILE_SIZE) * -1, tile.x + TILE_SIZE]];
// //     var image = L.imageOverlay(`/map-data/minecraft/mc-sdf-org/tiles/caves/${tile.image}`, bounds).addTo(caves);
// // });


// // Add waypoints
// var subway_stations = L.layerGroup();
// WAYPOINTS.subway_stations.forEach(waypoint => {
//     var marker = L.marker([waypoint.z * -1, waypoint.x]).addTo(subway_stations);
//     marker.bindPopup(waypoint.name);
// });

// // Ad a layer selector
// L.control.layers(
//     {
//         "Caves": caves,
//         "Surface": surface,
//     },
//     {
//         "Subway Stations": subway_stations
//     }
// ).addTo(map);

// map.fitBounds([
//     [-1024, -1024],
//     [1024, 1024]
// ]);

