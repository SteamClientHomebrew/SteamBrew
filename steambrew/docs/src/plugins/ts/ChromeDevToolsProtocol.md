# ChromeDevToolsProtocol

Client for interacting with the Chrome DevTools Protocol (CDP) from a Millennium plugin.

## Import

```ts
import { ChromeDevToolsProtocol } from 'millennium';
```

## on

```typescript
on(event, listener): () => void
```

Subscribe to a CDP event.

```ts
const off = ChromeDevToolsProtocol.on('Network.requestWillBeSent', (params) => {
	console.log(params.request.url);
});

// later
off(); // or ChromeDevToolsProtocol.off('Network.requestWillBeSent', listener)
```

- `event`: a CDP event name (e.g. `'Network.requestWillBeSent'`)
- `listener`: receives the event params, plus `sessionId` if present
- Returns a function to unsubscribe

## off

```typescript
off(event, listener): void
```

Unsubscribe a specific listener from an event.

## send

```typescript
send(method, params?, sessionId?): Promise<ReturnType>
```

Send a CDP command and await the result.

```ts
const { root } = await ChromeDevToolsProtocol.send('DOM.getDocument');

await ChromeDevToolsProtocol.send('Page.navigate', { url: 'https://example.com' });
```

- `method`: a CDP command name (e.g. `'DOM.getDocument'`)
- `params`: optional, per the CDP method's schema
- `sessionId`: optional, target a specific CDP session (e.g. for multi-target/tab scenarios)
- Returns a promise resolving to the command's result, or rejecting on error

## Types

Methods, events, params, and return types are fully typed against the CDP protocol (`ProtocolMapping`), so TypeScript will autocomplete and check `event`/`method` names and their corresponding payloads.
