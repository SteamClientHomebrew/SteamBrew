[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / OperationResponse

# Interface: OperationResponse

Defined in: [packages/client/src/globals/steam-client/shared.ts:219](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L219)

Represents the response of an operation. It appears to be not necessary to await for this operation response. It is only used to indicate the result of an operation.

## Properties

### message

> **message**: `string`

Defined in: [packages/client/src/globals/steam-client/shared.ts:228](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L228)

An unlocalized message describing the result of the operation.

***

### result

> **result**: [`EResult`](../enumerations/EResult.md)

Defined in: [packages/client/src/globals/steam-client/shared.ts:223](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/shared.ts#L223)

The result code of the operation.
