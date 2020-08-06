---
id: logger
title: Logger Component
sidebar_label: Logger
---

<div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>
<table>
<tr><td colspan="2">Component Available</td></tr>
<tr><td>Server</td><td>Yes</td></tr>
<tr><td>Client</td><td>Yes</td></tr>
</table>
</div>

This is the logger class, which will output data to various locations

## Required Attributes
------
### __Server__
* `Log: function`

### __Client__
* `Log: function`

## Methods
------
### __Server__

#### `Log`
- __Parameters__: <span style={{color: '#cecece'}}>`component: string, log: string, flags: table, extra: mixed`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Depending on the provided flag, this will log the input data.</span>
- __Flags__: <span style={{color: '#cecece'}}>`console: boolean` - If true, will print to console.<br />`file: boolean` - If true, will print to file.<br />`database: boolean` - If true, will save log entry to databse.<br />`discord: boolean or table` - If boolean & true, will simply print a basic message to Discord. If table, and provided values set will send an embeded message to Discord.</span>

##### `Discord Flags`
* `color: info, success, warning, error`
* `webhook: Link to webhook if desired to log to non-standard logging channel`

### __Client__

#### `Log`
- __Parameters__: <span style={{color: '#cecece'}}>`component: string, log: string`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Will print out log into F8 console. <br /><br /><b>NOTE:</b> As this is a component defined in a shared file, the client function can also take a flags & extra parameter. These are unused on client.</span>

## Events
------
### __Server__
No server events are fired from this component.

### __Client__
No client events are fired from this component.