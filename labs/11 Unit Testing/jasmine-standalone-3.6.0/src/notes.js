var notes = (function() {
    var list = [];

    return {
        add: function(note) {
            if(note === undefined){
                return false;
            } else if (note.trim() == '') {
                return false;
            }
            if (note) {
                var item = {timestamp: Date.now(), text: note};
                list.push(item);
                return true;

            }
            return false;
        },
        remove: function(index) {
            if(typeof index != 'undefined') {
                if (index > -1 && index < notes.count()) {
                    list.splice(index, 1);
                    return true;
                }
            }
            return false;
        },
        count: function() {
            return list.length;
        },
        list: function() {
            return list;
        },
        find: function(str) {
            if (str === '' || str === undefined){
                return false;
            }

            let results = [];
            let count = this.count();
            let re = RegExp(str, 'i');

            for (let i = 0; i < count; i++) {
                if (list[i].text.match(re) != null){
                    results.push(list[i]);
                }
            }

            if (results.length == 0){
                return false;
            }

            return results;
        },
        clear: function() {
            list.splice(0, list.length);
        }
    }
}());