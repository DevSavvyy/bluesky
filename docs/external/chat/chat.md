---
id: chat-component
title: Chat Component
sidebar_label: Component
---

<div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>
<table>
<tr><td colspan="2">Component Available</td></tr>
<tr><td>Server</td><td>Yes</td></tr>
<tr><td>Client</td><td>No</td></tr>
</table>
</div>

Chat component is added ontop of a modified FiveM chat resource, this has been modified to use our permissions system.

## Required Attributes
------
### __Server__
* `Send: table`

### __Client__
* `None`

## Methods
------
### __Server__

#### `RegisterCommand`
- __Parameters__: <span style={{color: '#cecece'}}>`command: string, callback: function, suggestion: table, arguments: int, job: table`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Registers a standard command for all players to use, so long as they meet any job requirements.</span>

#### `RegisterAdminCommand`
- __Parameters__: <span style={{color: '#cecece'}}>`command: string, callback: function, suggestion: table, arguments: int`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Registers a command only admins can use. Admin access is controlled through the [Player entity](core/player.md#entity)</span>

#### `ClearAll`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Clears chat on all clients.</span>

#### Send (*Prefix*: Send)

#### `OOC`
- __Parameters__: <span style={{color: '#cecece'}}>`source: int, message: string`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Sends chat message to OOC channel to all clients.</span>

#### Server (*Prefix*: Send.Server)
#### `All`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Sends chat message to Server channel to all clients.</span>

#### `Single`
- __Parameters__: <span style={{color: '#cecece'}}>`source: int, message: string`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Sends chat message to Server channel to specified client.</span>

#### System (*Prefix*: Send.System)
#### `All`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Sends chat message to System channel to all clients.</span>

#### `Single`
- __Parameters__: <span style={{color: '#cecece'}}>`source: int, message: string`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Sends chat message to System channel to specified client.</span>

#### `Help`
- __Parameters__: <span style={{color: '#cecece'}}>`source: int, message: string`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Sends chat message to System Help channel to specified client.</span>

### __Client__
This component has no client methods.

## Events
------
As stated, this is a modified default FiveM chat resource so it also includes all of the standard chat events. These will not be documented here, if you want to see docs about this you can find them [here](https://docs.fivem.net/docs/resources/chat/).

### __Server__


### __Client__


## Suggestion Table
------
This is the expected table layout that should be passed when registering a command.

```Lua
{
help = 'Quick help line for what the command does',
params = {{
        name = 'Argument Name',
        help = 'Description of what the argument is'
    }
}
```
For as many parameters your call defines, you should add an object to the params list describing the required arguments.

## Job Table
------
# NOT YET IMPLEMENTED

## Example Command Register
------
```Lua
Chat:RegisterCommand('clear', function(source, args, rawCommand)
    TriggerClientEvent('chat:clearChat', source)
end, {
    help = 'Clear The Chat'
})
```