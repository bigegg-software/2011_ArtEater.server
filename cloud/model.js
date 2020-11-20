const SchemaConfig = require('@bigegg/parse-server-schema-config')
const ToDo = {
    className: 'ToDo',
    fields: {
        name: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'role:admin': true },
        update: { 'role:admin': true },
        delete: { 'role:admin': true },
    },
}
SchemaConfig.config([ToDo])