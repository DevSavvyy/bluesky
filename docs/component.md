---
id: component
title: Component
sidebar_label: What Is A Component?
---

Components are what builds up the Framework. Resources will define whatever functionality they want in a component and then register it with the proxy system which allows access to that component from any other resource though the [FetchComponent](/docs/exports) export.

## Methods

### Register Component
To register a component, you should add an event handler for the Proxy:Shared:RegisterReady event and in it call the RegisterComponent method of the bs_base resource. RegisterComponent takes 2 parameters, a string which will be the name of the component and your component (typically a table, but can be anything).

### Override Component
To override a component, you call the same event as you do to register it but pass a name of an already existing component.

### Extend Component
To extend a component, call the ExtendComponent method of the bs_base resource. ExportComponent takes 2 parameters, a string which is the name of the existing component and the component (typically a table, but can be anything). 

### Fetch Component
To fetch a component, call the FetchComponent method of the bs_base resource. FetchComponent takes 1 parameter, a string which is the name of the component you're wanting to fetch. If no component exists with that name, it will return nil.

## Attributes

### Optional Modifier Attributes
- _protected ( Expected Type: boolean ) - this will indicate to the proxy system that you did not intend to allow your component to be overriden. This should typically not ever be used as you should use the required attribute to ensure an overriding component meets whatever requirements you'd need to function. But it is available if absolutely needed.
- _required ( Expected Type: List of Strings ) - this will indicate what attributes an overriding component will have to have to allow an override. Add the table keys into a list of strings and that will be checked in any event of your component attempting to be overriden by another.

### Override Specific Attribute
If you'd like to override an attribute, but not the whole component simply create a component where you have the attribute you want to override defined. And then call the [ExtendComponent](#extend-component) method passing the name of the component and the component you created with the attribute you're wanting to override.

## Examples

### Example Definition
Below is a brief example of how to define, register, & call a component.

```Lua
Component = {
    _required = { 'Test' },
    Test = function(self)
        print('Test!')
    end
}

AddEventHandler('Proxy:Shared:RegisterReady', function()
    exports['bs_base']:RegisterComponent('Test', Component)
end)

AddEventHandler('Proxy:Shared:Ready', function(component)
    if component == 'Test' then
        exports['bs_base']:FetchComponent('Test'):Test()
    end
end)
```

### Calling Components
It is important that you call components through the export even if you're within your resource that you define an export. This will ensure that should someone override your component you are using that overridden component instead of yours. You can simply define a gloabl for your resource that is set to `exports['bs_base']:FetchComponent('WhateverComponent')` for later reference so you don't have to go through the export each time.