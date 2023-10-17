import { DBFFile } from 'dbffile';
import dateFormat, { masks } from "dateformat";

async function iterativeRead() {
    let dbf = await DBFFile.open('./up04.DBF');
    console.log(`DBF file contains ${dbf.recordCount} records.`);
    console.log(`Field names: ${dbf.fields.map(f => f.name).join(', ')}`);
    for await (const record of dbf) {
        console.log(record.name)
    };
}

// iterativeRead();

export async function batchRead() {
    let dbf = await DBFFile.open('./up04.DBF');
    // console.log(`DBF file contains ${dbf.recordCount} records.`);
    // console.log(`Field names: ${dbf.fields.map(f => f.name).join(', ')}`);
    let records = (await dbf.readRecords()) // batch-reads up to 100 records, returned as an array
    // let jsonObjects = JSON.stringify(records);
    // // for (let record of records) {

    // //     jsonObject.push(JSON.stringify(record))
    // //     // console.log(record)
    // // };
    // // console.log(jsonObject)

    // console.table(jsonObjects.length)
    let Thermion_xp50_count = 0;
    let Thermion_xq35_count = 0;
    let Thermion_lrfxp50_count = 0;
    let Thermion_dxp50_count = 0;
    let Digex_c50_count = 0;
    let Digex_c50_940s_count = 0;
    let Thermion_xq50_count = 0;
    let Thermion_xg50_count = 0;
    let Thermion_dxp55_count = 0;
    let Thermion_lrfxq50_count = 0;
    let Thermion_lrfxl50_count = 0;

    let Talion_xq38w_count = 0;
    let Talion_xq35w_count = 0;
    let Talion_xq35_count = 0;

    let Axion_xm30f_count = 0;
    let Axion2_xq35_count = 0;
    let Axion2_lrfxq35_count = 0;

    let Forward_f455s_count = 0;
    let Forward_fn455s_count = 0;

    for (let record of records) {
        const month = dateFormat(new Date(record.DT_O), "mm")
        if (record.SE_K === '00.36262' && record.K_S === '403' && record.SO_K === '11' && month == 10) {

            // console.log(record.KOL)
            if (record.KOL > 0) {
                // console.log(record.KOL)
                Thermion_xp50_count += record.KOL;
            }
        } else if (record.SE_K === '00.36303' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Thermion_xq35_count += record.KOL;
            }
        } else if (record.SE_K === '00.36298' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Thermion_lrfxp50_count += record.KOL;
            }
        } else if (record.SE_K === '00.36308' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Thermion_dxp50_count += record.KOL;
            }
        } else if (record.SE_K === '00.28016' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Digex_c50_count += record.KOL;
            }
        } else if (record.SE_K === '00.36304' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Thermion_xq50_count += record.KOL;
            }
        } else if (record.SE_K === '00.36266' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Thermion_xg50_count += record.KOL;
            }
        } else if (record.SE_K === '00.36928' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Thermion_dxp55_count += record.KOL;
            }
        } else if (record.SE_K === '00.36264' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Thermion_lrfxq50_count += record.KOL;
            }
        } else if (record.SE_K === '00.36310' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Thermion_lrfxl50_count += record.KOL;
            }
        } else if (record.SE_K === '00.36526' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Talion_xq38w_count += record.KOL;
            }
        } else if (record.SE_K === '00.36537' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Talion_xq35w_count += record.KOL;
            }
        } else if (record.SE_K === '00.36540' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Talion_xq35_count += record.KOL;
            }
        } else if (record.SE_K === '00.36667' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Axion_xm30f_count += record.KOL;
            }
        } else if (record.SE_K === '00.36671' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Axion2_xq35_count += record.KOL;
            }
        } else if (record.SE_K === '00.36684' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Axion2_lrfxq35_count += record.KOL;
            }
        } else if (record.SE_K === '00.35797' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Forward_f455s_count += record.KOL;
            }
        } else if (record.SE_K === '00.35798' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Forward_fn455s_count += record.KOL;
            }
        } else if (record.SE_K === '00.28018' && record.K_S === '403' && record.SO_K === '11' && month == 10) {
            if (record.KOL > 0) {
                Digex_c50_940s_count += record.KOL;
            }
        }
    };
    // console.log(count);
    let info = [{
        name: 'Thermion 2 XP50 PRO',
        cecode: '00.36262',
        produced: Thermion_xp50_count,
        inplan: 44,
        timestamp: 1
    },
    {
        name: 'Thermion 2 XQ35 PRO',
        cecode: '00.36303',
        produced: Thermion_xq35_count,
        inplan: 47,
        timestamp: 2
    },
    {
        name: 'Thermion 2 LRF XP50 PRO',
        cecode: '00.36298',
        produced: Thermion_lrfxp50_count,
        inplan: 46,
        timestamp: 3
    },
    {
        name: 'Thermion 2 DUO DXP50',
        cecode: '00.36308',
        produced: Thermion_dxp50_count,
        inplan: 262,
        timestamp: 4
    },
    {
        name: 'Digex C50',
        cecode: '00.28016',
        produced: Digex_c50_count,
        inplan: 200,
        timestamp: 5
    },
    {
        name: 'Thermion 2 XQ50 PRO',
        cecode: '00.36304',
        produced: Thermion_xq50_count,
        inplan: 95,
        timestamp: 6
    },
    {
        name: 'Thermion 2 XG50',
        cecode: '00.36266',
        produced: Thermion_xg50_count,
        inplan: 54,
        timestamp: 7
    },
    {
        name: 'Thermion 2 DUO DXP55',
        cecode: '00.36928',
        produced: Thermion_dxp55_count,
        inplan: 49,
        timestamp: 8
    },
    {
        name: 'Thermion 2 LRF XQ50 PRO',
        cecode: '00.36264',
        produced: Thermion_lrfxq50_count,
        inplan: 100,
        timestamp: 9
    },
    {
        name: 'Thermion 2 LRF XL50',
        cecode: '00.36310',
        produced: Thermion_lrfxl50_count,
        inplan: 250,
        timestamp: 10
    },
    {
        name: 'Talion XQ38 W',
        cecode: '00.36526',
        produced: Talion_xq38w_count,
        inplan: 20,
        timestamp: 11
    },
    {
        name: 'Talion XQ35 PRO W',
        cecode: '00.36537',
        produced: Talion_xq35w_count,
        inplan: 200,
        timestamp: 12
    },
    {
        name: 'Talion XQ35 PRO',
        cecode: '00.36540',
        produced: Talion_xq35_count,
        inplan: 100,
        timestamp: 13
    },
    {
        name: 'Axion XM30F',
        cecode: '00.36667',
        produced: Axion_xm30f_count,
        inplan: 1200,
        timestamp: 14
    },
    {
        name: 'Axion 2 XQ35 PRO',
        cecode: '00.36671',
        produced: Axion2_xq35_count,
        inplan: 580,
        timestamp: 15
    },
    {
        name: 'Axion 2 LRF XQ35 PRO',
        cecode: '00.36684',
        produced: Axion2_lrfxq35_count,
        inplan: 469,
        timestamp: 16
    },
    {
        name: 'Forward F455 S',
        cecode: '00.35797',
        produced: Forward_f455s_count,
        inplan: 246,
        timestamp: 17
    },
    {
        name: 'Forward FN455 S',
        cecode: '00.35798',
        produced: Forward_fn455s_count,
        inplan: 216,
        timestamp: 18
    },
    {
        name: 'Digex C50 (940S)',
        cecode: '00.28018',
        produced: Digex_c50_940s_count,
        inplan: 534,
        timestamp: 19
    },
    ];
    return info;
}

// batchRead().then(res => console.log(res))
// console.log(batchRead());

