---
id: player
title: Player Component
sidebar_label: Player
---

<div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>
<table>
<tr><td colspan="2">Component Available</td></tr>
<tr><td>Server</td><td>Yes</td></tr>
<tr><td>Client</td><td>Yes</td></tr>
</table>
</div>

This is the component that handles storing & retrieving all player-related data.

## Required Attributes
------
### __Server__
* `GetData: function`

### __Client__
* `SetData: function`
* `GetData: function`

## Methods
------
### __Server__

#### `GetData`
- __Parameters__: <span style={{color: '#cecece'}}>`discord: string`</span>
- __Return__: <span style={{color: '#cecece'}}>`value: table`</span>
- __Description__: <span style={{color: '#cecece'}}>Retrieves the user data from the database by their Discord ID, if no user with their ID exists it will create one.</span>

### __Client__

#### `GetData`
- __Parameters__: <span style={{color: '#cecece'}}>`key: string`</span>
- __Return__: <span style={{color: '#cecece'}}>`value: any`</span>
- __Description__: <span style={{color: '#cecece'}}>Retrieves data that was bound to the player object with the given key.</span>

#### `SetData`
- __Parameters__: <span style={{color: '#cecece'}}>`key: string, value: any`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Sets data bound to the player object with the given key.</span>

## Events
------
### __Server__
No server events are fired from this component.

### __Client__
#### `Player:Client:SetData`
- __Sent Values__: <span style={{color: '#cecece'}}>`playerData: table`</span>
- __Description__: <span style={{color: '#cecece'}}>Updates the targetted clients local player object data.</span>


## Entity
------
When a player joins the server fully an event `Queue:Server:SessionActive` is fired which the processing of loading that players data. That data is stored in an object that is stored in a table in base which has its own methods to store & retrieving data specific to that player. To get this data you must go through the [Fetch Component](fetch.md).

### Methods
#### `GetData`
- __Parameters__: <span style={{color: '#cecece'}}>`key: string`</span>
- __Return__: <span style={{color: '#cecece'}}>`value: any`</span>
- __Description__: <span style={{color: '#cecece'}}>Retrieves data that was bound to the player object with the given key.</span>

#### `SetData`
- __Parameters__: <span style={{color: '#cecece'}}>`key: string, value: any`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Sets data bound to the player object with the given key.</span>

__Permissions (*Prefix*: Permissions)__

#### `IsAdmin`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`boolean`</span>
- __Description__: <span style={{color: '#cecece'}}>Checks whether or not if the player is in a Discord role that was defined as a staff role.</span>

#### `GetLevel`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`int`</span>
- __Description__: <span style={{color: '#cecece'}}>Returns the max permission level the user has based on Discord roles.</span>