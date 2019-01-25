module.exports = function (sequelize, DataTypes) {

	var Review = sequelize.define("Review", {
		uuid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			primaryKey: true,
			
		},

	//////////////////Ehren!////////////////Ehren!//////////////////Ehren!/////////////////Ehren!//////////Ehren!
		userId: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 255],
				}
			},
			defaultValue: false
		},
	/////////////////Ehren!////////////////Ehren!//////////////////Ehren!/////////////////Ehren!//////////Ehren!


		shiftPayComment: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 255],
				}
			},
			defaultValue: false
		},
		shiftPayRating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		managementComment: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 255],
				}
			},
			defaultValue: false
		},
		managementRating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		busyComment: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 255],
				}
			},
			defaultValue: false
		},
			busyRating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		customerComment: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 255],
				}
			},
			defaultValue: false
		},
		customerRating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		overallComment: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [1, 255],
				}
			},
			defaultValue: false
		},
		overallRating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},

	}, {
			freezeTableName: true
		});

		Review.associate = function(models){
			Review.belongsTo (models.Company, {
				foreignKey: {
					allowNull: false
				}
			});
		
			Review.belongsTo (models.JobType, {
				foreignKey: {
					allowNull: false
				}
			});

			Review.belongsTo (models.PayType, {
				foreignKey: {
					allowNull: false
				}
			});
		
	};

	return Review;
};
