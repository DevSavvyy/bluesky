---
id: markers-component
title: Markers Component
sidebar_label: Component
---

<div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>
<table>
<tr><td colspan="2">Component Available</td></tr>
<tr><td>Server</td><td>No</td></tr>
<tr><td>Client</td><td>Yes</td></tr>
</table>
</div>

The marker component manages all markers for the framework. To be able to show a marker a group needs top be registered. Distance checks are done against groups of markers to increase overall performance. All markers in a group will attempt to show when the group is within distance.

## Methods
------
### __Server__
This component has no server methods.

### __Client__

#### Marker Groups (*Prefix*: MarkerGroups)

##### `Add`
- __Parameters__: <span style={{color: '#cecece'}}>`groupName: string, groupCoords: Vector3, distance: int`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Registers a Marker Group</span>

##### `Remove`
- __Parameters__: <span style={{color: '#cecece'}}>`groupName: string`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Removes a Marker Group</span>

##### `Update`
- __Parameters__: <span style={{color: '#cecece'}}>`groupName: string, groupCoords: Vector3, groupDistance: int`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Update Group Properties</span>

#### Markers (*Prefix*: Markers)

##### `Add`
- __Parameters__: <span style={{color: '#cecece'}}>`groupName: string, markerId: string, markerCoords: vector3, markerType: int, markerScale: vector3, markerColor :table, shouldMarkerShow: function, hint: message, action: function`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Registers a Marker to a Group</span>
- __Avoid__: <span style={{color: '#cecece'}}>Doing distance checks or heavy calls with shouldShow</span>

##### `Remove`
- __Parameters__: <span style={{color: '#cecece'}}>`groupName: string, id: string`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Removes a Marker from a Group</span>

##### `Update`
- __Parameters__: <span style={{color: '#cecece'}}>`groupName: string, markerId: string, markerCoords: vector3, markerType: int, markerScale: vector3, markerColor :table, shouldMarkerShow: function, hint: message, action: function`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Updates a Marker from a Group, will error if no marker exists</span>
