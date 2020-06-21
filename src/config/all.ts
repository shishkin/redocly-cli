import { RulesConfig } from './config';

export default {
  rules: {
    schema: 'error',
    'operation-2xx-response': 'error',
    'operation-operationId-unique': 'error',
    'operation-parameters-unique': 'error',
    'path-parameters-defined': 'error',
    'operation-tag-defined': 'error',
    'example-value-or-external-value': 'error',
    'typed-enum': 'error',
    'path-no-trailing-slashes': 'error',
    'path-declaration-must-exist': 'error',
    'operationId-valid-in-url': 'error',
    'openapi-tags-alphabetical': 'error',
    'server-not-example.com': 'error',
    'server-trailing-slash': 'error',
    'info-description': 'error',
    'tag-description': 'error',
    'info-contact': 'error',
    'info-license': 'error',
    'operation-description': 'error',
    'no-unused-schemas': 'error',
    'path-not-include-query': 'error',
    'parameter-description': 'error',
    'operation-singular-tag': 'error',
    'info-license-url': 'error',
    'operation-security-defined': 'error',
    'no-unresolved-refs': 'error',
    'boolean-parameter-prefixes': 'error',
    'paths-kebab-case': 'error'
  },
} as RulesConfig;
