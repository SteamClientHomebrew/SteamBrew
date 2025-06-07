[**@steambrew/client v4.2.1**](../README.md)

***

# Type Alias: ReorderableEntry\<T\>

```ts
type ReorderableEntry<T> = {
  data: T;
  label: ReactNode;
  position: number;
};
```

Defined in: [src/custom-components/ReorderableList.tsx:11](https://github.com/SteamClientHomebrew/SDK/blob/main/typescript-packages/client/src/custom-components/ReorderableList.tsx#L11)

A ReorderableList entry of type <T>.

## Type Parameters

• **T**

## Type declaration

### data?

```ts
optional data: T;
```

### label

```ts
label: ReactNode;
```

### position

```ts
position: number;
```

## Param

The name of this entry in the list.

## Param

Optional data to connect to this entry.

## Param

The position of this entry in the list.
