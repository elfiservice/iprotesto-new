class ProfileDAO {
    constructor(connection) {
        this._connection = connection();
        this._dbName = 'iprotesto';
    }

    getStates(req, res) {
        this._connection.connect((err, client) => {
            const db = client.db(this._dbName);
            db.collection('states').find({_id: "pt-br"}).toArray(function(err, result) {
                const statesList = result[0].state;
                if(err) {
                    console.log(Error(err));                   
                } else {
                    res.render('states', {states: statesList});
                }

                client.close();
            });
        });
    }
}

module.exports = () => {
    return ProfileDAO;
};
  