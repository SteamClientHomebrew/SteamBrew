[**@steambrew/docs v1.1.2**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / FamilySharing

# Interface: FamilySharing

Defined in: [packages/client/src/globals/steam-client/FamilySharing.ts:6](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/FamilySharing.ts#L6)

Represents functions related to Steam Family Sharing.

## Properties

### RegisterForKickedBorrower

> **RegisterForKickedBorrower**: [`Unregisterable`](Unregisterable.md)

Defined in: [packages/client/src/globals/steam-client/FamilySharing.ts:9](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/FamilySharing.ts#L9)

## Methods

### GetAvailableLenders()

> **GetAvailableLenders**(`appId`: `number`): `Promise`\<[`Lender`](Lender.md)[]\>

Defined in: [packages/client/src/globals/steam-client/FamilySharing.ts:7](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/FamilySharing.ts#L7)

#### Parameters

##### appId

`number`

#### Returns

`Promise`\<[`Lender`](Lender.md)[]\>

***

### SetPreferredLender()

> **SetPreferredLender**(`appId`: `number`, `param1`: `number`): `Promise`\<[`EResult`](../enumerations/EResult.md)\>

Defined in: [packages/client/src/globals/steam-client/FamilySharing.ts:11](https://github.com/SteamClientHomebrew/Millennium/blob/fb5ead1ff95a5ec05bfc30d7abfbefed6b3e0605/src/sdk/packages/client/src/globals/steam-client/FamilySharing.ts#L11)

#### Parameters

##### appId

`number`

##### param1

`number`

#### Returns

`Promise`\<[`EResult`](../enumerations/EResult.md)\>
