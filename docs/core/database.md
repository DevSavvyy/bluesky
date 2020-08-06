---
id: database
title: Database Component
sidebar_label: Database
---

<div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>
<table>
<tr><td colspan="2">Component Available</td></tr>
<tr><td>Server</td><td>Yes</td></tr>
<tr><td>Client</td><td>No</td></tr>
</table>
</div>

This is the default Database wrapper that we use, this is a modified version of [fivem-mongodb](https://github.com/dcr30/fivem-mongodb).

## Required Attributes
------
### __Server__:
* `isConnected: function`
* `insert: function`
* `insertOne: function`
* `find: function`
* `findOne: function`
* `update: function`
* `updateOne: function`
* `delete: function`
* `deleteOne: function`
* `count: function`

## Methods
------
### __Server__

#### `isConnected`
- __Parameters__: <span style={{color: '#cecece'}}>`None`</span>
- __Return__: <span style={{color: '#cecece'}}>`boolean`</span>
- __Description__: <span style={{color: '#cecece'}}>Return wether or not there is an active connection to the database</span>

#### `insert`
- __Parameters__: <span style={{color: '#cecece'}}>`params: table, callback: function`</span>
- __Return__: <span style={{color: '#cecece'}}>`table`</span>
- __Description__: <span style={{color: '#cecece'}}>Inserts a list of items into the specified collection.</span>

#### `insertOne`
- __Parameters__: <span style={{color: '#cecece'}}>`params: table, callback: function`</span>
- __Return__: <span style={{color: '#cecece'}}>`table`</span>
- __Description__: <span style={{color: '#cecece'}}>Inserts a single item into the specified collection.</span>

#### `find`
- __Parameters__: <span style={{color: '#cecece'}}>`params: table, callback: function`</span>
- __Return__: <span style={{color: '#cecece'}}>`table`</span>
- __Description__: <span style={{color: '#cecece'}}>Returns all documents that match the query.</span>

#### `findOne`
- __Parameters__: <span style={{color: '#cecece'}}>`params: table, callback: function`</span>
- __Return__: <span style={{color: '#cecece'}}>`table`</span>
- __Description__: <span style={{color: '#cecece'}}>Returns the first document that match the query.</span>

#### `update`
- __Parameters__: <span style={{color: '#cecece'}}>`params: table, callback: function, isUpdateOne: boolean`</span>
- __Return__: <span style={{color: '#cecece'}}>`table`</span>
- __Description__: <span style={{color: '#cecece'}}>Updates all documents that match the filter if `isUpdateOne` is false, or updates the first document that matches the filter if `isUpdateOne` true</span>

#### `updateOne`
- __Parameters__: <span style={{color: '#cecece'}}>`params: table, callback: function`</span>
- __Return__: <span style={{color: '#cecece'}}>`table`</span>
- __Description__: <span style={{color: '#cecece'}}>Updates the first document that matches the filter.</span>

#### `delete`
- __Parameters__: <span style={{color: '#cecece'}}>`params: table, callback: function`</span>
- __Return__: <span style={{color: '#cecece'}}>`table`</span>
- __Description__: <span style={{color: '#cecece'}}>Deletes all documents that match the filter.</span>

#### `deleteOne`
- __Parameters__: <span style={{color: '#cecece'}}>`params: table, callback: function`</span>
- __Return__: <span style={{color: '#cecece'}}>`table`</span>
- __Description__: <span style={{color: '#cecece'}}>Deletes the first document that match the filter.</span>

#### `count`
- __Parameters__: <span style={{color: '#cecece'}}>`params: table, callback: function`</span>
- __Return__: <span style={{color: '#cecece'}}>`int`</span>
- __Description__: <span style={{color: '#cecece'}}>Counts the number of documents that match the filter.</span>

### __Client__
This component has no client methods.

## Events
------
### __Server__
#### `Database:Server:Ready`
- __Sent Values__: <span style={{color: '#cecece'}}>`None`</span>
- __Description__: <span style={{color: '#cecece'}}>Indicates both authentication & game databases are connected.</span>

### __Client__
No client events are fired from this component.

## Query Table
------
All of the methods in this component are expecting a table that has all of the query data for MongoDB. Below are some examples of how certain operations are done.

#### Insert 
```Lua  
exports['bs_base']:FetchComponent('Database'):insertOne({ 
    collection = 'somecollection',
    document = {
        SomeKey = 'SomeData',
        int = 0,
        bool = true,
        table = {
            something = 'something'
        },
    }
}, function (success, result, insertedIds)
    if not success then return end

    -- Do stuff here
end)
```

#### Find
```Lua
exports['bs_base']:FetchComponent('Database'):findOne({
    collection = 'somecollection',
    query = {
        SomeKey = 'SomeData'
    }
}, function (success, results)
    if not success then return end

    -- Do stuff here
end)
```

#### Update
```Lua
exports['bs_base']:FetchComponent('Database'):updateOne({
    collection = 'somecollection',
    query = {
        SomeKey = 'SomeData',
    }, 
    update = { 
        ["$set"] = { 
            SomeKey = 'SomeOtherData'
        }
    }
})
```

#### Delete
```Lua
exports['bs_base']:FetchComponent('Database'):deleteOne({
    collection = 'somecollection',
    query = {
        SomeKey = 'SomeOtherData'
    }
}, function (success, results)
    if not success then return end

    -- Do stuff here
end)
```

#### Count
```Lua
exports['bs_base']:FetchComponent('Database'):count({
    collection = 'somecollection',
    query = {
        SomeKey = 'SomeData'
    }
}, function (success, count)
    if not success then return end

    -- Do stuff here
end)
```

## Other Helpful Tips
------
#### Ordering
You may want to order your results, achieving this is very simple and just requires passing an options table in the query. `1` is to order ascending, and `-1` is order descending

```Lua
exports['bs_base']:FetchComponent('Database'):findOne({
    collection = 'somecollection',
    query = {
        SomeKey = 'SomeData'
    },
    options = {
        filter = {
            SomeKey = -1
        }
    }
}, function (success, results)
    if not success then return end

    -- Do stuff here
end)
```

Should you need to do anything else that isn't covered in this document, refer to the [MongoDB Documentation](https://docs.mongodb.com/)