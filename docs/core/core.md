---
id: core
title: Core Component
sidebar_label: Core
---

<div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>
<table>
<tr><td colspan="2">Component Available</td></tr>
<tr><td>Server</td><td>No</td></tr>
<tr><td>Client</td><td>Yes</td></tr>
</table>
</div>

This is the entry point of Blue Sky Framework, this is where the event to start the login process happens.

## Required Attributes
------
### __Server__
* `None`

### __Client__
* `Init: function`

## Methods
------
### __Server__
This component has no server methods.

### __Client__

#### `Init`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Called as soon as the client loads the file, it spawns a thread and waits until `NetworkIsPlayerActive(PlayerId())` is true then triggers `Core:Client:SessionStarted` & `Core:Server:SessionStarted` as well as starts the thread which disables seat shuffling, AI emergency dispatch, and handles tazer length change.</span>

## Events
------
### __Server__
#### `Core:Server:SessionStarted`
- __Sent Values__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Entry point event that is fired as soon as the player is active.</span>

### __Client__
#### `Core:Client:SessionStarted`
- __Sent Values__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Entry point event that is fired as soon as the player is active.</span>