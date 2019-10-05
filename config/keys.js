dbPassword = 'mongodb://maxben:venice@cluster0-shard-00-00-edbqo.mongodb.net:27017,cluster0-shard-00-01-edbqo.mongodb.net:27017,cluster0-shard-00-02-edbqo.mongodb.net:27017/Cluster0?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword
};
