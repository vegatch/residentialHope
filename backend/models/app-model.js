import {Sequelize} from 'sequelize';
import db from '../config/db-config.js';

const {DataTypes} = Sequelize;

const User = db.define('users', {
    firstname:DataTypes.STRING,
    lastname:DataTypes.STRING,
    entryage:DataTypes.INTEGER,    
    gender:DataTypes.STRING,
}, {
     freezeTableName: true,
})


export default User;

(async()=>{
    await db.sync();
})();