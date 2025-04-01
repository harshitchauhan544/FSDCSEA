const fsPromises = require('fs').promises;

async function datacopyAsync() {
    try {
        const data = await fsPromises.readFile('studentdata.json', 'utf8');
        
        await fsPromises.writeFile('updatedstudentdata.json', data);
        console.log("Data copied successfully to updatedstudentdata.json");

        const newData = await fsPromises.readFile('updatedstudentdata.json', 'utf8');
        console.log("Data from new file:", JSON.parse(newData));
    } catch (error) {
        console.log("Error in data copy operation:", error);
    }
}

module.exports = {
    datacopyAsync
};