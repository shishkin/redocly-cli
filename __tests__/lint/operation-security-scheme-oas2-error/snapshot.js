// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint operation-security-scheme-oas2-error 1`] = `

validating /openapi.yaml...
[1] openapi.yaml:14:5 at #/securityDefinitions/basicAuth/name

The field \`name\` is not allowed here.

12 | basicAuth:
13 |   type: basic
14 |   name: Authorization
   |   ^^^^
15 |   description: basic auth
16 |   x-internal: true

Error was generated by the spec rule.


[2] openapi.yaml:22:5 at #/securityDefinitions/bearerAuth/flows

Property \`flows\` is not expected here.

Did you mean: flow ?

20 | in: header
21 | description: bearer auth
22 | flows: api flows
   | ^^^^^
23 | x-internal: true
24 | testProp: test

Error was generated by the spec rule.


[3] openapi.yaml:24:5 at #/securityDefinitions/bearerAuth/testProp

Property \`testProp\` is not expected here.

22 |   flows: api flows
23 |   x-internal: true
24 |   testProp: test
   |   ^^^^^^^^
25 | oauthImplicit:
26 |   type: oauth2

Error was generated by the spec rule.


[4] openapi.yaml:30:5 at #/securityDefinitions/oauthImplicit/tokenUrl

The field \`tokenUrl\` is not allowed here.

28 | flow: implicit
29 | description: oauth implicit
30 | tokenUrl: 'http://tokenUrl'
   | ^^^^^^^^
31 | scopes:
32 |   'write:pets': 'modify pets in your account'

Error was generated by the spec rule.


[5] openapi.yaml:40:5 at #/securityDefinitions/oauthAccessCode/name

The field \`name\` is not allowed here.

38 | tokenUrl: 'http://tokenUrl'
39 | description: access code
40 | name: accessCodeName
   | ^^^^
41 | scopes:
42 |   'write:pets': 'modify pets in your account'

Error was generated by the spec rule.


[6] openapi.yaml:47:5 at #/securityDefinitions/oauthApplication/authorizationUrl

The field \`authorizationUrl\` is not allowed here.

45 | type: oauth2
46 | flow: application
47 | authorizationUrl: 'http://swagger.io/api/oauth/dialog'
   | ^^^^^^^^^^^^^^^^
48 | tokenUrl: 'http://tokenUrl'
49 | description: oauth application

Error was generated by the spec rule.


[7] openapi.yaml:56:5 at #/securityDefinitions/oauthPassword/authorizationUrl

The field \`authorizationUrl\` is not allowed here.

54 | type: oauth2
55 | flow: password
56 | authorizationUrl: 'http://swagger.io/api/oauth/dialog'
   | ^^^^^^^^^^^^^^^^
57 | tokenUrl: 'http://tokenUrl'
58 | description: oauth password

Error was generated by the spec rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 7 errors.
run \`redocly lint --generate-ignore-file\` to add all problems to the ignore file.


`;
