"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_2 = require("routing-controllers");
const db_1 = require("./db");
const controller_1 = require("./controller");
const controller_2 = require("./logins/controller");
const controller_3 = require("./teachers/controller");
const entity_1 = require("./teachers/entity");
const jwt_1 = require("./jwt");
const port = process.env.PORT || 4000;
const app = routing_controllers_1.createKoaServer({
    cors: true,
    controllers: [
        controller_1.default,
        controller_2.default,
        controller_3.default
    ],
    authorizationChecker: (action) => {
        const header = action.request.headers.authorization;
        if (header && header.startsWith('Bearer ')) {
            const [, token] = header.split(' ');
            try {
                return !!(token && jwt_1.verify(token));
            }
            catch (e) {
                throw new routing_controllers_2.BadRequestError(e);
            }
        }
        return false;
    },
    currentUserChecker: async (action) => {
        const header = action.request.headers.authorization;
        if (header && header.startsWith('Bearer ')) {
            const [, token] = header.split(' ');
            if (token) {
                const { id } = jwt_1.verify(token);
                return entity_1.default.findOneById(id);
            }
        }
    }
});
db_1.default()
    .then(_ => app.listen(4000, () => console.log('Listening on port 4000')))
    .catch(err => console.error(err));
//# sourceMappingURL=index.js.map