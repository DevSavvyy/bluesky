---
id: spawn
title: Spawn Component
sidebar_label: Spawn
---

<div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>
<table>
<tr><td colspan="2">Component Available</td></tr>
<tr><td>Server</td><td>No</td></tr>
<tr><td>Client</td><td>Yes</td></tr>
</table>
</div>

This component handles spawning the player to the world, it also handles disabling `spawnmanagers` auto spawn.

## Required Attributes
------
### __Server__
* `None`

### __Client__
* `InitCamera: function`
* `Init: function`

## Methods
------
### __Server__
This component has no server methods.

### __Client__

#### `InitCamera`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>The default implementation of this method does nothing, it serves as a placeholder to allow creating a stationary camera before spawnmanager spawns the players ped to the world.</span>

#### `Init`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Places the players ped at the specified spawn point</span>

## Events
------
### __Server__
No server events are fired from this component.

### __Client__
No client events are fired from this component.

## Other Attributes
------
### __Client__
* `SpawnPoint`: list with `x`, `y`, `z`, `h` indexes for spawn location.