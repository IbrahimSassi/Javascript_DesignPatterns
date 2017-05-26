var repo = {
    select: function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    },
    save: function (task) {
        console.log('Saving ' + task.name + ' to the db');
    }

}

repo.execute = function(name){
    var args = Array.prototype.slice.call(arguments, 1);
    
    if(repo[name]){
        return repo[name].apply(repo, args)
    }
    if(name==='get'){
        return repo['select'].apply(repo, args)
    }
    return false;
};

var task = repo.execute('get', 1);
console.log(task);