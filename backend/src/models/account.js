module.exports = (sequelize, DataTypes) => {
  const accounts = sequelize.define('accounts', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passwordResetToken: {
      type: DataTypes.STRING,
      select: false,
    },
    passwordResetExpires: {
      type: DataTypes.DATE,
      select: false,
    },
  })

  accounts.prototype.toJSON = function () {
    const values = { ...this.get() }
    delete values.password
    return values
  }

  return accounts
}
