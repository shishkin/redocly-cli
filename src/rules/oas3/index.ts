import { OAS3RuleSet } from '../../validate';

import { OAS3Schema } from './schema';
import { Operation2XXResponse } from './operation-2xx-response';
import { OperationIdUnique } from './operation-operationId-unique';
import { OperationParametersUnique } from './operation-parameters-unique';
import { PathParamsDefined } from './path-params-defined';
import { OperationTagDefined } from './operation-tag-defined';
import { ExampleValueOrExternalValue } from './oas3-examples-value-or-externalValue';
import { TypedEnum } from './typed-enum';
import { PathNoTrailingSlash } from './path-keys-no-trailing-slash';
import { PathDeclarationMustExist } from './path-declaration-must-exist';
import { OperationIDValidURL } from './operation-operationId-valid-in-url';
import { OpenapiTagsAlphabetical } from './openapi-tags-alphabetical';
import { ServerNotExample } from './oas3-server-not-example.com';
import { ServerNoTrailingSlash } from './oas3-server-trailing-slash';
import { InfoDescription } from './info-description';
import { TagDescription } from './tag-description';
import { InfoContact } from './info-contact';
import { InfoLicense } from './info-license';
import { OperationDescription } from './operation-description';
import { NoUnusedComponents } from './unused-components';
import { PathNotIncludeQuery } from './path-not-include-query';
import { ParameterDescription } from './parameter-description';
import { OperationSingularTag } from './operation-singular-tag';
import { InfoLicenseUrl } from './license-url';
import { OperationSecurityDefined } from './operation-security-defined';
import { NoUnresolvedRefs } from '../no-unresolved-refs';
import { BooleanParameterPrefixes } from './boolean-parameter-prefixes';
import { PathsKebabCase } from './paths-kebab-case';

export default {
  schema: OAS3Schema,
  'operation-2xx-response': Operation2XXResponse,
  'operation-operationId-unique': OperationIdUnique,
  'operation-parameters-unique': OperationParametersUnique,
  'path-parameters-defined': PathParamsDefined,
  'operation-tag-defined': OperationTagDefined,
  'example-value-or-external-value': ExampleValueOrExternalValue,
  'typed-enum': TypedEnum,
  'path-no-trailing-slashes': PathNoTrailingSlash,
  'path-declaration-must-exist': PathDeclarationMustExist,
  'operationId-valid-in-url': OperationIDValidURL,
  'openapi-tags-alphabetical': OpenapiTagsAlphabetical,
  'server-not-example.com': ServerNotExample,
  'server-trailing-slash': ServerNoTrailingSlash,
  'info-description': InfoDescription,
  'tag-description': TagDescription,
  'info-contact': InfoContact,
  'info-license': InfoLicense,
  'operation-description': OperationDescription,
  'operation-operationId-valid-in-url': OperationIDValidURL,
  'no-unused-schemas': NoUnusedComponents,
  'path-not-include-query': PathNotIncludeQuery,
  'path-params-defined': PathParamsDefined,
  'parameter-description': ParameterDescription,
  'operation-singular-tag': OperationSingularTag,
  'info-license-url': InfoLicenseUrl,
  'operation-security-defined': OperationSecurityDefined,
  'no-unresolved-refs': NoUnresolvedRefs,
  'paths-kebab-case': PathsKebabCase,
  'boolean-parameter-prefixes': BooleanParameterPrefixes,
} as OAS3RuleSet;
