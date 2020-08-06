---
id: fetch
title: Fetch Component
sidebar_label: Fetch
---

<div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>
<table>
<tr><td colspan="2">Component Available</td></tr>
<tr><td>Server</td><td>Yes</td></tr>
<tr><td>Client</td><td>No</td></tr>
</table>
</div>

This component is how you retrieve player data created from the [Player Component](/docs/core/player).

## Required Attributes
------
### __Server__
* `Source: function`
* `PlayerData: function`
* `All: function`

### __Client__
* `None`

## Methods
------
### __Server__

#### `Source`
- __Parameters__: <span style={{color: '#cecece'}}>`source: int`</span>
- __Return__: <span style={{color: '#cecece'}}>`player: table`</span>
- __Description__: <span style={{color: '#cecece'}}>Returns the data stored under the provided source in the Players table, if none exist returns nil.</span>

#### `Database`
- __Parameters__: <span style={{color: '#cecece'}}>`key: string, value: any`</span>
- __Return__: <span style={{color: '#cecece'}}>`player: table`</span>
- __Description__: <span style={{color: '#cecece'}}>Will search the users collection trying to find an entry that matches the query, if it finds a match it will retrieve that players data from the database & the website.</span>

#### `PlayerData`
- __Parameters__: <span style={{color: '#cecece'}}>`key: string, value: any`</span>
- __Return__: <span style={{color: '#cecece'}}>`player: table`</span>
- __Description__: <span style={{color: '#cecece'}}>Search Players list for a player with the matching data, if none exist returns nil.</span>

#### `All`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`players: table`</span>
- __Description__: <span style={{color: '#cecece'}}>Returns the complete Players list.</span>

### __Client__
This component has no client methods.

## Events
------
### __Server__
No server events are fired from this component.

### __Client__
No client events are fired from this component.