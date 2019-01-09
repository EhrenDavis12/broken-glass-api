module.exports = function (sequelize, DataTypes) {

	var Item = sequelize.define("Item", {
		uuid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			primaryKey: true,
			isUUID: 4
		},
		sku: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				len: {
					args: [1, 255],
					msg: "sku length is not in range of 1-255"
				}
			},
			defaultValue: null
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 255],
					msg: "Name length is not in range of 1-255"
				}
			},
			defaultValue: false
		},
		price: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: true,
			defaultValue: 0.00
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			defaultValue: null
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 255],
					msg: "category length is not in range of 1-255"
				}
			},
			defaultValue: "other"
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		expectedQuantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		alertOnQuantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		expirationDate: {
			type: DataTypes.DATE,
			allowNull: true,
			isDate: true
		},
		waiteTimeOnOrderHours: {
			type: DataTypes.INTEGER,
			allowNull: true
		}

	}, {
			freezeTableName: true
		});

	return Item;
};
