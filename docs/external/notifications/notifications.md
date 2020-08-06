---
id: notifications-component
title: Notification Component
sidebar_label: Notification
---

<div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>
<table>
<tr><td colspan="2">Component Available</td></tr>
<tr><td>Server</td><td>No</td></tr>
<tr><td>Client</td><td>Yes</td></tr>
</table>
</div>

This component allows displaying toast messages to the client

## Required Attributes
------
### __Server__
* `None`

### __Client__
* `None`

## Methods
------
### __Server__
This component has no server methods.

### __Client__

#### `Clear`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Clear all notifications</span>

#### `Success`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string, duration: int`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Shows a success notification for the provided duration</span>

#### `Warn`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string, duration: int`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Shows a warning notification for the provided duration</span>

#### `Error`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string, duration: int`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Shows a error notification for the provided duration</span>

#### `Info`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string, duration: int`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Shows a info notification for the provided duration</span>

#### `Standard`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string, duration: int`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Shows a standard notification for the provided duration</span>

#### `Custom`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string, duration: int, style: table`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Shows a notification with custom styling, provided table should be using the key as the CSS tag and the value as the CSS value.</span>

#### __Persistent__
These methods will display these alerts until manually dismissed.

##### `Persistent:Success`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string, duration: int`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Shows a success notification for the provided duration</span>

##### `Persistent:Warn`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string, duration: int`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Shows a warning notification for the provided duration</span>

##### `Persistent:Error`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string, duration: int`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Shows a error notification for the provided duration</span>

##### `Persistent:Info`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string, duration: int`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Shows a info notification for the provided duration</span>

##### `Persistent:Standard`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string, duration: int`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Shows a standard notification for the provided duration</span>

##### `Persistent:Custom`
- __Parameters__: <span style={{color: '#cecece'}}>`message: string, duration: int, style: table`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Shows a notification with custom styling, provided table should be using the key as the CSS tag and the value as the CSS value.</span>

##### `Persistent:Remove`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Clear all notifications</span>

## Events
------
### __Server__
No server events are fired from this component.

### __Client__
No client events are fired from this component.