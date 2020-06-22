const { Sequelize, Model } = require('sequelize');


const db = require('../../../utils/getSQLConnection');

const Coupon = db.define('coupon' , {
    coupon_id : {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },

    coupon_name : {
        type: Sequelize.STRING
    },
    coupon_type:{
        type: Sequelize.STRING
    },

    created_at:{
        type : Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
    },
    updated_at:{
        type : Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
    }
} , {
    underscored: true,
    timestamps:false
});



module.exports = Coupon;
