describe('notes module', function () {
    beforeEach(function() {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
    });

    describe('adding a note', function() {
        it("should be able to add a new note", function () {
            expect(notes.add('sixth note')).toBe(true);
            expect(notes.count()).toBe(6);
        });
        it("should ignore blank notes", function () {
            expect(notes.add('')).toBe(false);
            expect(notes.count()).toBe(5);
        });
        it('should ignore notes containing only whitespace', function() {
            expect(notes.add('   ')).toBe(false);
            expect(notes.count()).toBe(5);
        });

        it('should require a string parameter', function() {
            expect(notes.add()).toBe(false);
            expect(notes.count()).toBe(5);
        });
    });

    describe('deleting a note', function() {
        it('should be able to delete the first index', function() {
            let count = notes.count();
            expect(notes.remove(0)).toBe(true);
            expect(notes.count()).toBe(--count);
        });
        it('should be able to delete the last index', function() {
            let count = notes.count();
            expect(notes.remove(notes.count() - 1)).toBe(true);
            expect(notes.count()).toBe(--count);
        });
        it('should return false if index is out of range', function() {
            let count = notes.count();
            expect(notes.remove(-1)).toBe(false);
            expect(notes.count()).toBe(count);
        });
        it('should return false if the parameter is missing', function() {
            let count = notes.count();
            expect(notes.remove()).toBe(false);
            expect(notes.count()).toBe(count);
        });
    });

    describe('finding a note', function (){
        it('search for ‘note’', function() {
            expect(notes.find('note')).toEqual(notes.list());
        });
        it('search for ‘Note’', function() {
            expect(notes.find('Note')).toEqual(notes.list());
        });
        it('search for ‘th’', function() {
            let list = notes.list();
            list.splice(0, 3)
            expect(notes.find('th')).toEqual(list);
        });
        it('search for ‘four’', function() {
            let list = notes.list().slice(3,4);
            expect(notes.find('four')).toEqual(list);
        });
        it('search for ‘six’', function() {
            expect(notes.find('six')).toBe(false);
        });
        it('search for a blank string', function() {
            expect(notes.find('')).toBe(false);
        });
        it('search without passing a parameter', function() {
            expect(notes.find()).toBe(false);
        });
    })
});