---
id: proxy
title: Proxy Component
sidebar_label: Proxy
---

<div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>
<table>
<tr><td colspan="2">Component Available</td></tr>
<tr><td>Server</td><td>Yes</td></tr>
<tr><td>Client</td><td>Yes</td></tr>
</table>
</div>

The proxy component is the main backbone of the Blue Sky Framework, this is the component you interface with when calling the [available exports](/docs/exports). This component is defined as a shared component meaning all functions are defined for both server & client.

[View Component Documentation](/docs/component)

## Required Attributes
------
### __Server__
* `None`
 
### __Client__
* `None`

## Methods
------
### __Server__

#### `WaitForExports`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Method spawns thread when called and will loop until `exports` & `exports[GetCurrentResourceName()]` are not null. Once that criteria is met, it fires off Proxy:Shared:RegisterReady and Proxy:Shared:Ready for `base` which is all core & base components defined in the bs_base resource.</span>

### __Client__

#### `WaitForExports`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Method spawns thread when called and will loop until `exports` & `exports[GetCurrentResourceName()]` are not null. Once that criteria is met, it fires off Proxy:Shared:RegisterReady and Proxy:Shared:Ready for `base` which is all core & base components defined in the bs_base resource.</span>

## Events
------
### __Server__
#### `Proxy:Shared:RegisterReady`
- __Sent Values__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Indicates that component registration is ready.</span>

#### `Proxy:Shared:ExtendReady`
- __Sent Values__: <span style={{color: '#cecece'}}>`component: string`</span>
- __Description__: <span style={{color: '#cecece'}}>Indicates that component initial component has been registered & ready for extension.</span>

#### `Proxy:Shared:Ready`
- __Sent Values__: <span style={{color: '#cecece'}}>`component: string`</span>
- __Description__: <span style={{color: '#cecece'}}>Indicates that a component was registered & is ready to use.</span>

### __Client__
#### `Proxy:Shared:RegisterReady`
- __Sent Values__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Indicates that component registration is ready.</span>

#### `Proxy:Shared:ExtendReady`
- __Sent Values__: <span style={{color: '#cecece'}}>`component: string`</span>
- __Description__: <span style={{color: '#cecece'}}>Indicates that component initial component has been registered & ready for extension.</span>

#### `Proxy:Shared:Ready`
- __Sent Values__: <span style={{color: '#cecece'}}>`component: string`</span>
- __Description__: <span style={{color: '#cecece'}}>Indicates that a component was registered & is ready to use.</span>