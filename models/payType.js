module.exports = function (sequelize, DataTypes) {

	var PayType = sequelize.define("PayType", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			primaryKey: true,
			
		},
		PayTypeDescription: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 255],
				}
			},
			defaultValue: false
		},

	}, {
			freezeTableName: true
		});

		PayType.associate = function(models){
			PayType.hasMany (models.Review, {
				as: "PayTypeId"
			});
		};


	return PayType;
};
