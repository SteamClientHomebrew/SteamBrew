[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [browser/src](../README.md) / constSysfsExpr

# Variable: constSysfsExpr()

> `const` **constSysfsExpr**: \{(`fileName`: `string`, `props`: `SingleFileExprProps`): `FileInfo`; (`props`: `MultiFileExprProps`): `FileInfo`[]; \}

Defined in: [packages/browser/src/constSysfsExpr.ts:24](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/browser/src/constSysfsExpr.ts#L24)

Create a compile time filesystem expression.
This function will evaluate a file path at compile time, and embed a files content statically into the bundle.

## Call Signature

> (`fileName`: `string`, `props`: `SingleFileExprProps`): `FileInfo`

### Parameters

#### fileName

`string`

#### props

`SingleFileExprProps`

### Returns

`FileInfo`

## Call Signature

> (`props`: `MultiFileExprProps`): `FileInfo`[]

### Parameters

#### props

`MultiFileExprProps`

### Returns

`FileInfo`[]
