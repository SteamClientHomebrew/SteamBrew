[**@steambrew/docs v1.1.1**](../../../README.md)

***

[@steambrew/docs](../../../modules.md) / [client/src](../README.md) / ParentalSettingsProtoMsg

# Interface: ParentalSettingsProtoMsg

Defined in: [packages/client/src/globals/steam-client/Parental.ts:44](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L44)

Represents the parental settings and restrictions.

## Todo

This whole thing is unconfirmed as I do not have access to parental
stuff and things

## Properties

### applist\_base

> **applist\_base**: `ParentalApp`[]

Defined in: [packages/client/src/globals/steam-client/Parental.ts:51](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L51)

Base list.

***

### applist\_base\_description?

> `optional` **applist\_base\_description**: `string`

Defined in: [packages/client/src/globals/steam-client/Parental.ts:47](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L47)

***

### applist\_base\_id?

> `optional` **applist\_base\_id**: `number`

Defined in: [packages/client/src/globals/steam-client/Parental.ts:46](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L46)

***

### applist\_custom

> **applist\_custom**: `ParentalApp`[]

Defined in: [packages/client/src/globals/steam-client/Parental.ts:55](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L55)

Custom list of allowed applications.

***

### enabled\_features?

> `optional` **enabled\_features**: `number`

Defined in: [packages/client/src/globals/steam-client/Parental.ts:77](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L77)

Bitmask representing enabled features.
- Bit 0: Unknown (@todo Please provide more details if known)
- Bit 1: Online content & features - Steam Store
- Bit 2: Online content & features - Community-generated content
- Bit 3: Online content & features - My online profile, screenshots, and achievements
- Bit 4: Online content & features - Friends, chat, and groups
- Bit 5-11: Unknown (@todo Please provide more details if known)
- Bit 12: Library content - 0: Only games I choose, 1: All games

#### Todo

[EParentalFeature](../enumerations/EParentalFeature.md) ?

***

### excluded\_community\_content\_descriptors

> **excluded\_community\_content\_descriptors**: `number`[]

Defined in: [packages/client/src/globals/steam-client/Parental.ts:88](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L88)

***

### excluded\_store\_content\_descriptors

> **excluded\_store\_content\_descriptors**: `number`[]

Defined in: [packages/client/src/globals/steam-client/Parental.ts:87](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L87)

***

### is\_enabled?

> `optional` **is\_enabled**: `boolean`

Defined in: [packages/client/src/globals/steam-client/Parental.ts:65](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L65)

Indicates whether parental settings are enabled.

***

### is\_site\_license\_lock?

> `optional` **is\_site\_license\_lock**: `boolean`

Defined in: [packages/client/src/globals/steam-client/Parental.ts:82](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L82)

***

### passwordhash?

> `optional` **passwordhash**: `number`

Defined in: [packages/client/src/globals/steam-client/Parental.ts:61](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L61)

***

### passwordhashtype?

> `optional` **passwordhashtype**: `number`

Defined in: [packages/client/src/globals/steam-client/Parental.ts:59](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L59)

#### Todo

enum ?

***

### playtime\_restrictions?

> `optional` **playtime\_restrictions**: `ParentalPlaytimeRestrictions`

Defined in: [packages/client/src/globals/steam-client/Parental.ts:85](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L85)

***

### recovery\_email?

> `optional` **recovery\_email**: `string`

Defined in: [packages/client/src/globals/steam-client/Parental.ts:81](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L81)

Email for recovery (if applicable).

***

### rtime\_temporary\_feature\_expiration?

> `optional` **rtime\_temporary\_feature\_expiration**: `number`

Defined in: [packages/client/src/globals/steam-client/Parental.ts:84](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L84)

***

### salt?

> `optional` **salt**: `number`

Defined in: [packages/client/src/globals/steam-client/Parental.ts:60](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L60)

***

### steamid?

> `optional` **steamid**: `number`

Defined in: [packages/client/src/globals/steam-client/Parental.ts:45](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L45)

***

### temporary\_enabled\_features?

> `optional` **temporary\_enabled\_features**: `number`

Defined in: [packages/client/src/globals/steam-client/Parental.ts:83](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L83)

***

### temporary\_playtime\_restrictions?

> `optional` **temporary\_playtime\_restrictions**: `ParentalTemporaryPlaytimeRestrictions`

Defined in: [packages/client/src/globals/steam-client/Parental.ts:86](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L86)

***

### utility\_appids

> **utility\_appids**: `number`[]

Defined in: [packages/client/src/globals/steam-client/Parental.ts:89](https://github.com/SteamClientHomebrew/Millennium/blob/8a57b02d3469279aae948570883c198c8e14d879/src/sdk/packages/client/src/globals/steam-client/Parental.ts#L89)
