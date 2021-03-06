module.exports = function (sequelize, DataTypes) {

	var Company = sequelize.define("Company", {
	
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			validate: {
				len: {
					args: [1, 255],
				}
			},
			defaultValue: false
		},
	
		companyName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 255],
				}
			},
			defaultValue: false
		},
		averageRating: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: 0
		},
		reviewCount: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		

	}, {
			freezeTableName: true
		});

		Company.associate = function(models){
			Company.hasMany (models.Review, {
				as: "CompanyId"
			});
		};


	return Company;
};
