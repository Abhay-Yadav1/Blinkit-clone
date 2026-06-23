const {DataTypes} = require('sequelize');
const sequelize = require('../Config/db');

const Payment = sequelize.define('Payment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    paymentMethod: {
        type: DataTypes.ENUM('credit_card', 'debit_card', 'upi', 'wallet', 'net_banking'),
        allowNull: false
    },
    transactionId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    paymentDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    status: {
        type: DataTypes.ENUM('pending', 'completed', 'failed', 'refunded'),
        defaultValue: 'pending'
    }
}, {
    tableName: 'payments',
    timestamps: false
});

module.exports = Payment;
