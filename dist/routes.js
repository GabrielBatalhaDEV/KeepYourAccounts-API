"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthenticateForgotPasswordController_1 = require("./Controllers/AuthenticateForgotPasswordController");
var AuthenticateUserController_1 = require("./Controllers/AuthenticateUserController");
var CreateAccountsController_1 = require("./Controllers/CreateAccountsController");
var CreateUsersController_1 = require("./Controllers/CreateUsersController");
var DeleteAccountController_1 = require("./Controllers/DeleteAccountController");
var ListAccountsController_1 = require("./Controllers/ListAccountsController");
var RecoveryPasswordController_1 = require("./Controllers/RecoveryPasswordController");
var UpdateAccountController_1 = require("./Controllers/UpdateAccountController");
var ensureAuth_1 = require("./Middlewares/ensureAuth");
var ensureAuthPassword_1 = require("./Middlewares/ensureAuthPassword");
var router = express_1.Router();
exports.router = router;
var createUsersController = new CreateUsersController_1.CreateUsersController();
var authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
var createAccountsController = new CreateAccountsController_1.CreateAccountsController();
var listAccountsController = new ListAccountsController_1.ListAccountsController();
var authenticateForgotPasswordController = new AuthenticateForgotPasswordController_1.AuthenticateForgotPasswordController();
var recoveryPasswordController = new RecoveryPasswordController_1.RecoveryPasswordController();
var updateAccountController = new UpdateAccountController_1.UpdateAccountController();
var deleteAccountController = new DeleteAccountController_1.DeleteAccountController();
router.get("/accounts", ensureAuth_1.ensureAuth, listAccountsController.handle);
router.post("/users", createUsersController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/accounts", ensureAuth_1.ensureAuth, createAccountsController.handle);
router.post("/forgot_password", authenticateForgotPasswordController.handle);
router.post("/recovery_password", ensureAuthPassword_1.ensureAuthPassword, recoveryPasswordController.handle);
router.put("/accounts/:id", ensureAuth_1.ensureAuth, updateAccountController.handle);
router.delete("/accounts/:id", ensureAuth_1.ensureAuth, deleteAccountController.handle);