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

    for (let record of records) {
        const month = dateFormat(new Date(record.DT_O), "mm")
        if (record.SE_K === '00.36262' && record.K_S === '403' && month == 10) {

            console.log(record.DT_O)
            if (record.KOL > 0) {
                // console.log(record.DT_O)
                Thermion_xp50_count += record.KOL;
            }
        }
    };
    // console.log(count);
    let info = [{
        name: 'Thermion 2 XP50 PRO',
        cecode: '00.36262',
        produced: Thermion_xp50_count,
        inplan: 1000,
        timestamp: 1
    }];
    return info;
}

batchRead().then(res => console.log(res))
// console.log(batchRead());