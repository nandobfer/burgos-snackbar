Object.defineProperty(exports, "__esModule", { value: true });
exports.useSnackbar = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var snackbarContext_1 = tslib_1.__importDefault(require("./snackbarContext"));
var useSnackbar = function () {
    var snackbarContext = (0, react_1.useContext)(snackbarContext_1.default);
    var snackbar = function (options) {
        snackbarContext.setSeverity(options.severity);
        snackbarContext.setText(options.text);
        snackbarContext.setOpen(true);
    };
    return tslib_1.__assign({ snackbar: snackbar }, snackbarContext);
};
exports.useSnackbar = useSnackbar;
//# sourceMappingURL=index.es.js.map
