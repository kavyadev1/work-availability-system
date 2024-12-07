const UserModel = require('../Models/User')

const bcrypt = require('bcryptjs')
const {generateFromEmail} = require('unique-username-generator')

const StringService = require('../Service/StringService')
const AuthService = require('../Service/AuthService')
const MongooseService = require('../Service/MongooseService')
const UserService = new MongooseService(UserModel);
const {sendResponse} = require('../Middleware/sendResponse')
const AggregatorService = require('../Service/AggregatoreService')
 