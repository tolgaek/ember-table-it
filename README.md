# ember-table-it
{{table-it}} component addon for simple table construction using Bootstrap 3 

# Ember-table-it

![Simple table example](https://cloud.githubusercontent.com/assets/891261/6999826/5e1d677c-dbe3-11e4-8c63-60ab12685a15.png)

## Dependencies

* **Bootstrap 3** for style
* **Ember-data** This library assumes to be working with Ember-data

## Getting Started

Install via ember-cli, `ember install:addon ember-table-it`, then use in your app.

### Available Options

#### Required
- `columns`: An array of column identifications. `label` is the text to show and `name` is the attribute name to pull from model
```js
[
  {
    label: 'ID',
    name: 'id'
  }, {
    label: 'Name',
    name: 'name'
  }, {
    label: 'Birthday',
    name: 'dob'
  }
];
```

- `rows`: Model collection

#### Optional
- `action`: Handler for the `setPage` action that gets raised during pagination


Following outlines the details of collaborating on this Ember addon.

### Quick Example
Assuming we have a simple model called `user`. And we wanted to display them paginated. 

**NOTE** For pagination to work, you have to have meta data called `total_pages` in your response from server. See [serializers](http://emberjs.com/api/data/classes/DS.RESTSerializer.html#method_extractMeta) for converting meta data if your server is returning different attribute for number of total pages

**NOTE 2** Pagination has to be applied to the models and handled by the calling controller/component

After you set your model in your route. In your controller or component
```js
import Ember from 'ember'

export default Ember.Controller.extend(
  columns: 
    [
      {
        label: 'ID',
        name: 'id'
      }, {
        label: 'Name',
        name: 'name'
      }, {
        label: 'Birthday',
        name: 'dob'
      }
    ];
  actions: {
    setPage: function(pageNum){
      this.set('users', this.store.find('user'), { page: pageNum });
    }
  }
);
```

In the corresponding template

```js
{{table-it columns=columns rows=rows action="setPage"}}
```

This will fully render the data.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests
### Unit tests aren't completed yet
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
