[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [browser/src](../README.md) / constSysfsExpr

# Variable: constSysfsExpr()

> `const` **constSysfsExpr**: \{(`fileName`: `string`, `props`: `SingleFileExprProps`): `FileInfo`; (`props`: `MultiFileExprProps`): `FileInfo`[]; \}

Defined in: [packages/browser/src/constSysfsExpr.ts:24](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/browser/src/constSysfsExpr.ts#L24)

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
