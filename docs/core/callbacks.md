---
id: callbacks
title: Callbacks Component
sidebar_label: Callbacks
---

<div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>
<table>
<tr><td colspan="2">Component Available</td></tr>
<tr><td>Server</td><td>Yes</td></tr>
<tr><td>Client</td><td>Yes</td></tr>
</table>
</div>

This component allows you to easily trigger server events and get a value returned from it without having to create 3 different events yourself. Simply have to register the Callback on the server and then call it from the Client passing whatever ID you assigned to it.

## Required Attributes
------
### __Server__
* `RegisterServerCallback: function`

### __Client__
* `ServerCallback: function`

## Methods
------
### __Server__

#### `RegisterServerCallback`
- __Parameters__: <span style={{color: '#cecece'}}>`event: string, cb: function`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Registers event ID to function for server callbacks</span>

#### `DoServerCallback`
- __Parameters__: <span style={{color: '#cecece'}}>`source: int, event: string, data: any`</span>
- __Return__: <span style={{color: '#cecece'}}>`val: any`</span>
- __Description__: <span style={{color: '#cecece'}}>Executes registered function associated with given event ID.</span>

### __Client__

#### `ServerCallback`
- __Parameters__: <span style={{color: '#cecece'}}>`event: string, data: any, cb: function`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Calls registered server callback with given event ID.</span>

## Events
------
### __Server__

#### `Callbacks:Server:TriggerEvent`
- __Sent Values__: <span style={{color: '#cecece'}}>`event: string, data: any`</span>
- __Description__: <span style={{color: '#cecece'}}>Executes function registered to the callback event.</span>

### __Client__

#### `Callbacks:Client:ReceiveCallback`
- __Sent Values__: <span style={{color: '#cecece'}}>`event: string, data: any`</span>
- __Description__: <span style={{color: '#cecece'}}>Executes function passed to the ServerCallback function to use the value the server returns.</span>

## Examples
------
Below is a simple example of how the callback system works.

### __Server-Side__
```Lua
exports['bs_base']:FetchComponent('Callbacks'):RegisterServerCallback('Component:Action', function(source, data, cb)
    cb(Config.SomeServerValue)
end)
```

### __Client-Side__
```Lua
exports['bs_base']:FetchComponent('Callbacks'):ServerCallback('Component:Action', data.character.id, function(value)
    print(value)
end)
```