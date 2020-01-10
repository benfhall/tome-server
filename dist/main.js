"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const bodyParser = require("body-parser");
const neconfig_1 = require("neconfig");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bodyParser: false,
    });
    app.enableCors();
    const rawBodyBuffer = (req, res, buf, encoding) => {
        if (buf && buf.length) {
            req.rawBody = buf.toString(encoding || 'utf8');
        }
    };
    app.use(bodyParser.urlencoded({ verify: rawBodyBuffer, extended: true }));
    app.use(bodyParser.json({ verify: rawBodyBuffer }));
    const config = app.get(neconfig_1.ConfigReader);
    const port = config.getIntOrThrow('PORT');
    await app.listen(port);
    console.log('Listening on: ', port);
}
bootstrap();
//# sourceMappingURL=main.js.map