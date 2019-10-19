const fs = require('fs');
const path = require('path');

class nexFs {
    static prepareDirectory(fn) {
        fn = String(fn);
        let dir = path.dirname(fn);
        if (!fs.existsSync(dir)) {
            nexFs.prepareDirectory(dir);
            fs.mkdirSync(dir);
        }
    }

    static getLocalFileSize(fn) {
        let stats = fs.statSync(fn);
        return stats.size;
    }

    static writeFileSync(...args) {
        this.prepareDirectory(args[0]);
        return fs.writeFileSync(...args)
    }
}

module.exports = nexFs;
