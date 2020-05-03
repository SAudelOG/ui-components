import { createElement } from 'react';

var Input = function (_a) {
    var name = _a.name;
    return (createElement("input", { placeholder: "type something", name: name, type: "text" }));
};

export { Input };
